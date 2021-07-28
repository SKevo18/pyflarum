from typing import Any, Literal, TYPE_CHECKING, Optional, List, Union

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...flarum.core.users import UserFromBulk, UserFromNotification

from ...error_handler import FlarumError, parse_request
from ...datetime_conversions import flarum_to_datetime


class PreparedDiscussion(dict):
    def __init__(self, user: 'FlarumUser', title: Optional[str]=None, content: Optional[str]=None):
        self.user = user
        self.title = title
        self.content = content

        super().__init__()


    @property
    def to_dict(self):
        data = {
            "data": {
                "type": "discussions",
                "attributes": {
                    "title": self.title,
                    "content": self.content
                }
            }
        }

        return data


    def post(self):
        """
            Posts/creates the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise the new `Discussion` is returned.
        """

        if not isinstance(self.title, str) or not isinstance(self.content, str):
            raise TypeError(f"Both `title` and `content` parameters must be a `str`.")

        raw = self.user.session.post(self.user.api_urls['discussions'], json=self.to_dict)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)
    create = post


class Discussions(dict):
    """
        A data of multiple discussions fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    def __iter__(self):
        return iter(self.get_discussions())


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


    def get_discussions(self):
        """
            All discussions from the `Discussions` object.
        """

        all_discussions = [] # type: List[DiscussionFromBulk]

        for raw_discussion in self.data:
            if raw_discussion.get("type", None) == 'discussions':
                discussion = DiscussionFromBulk(user=self.user, _fetched_data=dict(data=raw_discussion, _parent_included=self.included))
                all_discussions.append(discussion)

        return all_discussions


class DiscussionFromNotification(dict):
    """
        A discussion from `BaseNotification`
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(_fetched_data)


    def get_full_data(self):
        raw = self.user.session.get(f"{self.user.api_urls['discussions']}/{self.id}")
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)


    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def id(self) -> Optional[int]:
        return self.data.get("id", None)


    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


    @property
    def title(self) -> Optional[str]:
        return self.attributes.get("title", None)


    @property
    def slug(self) -> Optional[str]:
        return self.attributes.get("slug", None)


    def __restore_or_hide(self, hide: bool):
        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=patch_data)
        parse_request(raw)

        return True


    def hide(self):
        """
            Hides the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=True)


    def restore(self):
        """
            Restores the discussion (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=False)
    unhide = restore


    def delete(self):
        """
            Deletes a discussion forever - this action is irreversible!
        """

        raw = self.user.session.delete(f"{self.user.api_urls['discussions']}/{self.id}")
        parse_request(raw)

        return True



