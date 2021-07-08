from typing import Literal, NoReturn, TYPE_CHECKING, Optional, Union

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumSession

from datetime import datetime

from ...error_handler import FlarumError, handle_errors
from ...datetime_conversions import flarum_to_datetime


class Discussion(dict):
    """
        Discussion that was fetched from the API.
    """

    def __init__(self, session: 'FlarumSession', title: Optional[str]=None, content: Optional[str]=None, fetched_data: Optional[dict]=None):
        self.flarum_session = session

        if fetched_data:
            super().__init__(fetched_data)
            
        else:
            if not isinstance(title, str) or not isinstance(content, str):
                raise TypeError(f"Both 'title' and 'content' parameters must be a 'str', if 'fetched_data' is not present.")

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
            Posts/creates the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise the `Discussion` is returned.
        """

        response = self.flarum_session.session.post(self.flarum_session.api_urls['discussions'], json=self).json()

        if 'errors' in response:
            return handle_errors(response['errors'])

        else:
            return Discussion(session=self.flarum_session, fetched_data=response)


    def __restore_or_hide(self, hide: bool, force: bool=False) -> Union['Discussion', Literal[False], NoReturn]:
        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already hidden. Use 'force = True' parameter to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already restored. Use 'force = True' parameter to ignore this error.")


        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to remove this discussion ({self.id})')

        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        response = self.flarum_session.session.patch(f"{self.flarum_session.api_urls['discussions']}/{self.id}", json=patch_data).json()

        if 'errors' in response:
            return handle_errors(response['errors'])

        else:
            return Discussion(session=self.flarum_session, fetched_data=response)


    def hide(self, force: bool=False):
        """
            Hides the discussion. Raises `FlarumError` or returns `False` if it failed, otherwise the `Discussion` is returned.
        """

        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        """
            Restores the discussion (unhides). Raises `FlarumError` or returns `False` if it failed, otherwise the `Discussion` is returned.
        """

        return self.__restore_or_hide(hide=False, force=force)


    @property
    def data(self) -> Optional[dict]:
        return self.get("data", None)


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
    def isHidden(self) -> bool:
        return self.attributes.get("isHidden", False)
