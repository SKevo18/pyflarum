from typing import Literal, NoReturn, TYPE_CHECKING, Optional, Union, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumSession

from datetime import datetime

from ...flarum.core.users import MyUser, User
from ...error_handler import FlarumError, handle_errors
from ...datetime_conversions import flarum_to_datetime


class Discussions(dict):
    """
        A data of multiple discussions fetched from the API.
    """

    def __init__(self, session: 'FlarumSession', _fetched_data: dict):
        self.flarum_session = session

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

        all_discussions = list() # type: List[DiscussionFromBulk]

        for raw_discussion in self.data:
            if raw_discussion.get("type", None) == 'discussions':
                discussion = DiscussionFromBulk(session=self.flarum_session, _fetched_data=dict(data=raw_discussion, included=self.included))
                all_discussions.append(discussion)

        return all_discussions



class DiscussionFromBulk(dict):
    """
        A discussion from `Discussions`.
    """

    def __init__(self, session: 'FlarumSession', _fetched_data: dict):
        self.flarum_session = session
        super().__init__(_fetched_data)


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
    def included(self) -> List[dict]:
        return self.get("included", [{}])


    def get_user_relationship(self, raw: bool=False) -> Optional[Union[dict, User]]:
        if raw:
            return self.relationships.get("user", {})
        
        else:
            id = self.relationships.get("user", {}).get("data", {}).get("id", None)

            if id:
                for data in self.included:
                    if data.get("type", None) == 'users' and data.get("id", None) == id:
                        user = User(session=self.flarum_session, _fetched_data=dict(data=data))

                        if user.username == self.flarum_session.username:
                            return MyUser(session=self.flarum_session, _fetched_data=dict(data=data))

                        else:
                            return user

            return None



class Discussion(DiscussionFromBulk):
    """
        Discussion that was fetched from the API.
    """

    def __init__(self, session: 'FlarumSession', title: Optional[str]=None, content: Optional[str]=None, _fetched_data: Optional[dict]=None):
        self.flarum_session = session

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


    def create(self): return self.post()
    def post(self):
        """
            Posts/creates the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise the new `Discussion` is returned.
        """

        raw = self.flarum_session.session.post(self.flarum_session.api_urls['discussions'], json=self)

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        else:
            return Discussion(session=self.flarum_session, _fetched_data=json)


    def __restore_or_hide(self, hide: bool, force: bool=False) -> Union['Discussion', Literal[False], NoReturn]:
        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already hidden. Use `force = True` to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already restored. Use `force = True` to ignore this error.")


        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to {"hide" if hide else "unhide"} this discussion ({self.id}). Use `force = True` to ignore this error.')

        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        raw = self.flarum_session.session.patch(f"{self.flarum_session.api_urls['discussions']}/{self.id}", json=patch_data)

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


    def unhide(self, force: bool=False): return self.restore(force=force)
    def restore(self, force: bool=False):
        """
            Restores the discussion (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise `True` is returned.
        """

        return self.__restore_or_hide(hide=False, force=force)


    def delete(self, force: bool=False):
        """Removes a discussion forever."""
        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this discussion ({self.id})')

        raw = self.flarum_session.session.delete(f"{self.flarum_session.api_urls['discussions']}/{self.id}")

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        else:
            return True