# Circular:
from ...flarum.core.posts import PostFromDiscussion
class DiscussionFromBulk(DiscussionFromNotification):
    """
        A discussion from `Discussions`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def url(self):
        slug = self.slug

        if slug:
            return f"{self.user.forum_url}/d/{slug}"

        else:
            return f"{self.user.forum_url}/d/{self.id}"


    @property
    def commentCount(self) -> Optional[str]:
        return self.attributes.get("commentCount", None)


    @property
    def participantCount(self) -> Optional[str]:
        return self.attributes.get("participantCount", None)


    @property
    def createdAt(self) -> Optional[datetime]:
        raw = self.attributes.get("createdAt", None)

        return flarum_to_datetime(raw)


    @property
    def lastPostedAt(self) -> Optional[datetime]:
        raw = self.attributes.get("lastPostedAt", None)

        return flarum_to_datetime(raw)


    @property
    def lastPostNumber(self) -> Optional[int]:
        return self.attributes.get("lastPostNumber", None)


    @property
    def lastReadPostNumber(self) -> Optional[int]:
        return self.attributes.get("lastReadPostNumber", None)


    @property
    def canReply(self) -> bool:
        return self.attributes.get("canReply", False)


    @property
    def canRename(self) -> bool:
        return self.attributes.get("canRename", False)


    @property
    def canDelete(self) -> bool:
        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        return self.attributes.get("canHide", False)


    @property
    def lastReadAt(self) -> Optional[datetime]:
        raw = self.attributes.get("lastReadAt", None)

        return flarum_to_datetime(raw)


    @property
    def isHidden(self) -> bool:
        return self.attributes.get("isHidden", False)


    @property
    def subscription(self) -> Optional[str]:
        return self.attributes.get("subscription", None)


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})


    @property
    def _parent_included(self) -> List[dict]:
        # TODO: Move to README:
        """
            Raw data of the parent's included JSON data.

            In a nutshell, when you obtain `DiscussionFromBulk` from `Discussions`,
            `Discussions.included` gets passed to `_parent_included`.

            #### Long explanation for nerds (I am not good at explaining):
            This is because of the way [Flarum's includes](https://cwkevo.github.io/pyflarum/docs/#included-data) work.
            When you run a function such as `get_author()`, the data for the author is not directly in the `DiscussionFromBulk`'s JSON.
            This means that pyFlarum would have to make a new API call everytime you run `get_author()`, and you'd see 429 sooner than usual.
            Instead, the data is already in the parent's (`Discussions.included`) data. And since that gets passed to this object too, pyFlarum doesn't need to
            make any more API calls - instead, it just picks the right author from that data.
            
            You can think of this as a cache in a nutshell, if it's unclear for you. And if things are still confusing you, you just don't need to worry about this
            because pyFlarum handles everything for you in the background. Unless you are forging this object's JSON data by yourself,
            and you don't pass the parent's included - this would mean that all functions that rely on that will break. I have never spotted any weird stuff by normal
            usage of pyFlarum during testing, but there's perhaps a very tiny chance that this system can possibly bug out.
        """

        return self.get("_parent_included", [{}])


    def get_author(self) -> UserFromNotification:
        """
            Obtains the author of the discussion.

            It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
            data matches the data of user from notification.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("user", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_last_posted_user(self) -> UserFromNotification:
        """
            Obtains the user that posted the latest post in the discussion.

            It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
            data matches the data of user from notification.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("lastPostedUser", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_first_post(self) -> PostFromDiscussion:
        """
            Obtains the first post of the discussion.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("firstPost", {}).get("data", {}).get("id", None)

        for raw_post in self._parent_included:
            if raw_post.get("id", None) == id and raw_post.get("type", None) == 'users':
                post = PostFromDiscussion(user=self.user, _fetched_data=dict(data=raw_post))

                return post

        return None


    def __restore_or_hide(self, hide: bool, force: bool=False):
        """
            Either restores or hides the post.

            This function was made to prevent repetitve code, and you should use
            `hide()` or `restore()` (`unhide()`) instead.
        """

        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already hidden. Use `force = True` to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already restored. Use `force = True` to ignore this error.")


        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to {"hide" if hide else "unhide"} this discussion ({self.id}). Use `force = True` to ignore this error.')

        return super().__restore_or_hide(hide=hide)


    def hide(self, force: bool=False):
        """
            Hides the discussion from the sight of other unprivileged users
            that are not worthy to view such thread.
        """

        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        """
            Restores the discussion (unhides it), bringing it back to life.
        """

        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def delete(self, force: bool=False):
        """
            Scronches the discussion forever. This cannot be reverted.

            Use `force=True` to attempt to delete the discussion even if the API states that you can't.
        """

        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this discussion ({self.id})')

        else:
            return super().delete()


# Circular:
from ...flarum.core.posts import PostFromBulk
class Discussion(DiscussionFromBulk):
    """
        A Flarum discussion, obtained directly from the API by ID.
        
        This is the top-level discussion object that contains all the properties of a discussion, and
        inherits properties from all previous discussion-like objects.

        Learn more about inheritance [here](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def included(self) -> List[dict]:
        """
            Returns raw list of JSON included data.

            Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)
        """

        return self.get("included", [{}])


    def get_author(self, mode: Union[Literal['first_number'], Any]='first_number') -> UserFromBulk:
        """
            Obtains the discussion's author, AKA. the author
            of the post with number 1 in a discussion.

            `mode` allows you to specify the mode that is used to determine whether or not the post is the first post
            of the discussion.

            - `'first_number'` - checks if the number of the post is 1 - if yes, it fetches that post's author.
            - `Any` - if anything other than `'first_number'` is passed (e. g. `'first_user``, but this can be anything), then this
            returns the author of the first post in the JSON.
            I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's
            probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?
        """

        for post in self.get_posts():
            if mode == 'first_number':
                if post.number == 1:
                    author = post.get_author()

                    return author

            else:
                author = post.get_author()
                return author

        return None


    def get_posts(self) -> List[PostFromBulk]:
        """
            Returns a list of `pyflarum.flarum.core.posts.PostFromBulk` objects.

            It might seem strange why this doesn't return `pyflarum.flarum.core.posts.PostFromDiscussion` instead,
            but these posts are in fact identical to `pyflarum.flarum.core.posts.PostFromBulk`, that's why they are returned.
        """

        all_posts = list() # type: List[PostFromBulk]
        raw_posts = self.relationships.get("posts", {}).get("data", [{}]) # type: List[dict]

        for raw_post in raw_posts:
            if raw_post.get("type", None) == 'posts':
                id_to_find = raw_post.get("id", None)

                if id_to_find:
                    for possible_raw_post in self.included:
                        if (possible_raw_post.get("type", None) == 'posts') and (possible_raw_post.get("id", None) == id_to_find):
                            post = PostFromBulk(user=self.user, _fetched_data=dict(data=possible_raw_post, _parent_included=self.included))

                            all_posts.append(post)

        return all_posts


    def get_first_post(self):
        """
            The `Discussion` object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this
            function was included in `Discussion`, but it does not work!

            ### Alternative:

            ```python
            discussion = user.get_discussion_by_id(1)
            first_post = discussion.get_posts()[0]
            ```
        """

        raise NotImplementedError("`Discussion` does not have the first post data to fetch. Please, use the snippet in this function's docstring instead to obtain the first post.")
