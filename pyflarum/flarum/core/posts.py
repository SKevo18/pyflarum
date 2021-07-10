from pyflarum.flarum.core.discussions import Discussion, DiscussionFromBulk, DiscussionFromNotification
from typing import Literal, NoReturn, TYPE_CHECKING, Optional, Union, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...flarum.core.users import MyUser, User
from ...error_handler import FlarumError, parse_request_as_json
from ...datetime_conversions import flarum_to_datetime


class PreparedPost(dict):
    def __init__(self, user: 'FlarumUser', discussion: Optional[Union[Discussion, DiscussionFromBulk, DiscussionFromNotification]]=None, content: Optional[str]=None):
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

        if not isinstance(self.discussion, (Discussion, DiscussionFromBulk, DiscussionFromNotification)) or not isinstance(self.content, str):
            raise TypeError("`discussion` must be `Discussion`, `DiscussionFromBulk` or `DiscussionFromNotification` and `content` must be `str`.")

        raw = self.user.session.post(self.user.api_urls['posts'], json=self.to_dict)
        json = parse_request_as_json(raw)

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

        all_posts = list() # type: List[PostFromBulk]

        for raw_post in self.data:
            if raw_post.get("type", None) == 'posts':
                post = PostFromBulk(user=self.user, _fetched_data=dict(data=raw_post, _parent_included=self.included))
                all_posts.append(post)

        return all_posts


class PostFromNotification(dict):
    """
        A post from `BaseNotification`
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
    def contentHTML(self) -> Optional[str]:
        return self.attributes.get("contentHtml", None)


    @property
    def content(self) -> Optional[str]:
        return self.attributes.get("content", None)


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


    def __restore_or_hide(self, hide: bool, force: bool=False) -> Union[Literal[False], NoReturn]:
        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to {"hide" if hide else "unhide"} this post ({self.id}). Use `force = True` to ignore this error.')

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
        parse_request_as_json(raw)

        return True


    def hide(self, force: bool=False):
        """
            Hides the post. Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        """
            Restores the post (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def delete(self, force: bool=False):
        """
            Removes the post forever.
        """

        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this post ({self.id})')

        raw = self.user.session.delete(f"{self.user.api_urls['discussions']}/{self.id}")
        parse_request_as_json(raw)

        return True


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


class PostFromBulk(PostFromNotification):
    """
        A post from `Posts`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)


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


    @property
    def url(self) -> Optional[str]:
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
        return self.get("_parent_included", [{}])


    def get_author(self) -> Optional[Union[dict, User]]:
        id = self.relationships.get("user", {}).get("data", {}).get("id", None)
        
        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = User(user=self.user, _fetched_data=dict(data=raw_user))

                if user.username == self.user.username:
                    return MyUser(user=self.user, _fetched_data=dict(data=raw_user))

                else:
                    return user

        return None


    def get_last_posted_user(self) -> Optional[Union[dict, User]]:
        id = self.relationships.get("lastPostedUser", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = User(user=self.user, _fetched_data=dict(data=raw_user))

                if user.username == self.user.username:
                    return MyUser(user=self.user, _fetched_data=dict(data=raw_user))

                else:
                    return user

        return None


class Post(PostFromBulk):
    """
        A Flarum discussion.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)


    def __restore_or_hide(self, hide: bool, force: bool=False) -> Union['Post', Literal[False], NoReturn]:
        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Post {self.id} is already hidden. Use `force = True` to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Post {self.id} is already restored. Use `force = True` to ignore this error.")

        return super().__restore_or_hide(hide=hide, force=force)


    def hide(self, force: bool=False):
        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def reply_to(self, post: PreparedPost, force: bool=False):
        if not self.canReply and not force:
            raise FlarumError(f"You cannot reply to this post ({self.id}). Use `force = True` to ignore this error.")

        return super().reply_to(post=post)
