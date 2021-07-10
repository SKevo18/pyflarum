from typing import Literal, NoReturn, TYPE_CHECKING, Optional, Union, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...flarum.core.users import MyUser, User
from ...error_handler import FlarumError, handle_errors
from ...datetime_conversions import flarum_to_datetime


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

    def __init__(self, user: 'FlarumUser', title: Optional[str]=None, content: Optional[str]=None, _fetched_data: Optional[dict]=None):
        self.user = user

        if _fetched_data:
            super().__init__(_fetched_data)
            
        else:
            if not isinstance(title, str) or not isinstance(content, str):
                raise TypeError(f"Both 'title' and 'content' parameters must be a 'str', if '_fetched_data' is not present.")

            super().__init__({
                "data": {
                    "type": "discussions",
                    "attributes": {
                        "title": title,
                        "content": content
                    }
                }
            })


    def post(self):
        """
            Posts/creates the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise the new `Post` is returned.
        """

        raw = self.user.session.post(self.user.api_urls['discussions'], json=self)

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        else:
            return Post(user=self.user, _fetched_data=json)
    create = post


    def __restore_or_hide(self, hide: bool, force: bool=False) -> Union['Post', Literal[False], NoReturn]:
        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Post {self.id} is already hidden. Use `force = True` to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Post {self.id} is already restored. Use `force = True` to ignore this error.")


        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to {"hide" if hide else "unhide"} this discussion ({self.id}). Use `force = True` to ignore this error.')

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

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        else:
            return True


    def hide(self, force: bool=False):
        """
            Hides the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        """
            Restores the discussion (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def delete(self, force: bool=False):
        """Removes a discussion forever."""
        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this discussion ({self.id})')

        raw = self.user.session.delete(f"{self.user.api_urls['discussions']}/{self.id}")

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        else:
            return True
