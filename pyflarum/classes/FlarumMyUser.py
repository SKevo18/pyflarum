from datetime import datetime
from typing import Generator, Union

from pyflarum.classes.flarum.FlarumNotifications import FlarumNotifications

from pyflarum.classes.FlarumSession import FlarumSession

from pyflarum.classes.flarum.FlarumDiscussions import FlarumDiscussion, FlarumDiscussions

from pyflarum.classes.flarum.FlarumPosts import FlarumPost

from pyflarum.classes.flarum.FlarumUser import FlarumUser
from pyflarum.classes.flarum.FlarumUsers import FlarumUsers

from pyflarum.classes.extensions.FriendsOfFlarum_Polls import FoF_Poll, FoF_PollOption

from pyflarum.exceptions import FlarumError, FlarumPermissionError, FlarumUnauthenticatedError


class FlarumMyUser(FlarumSession):
    """
        The main class for performing all Flarum related User actions that the `pyflarum` package offers.
    """

    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, cache: bool=True, cache_expire_after: int=300, proxies: dict=None):
        """
            The initializator for `FlarumMyUser()`.
        """

        FlarumSession.__init__(self, forum_url, username, password, cache, cache_expire_after, proxies)

        # API URLs:
        self.ENDPOINTS = {
            "api_discussions_url": f"{self.forum_url}/api/discussions",
            "api_posts_url": f"{self.forum_url}/api/posts",
            "self.api_users_url": f"{self.forum_url}/api/users"
        }

    @property
    def user(self) -> Union[FlarumUser, None]:
        if not self.isAuthenticated:
            raise FlarumUnauthenticatedError("Cannot obtain self user data when not authenticated.")

        user = None

        try:
            user = self.get_user_by_username(self.username)

        except:
            raise

        finally:
            return user
    

    def get_notifications(self) -> Union[FlarumNotifications, None]:
        notifications = None

        if not self.isAuthenticated:
            raise FlarumUnauthenticatedError("Cannot obtain notifications when not authenticated.")
        
        try:
            raw_notifications = self.session.get(f"{self.forum_url}/api/notifications").json() # type: dict

            if 'errors' in raw_notifications:
                raise FlarumError(raw_notifications)

            notifications = FlarumNotifications(raw_notifications)

            return notifications

        except KeyError:
            raise

        finally:
            return notifications



    def create_discussion(self, discussion: FlarumDiscussion) -> bool:
        """
            Creates a discussion.
        """

        if not self.isAuthenticated:
            raise FlarumUnauthenticatedError("Cannot create discussion when not authenticated.")
        
        if discussion is None or type(discussion) != FlarumDiscussion:
            raise FlarumError("discussion parameter must be a 'FlarumDiscussion' object.")

        discussion_response = None

        try:
            discussion_response = self.session.post(url=self.ENDPOINTS['api_discussions_url'], json=discussion).json() # type: dict

            if 'errors' in discussion_response:
                raise FlarumError(discussion_response)

            discussion_response = FlarumDiscussion(raw=discussion_response)

        except:
            raise
        
        finally:
            return discussion_response
    
    def mark_notifications_as_read(self) -> bool:
        self.session.post(f"{self.forum_url}/api/notifications/read")
    

    def like_post(self, post: FlarumPost) -> bool:
        """
            Likes a post.

            - `post_id`: The post ID to like.

            #### Example:
            ```python
            post = flarum_session.get_post_by_id(12)
            flarum
            ```
        """

        if post.canLike:
            self.session.patch(url=f"{self.forum_url}/api/posts/{post.id}", json={"data":{"type":"posts","id":"50","attributes":{"isLiked":True}}})

        else:
            FlarumPermissionError(f"You can't like post {post.id}")

        return True


    def unlike_post(self, post: FlarumPost) -> bool:
        """
            Unlikes a liked post.

            - `post_id`: The post ID to unlike.

            #### Example:
            ```python
            post = flarum_session.get_post_by_id(12)
            flarum_session.unlike_post(post)
            ```
        """

        self.session.patch(url=f"{self.forum_url}/api/posts/{post.id}", json={"data":{"type":"posts","id":"50","attributes":{"isLiked":False}}})

        return True

    def reply_to_discussion(self, discussion_id: int, content: str) -> Union[FlarumPost, None]:
        post = None

        template = {
            "data": {
                "type":"posts",
                "attributes": {
                    "content": content
                },
                "relationships": {
                    "discussion": {
                        "data": {
                            "type": "discussions",
                            "id": discussion_id
                        }
                    }
                }
            }
        }

        try:
            response_data = self.session.post(f"{self.forum_url}/api/posts", json=template).json() # type: dict

            if 'errors' in response_data:
                raise FlarumError(response_data)

            post = FlarumPost(response_data)

        except:
            raise

        finally:
            return post


    # TODO: get_all_users params + get_all_users_detailed
    def get_all_users(self) -> Union[FlarumUsers, None]:
        users = None

        try:
            url = self.ENDPOINTS['api_users_url']
            response_data = self.session.get(url=url).json() # type: dict

            if 'errors' in users:
                raise FlarumError(response_data)

            users = FlarumUsers(response_data)

        except:
            raise

        finally:
            return users


    def get_user_by_id(self, user_id: Union[str, int]) -> Union[dict, None]:
        user = None

        try:
            url = f"{self.forum_url}/api/users/{str(user_id)}"
            ud = self.session.get(url=url).json() # type: dict

            if 'errors' in ud:
                return None

            user = FlarumUser(ud)

        except:
            raise

        finally:
            return user


    def get_user_by_username(self, user_username: str) -> Union[FlarumUser, None]:
        user = None

        try:
            url = f"{self.ENDPOINTS['api_users_url']}?filter%5Bq%5D={user_username}"
            ud = self.session.get(url=url).json() # type: dict

            if 'errors' in ud:
                raise Exception(ud)

            for user in ud['data']:

                if user['attributes']['username'] == user_username:
                    user_details = self.session.get(url=f"{self.ENDPOINTS['api_users_url']}/{user['id']}").json()
                    user = FlarumUser(user_details)

                else:
                    continue

        except:
            raise

        finally:
            return user


    # TODO: Finish (filters, includes, tags, etc.) + programatic URL builder (look for URL parsers)
    def get_discussions(self, page=1, sort_by: str="lastPostedAt", include: list=None, filter: str=None) -> Union[FlarumDiscussions, None]:
        discussions = None
        parameters = {}

        if page:
            parameters['page[offset]'] = str(page * 20)

        if sort_by:
            parameters['sort'] = sort_by

        if include and type(include) == list:
            parameters['include'] = ",".join(include)
        
        if filter:
            parameters['filter'] = filter

        try:
            url = f"{self.forum_url}/api/discussions" 
            dd = self.session.get(url=url, params=parameters).json() # type: dict

            if 'errors' in dd:
                return None

            discussions = FlarumDiscussions(dd)

        except:
            raise

        finally:
            return discussions


    def get_discussion_by_id(self, discussion_id: Union[str, int]) -> Union[FlarumDiscussion, None]:
        discussion = None

        try:
            url = f"{self.forum_url}/api/discussions/{str(discussion_id)}"
            raw_discussion = self.session.get(url=url).json() # type: dict

            if 'errors' in raw_discussion:
                raise FlarumError(raw_discussion)

            discussion = FlarumDiscussion(raw=raw_discussion['data'])

        except:
            raise

        finally:
            return discussion




    def get_post_by_id(self, post_id: Union[str, int]) -> Union[FlarumPost, None]:
        post = None

        try:
            url = f"{self.forum_url}/api/posts/{str(post_id)}"
            raw_post = self.session.get(url=url).json() # type: dict

            if 'errors' in raw_post:
                raise FlarumError(raw_post)

            post = FlarumPost(raw_post['data'])

        except:
            raise

        finally:
            return post


    def vote_on_poll(self, poll: FoF_Poll, option: FoF_PollOption) -> FoF_Poll:

        url = f"{self.forum_url}/api/fof/polls/{poll.id}/vote"
        response = self.session.patch(url, json={ "data": { "optionId": str(option.id) } }).json()
        
        if 'errors' in response:
            return response
        
        poll = FoF_Poll(response['data'])
        
        for included in response['included']:

                if included['type'] == "poll_options":
                    poll['_options'] = []
                    poll['_options'].append(included)
                    continue
        
        return poll
