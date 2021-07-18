from typing import Literal, NoReturn, TYPE_CHECKING, Optional, Union, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser
    from ...flarum.core.discussions import DiscussionFromBulk, Discussion

from ...flarum.core.discussions import DiscussionFromNotification

from datetime import datetime

from ...flarum.core.users import UserFromBulk
from ...error_handler import FlarumError, parse_request
from ...datetime_conversions import flarum_to_datetime


class PreparedPost(dict):
    def __init__(self, user: 'FlarumUser', discussion: Optional[Union['Discussion', 'DiscussionFromBulk', 'DiscussionFromNotification']]=None, content: Optional[str]=None):
        self.user = user
        self.discussion = discussion
        self.content = content
    

    @property
    def to_dict(self):
        data = {
            "data": {
                "type": "posts",
                "attributes": {
                    "content": self.content
                },
                "relationships": {
                    "discussion": {
                        "data": {
                            "type": "discussions",
                            "id": self.discussion.id
                        }
                    }
                }
            }
        }

        return data


    def post(self):
        """
            Posts/creates the post. Returns the created `Post`.
        """

        raw = self.user.session.post(self.user.api_urls['posts'], json=self.to_dict)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)
    create = post


class Posts(dict):
    """
        A data of multiple posts fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    def __iter__(self):
        return iter(self.get_posts())


    @property
    def links(self) -> dict:
        return self.get("links", {})


    @property
    def first_link(self) -> Optional[str]:
        return self.links.get("first", None)


    @property
    def previous_link(self) -> Optional[str]:
        return self.links.get("prev", None)


    @property
    def next_link(self) -> Optional[str]:
        return self.links.get("next", None)


    @property
    def data(self) -> List[dict]:
        return self.get("data", [{}])


    @property
    def included(self) -> List[dict]:
        return self.get("included", [{}])


    def get_posts(self):
        """
            All posts from the `Posts` object.
        """

        all_posts = [] # type: List[PostFromBulk]

        for raw_post in self.data:
            if raw_post.get("type", None) == 'posts':
                post = PostFromBulk(user=self.user, _fetched_data=dict(data=raw_post, _parent_included=self.included))
                all_posts.append(post)

        return all_posts


class PostFromDiscussion(dict):
    """
        A post from `Discussion`
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(_fetched_data)



    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def id(self) -> Optional[int]:
        raw = self.data.get("id", None)

        if raw:
            return int(raw)


    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


    @property
    def number(self) -> Optional[int]:
        return self.attributes.get("number", None)


    @property
    def createdAt(self) -> Optional[datetime]:
        raw = self.attributes.get("createdAt", None)

        return flarum_to_datetime(raw)


    @property
    def contentType(self) -> Optional[str]:
        return self.attributes.get("contentType", None)


    @property
    def contentHtml(self) -> Optional[str]:
        return self.attributes.get("contentHtml", None)


    def __restore_or_hide(self, hide: bool) -> Union[Literal[False], NoReturn]:
        patch_data = {
            "data": {
                "type": "posts",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)


    def hide(self):
        """
            Hides the post. Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=True)


    def restore(self):
        """
            Restores the post (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=False)
    unhide = restore


    def delete(self):
        """
            Removes the post forever.
        """

        raw = self.user.session.delete(f"{self.user.api_urls['posts']}/{self.id}")
        parse_request(raw)

        return True


    def edit(self, new_post: PreparedPost):
        """
            Edits the post.
        """

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=new_post.to_dict)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)



class PostFromNotification(PostFromDiscussion):
    """
        A post from `Notification`
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)



    @property
    def content(self) -> Optional[str]:
        return self.attributes.get("content", None)


    @property
    def ipAddress(self) -> Optional[str]:
        return self.attributes.get("ipAddress", None)


    @property
    def editedAt(self) -> Optional[datetime]:
        raw = self.attributes.get("editedAt", None)

        return flarum_to_datetime(raw)


    @property
    def canEdit(self) -> bool:
        return self.attributes.get("canEdit", False)


    @property
    def canDelete(self) -> bool:
        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        return self.attributes.get("canHide", False)


    @property
    def _parent_included(self) -> List[dict]:
        return self.get("_parent_included", [{}])


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})


    @property
    def url(self):
        discussion_id = self.relationships.get("discussion", {}).get("data", {}).get("id", None)

        if discussion_id:
            return f"{self.user.forum_url}/d/{discussion_id}/{self.number}"


    def get_discussion(self):
        id_to_find = self.relationships.get("discussion", {}).get("data", {}).get("id", None)

        for possible_discussion in self._parent_included:
            if (possible_discussion.get("type", None) == "discussions") and (possible_discussion.get("id", None) == id_to_find):
                discussion = DiscussionFromNotification(user=self.user, _fetched_data=dict(data=possible_discussion, _parent_included=self._parent_included))

                return discussion

        return None


    def reply_to(self, post: PreparedPost):
        """
            Replies to this `Post` with another `PreparedPost`.
        """

        to_post = post
        to_post.discussion = self.get_discussion()

        return to_post.post()


    def get_author(self):
        id = self.relationships.get("user", {}).get("data", {}).get("id", None)
        
        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromBulk(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def edit(self, new_data: PreparedPost):
        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=new_data.to_dict)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)



class PostFromBulk(PostFromNotification):
    """
        A post from `Posts`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def _parent_included(self) -> List[dict]:
        return self.get("_parent_included", [{}])


class Post(PostFromBulk):
    """
        A Flarum group.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)
