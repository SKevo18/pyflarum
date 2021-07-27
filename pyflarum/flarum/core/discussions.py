from typing import TYPE_CHECKING, Optional, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...flarum.core.users import User

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
        return self.get("_parent_included", [{}])


    def get_author(self):
        id = self.relationships.get("user", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = User(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_last_posted_user(self):
        id = self.relationships.get("lastPostedUser", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = User(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_first_post(self):
        id = self.relationships.get("firstPost", {}).get("data", {}).get("id", None)

        for raw_post in self._parent_included:
            if raw_post.get("id", None) == id and raw_post.get("type", None) == 'users':
                post = PostFromDiscussion(user=self.user, _fetched_data=dict(data=raw_post))

                return post

        return None


    def __restore_or_hide(self, hide: bool, force: bool=False):
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
        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def delete(self, force: bool=False):
        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this discussion ({self.id})')

        else:
            return super().delete()

# Circular:
from ...flarum.core.posts import PostFromBulk
class Discussion(DiscussionFromBulk):
    """
        A Flarum discussion.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def included(self) -> List[dict]:
        return self.get("included", [{}])


    def get_posts(self):
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
