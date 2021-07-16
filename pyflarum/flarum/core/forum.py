from pyflarum.flarum.core.groups import Group
from typing import TYPE_CHECKING, Optional, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...error_handler import FlarumError, parse_request
from ...datetime_conversions import flarum_to_datetime


class Forum(dict):
    """
        Forum JSON data
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
    def title(self) -> Optional[str]:
        return self.attributes.get("title", None)


    @property
    def description(self) -> Optional[str]:
        return self.attributes.get("description", None)


    @property
    def showLanguageSelector(self) -> bool:
        return self.attributes.get("showLanguageSelector", False)


    @property
    def baseUrl(self) -> Optional[str]:
        return self.attributes.get("baseUrl", None)


    @property
    def basePath(self) -> Optional[str]:
        return self.attributes.get("basePath", None)


    @property
    def debug(self) -> bool:
        return self.attributes.get("debug", False)


    @property
    def apiUrl(self) -> Optional[str]:
        return self.attributes.get("apiUrl", None)


    @property
    def welcomeTitle(self) -> Optional[str]:
        return self.attributes.get("welcomeTitle", None)


    @property
    def welcomeMessage(self) -> Optional[str]:
        return self.attributes.get("welcomeMessage", None)


    @property
    def themePrimaryColor(self) -> Optional[str]:
        return self.attributes.get("themePrimaryColor", None)


    @property
    def themeSecondaryColor(self) -> Optional[str]:
        return self.attributes.get("themeSecondaryColor", None)


    @property
    def logoUrl(self) -> Optional[str]:
        return self.attributes.get("logoUrl", None)


    @property
    def faviconUrl(self) -> Optional[str]:
        return self.attributes.get("faviconUrl", None)


    @property
    def headerHtml(self) -> Optional[str]:
        return self.attributes.get("headerHtml", None)


    @property
    def footerHtml(self) -> Optional[str]:
        return self.attributes.get("footerHtml", None)


    @property
    def allowSignUp(self) -> bool:
        return self.attributes.get("allowSignUp", False)


    @property
    def defaultRoute(self) -> Optional[str]:
        return self.attributes.get("defaultRoute", None)


    @property
    def canViewForum(self) -> bool:
        return self.attributes.get("canViewForum", False)


    @property
    def canStartDiscussion(self) -> bool:
        return self.attributes.get("canStartDiscussion", False)


    @property
    def canSearchUsers(self) -> bool:
        return self.attributes.get("canSearchUsers", False)


    @property
    def adminUrl(self) -> Optional[str]:
        return self.attributes.get("adminUrl", None)


    @property
    def version(self) -> Optional[str]:
        return self.attributes.get("version", None)


    @property
    def allowUsernameMentionFormat(self) -> bool:
        return self.attributes.get("allowUsernameMentionFormat", False)


    @property
    def relationships(self) -> dict:
        return self.get("relationships", {})


    def get_groups(self):
        all_groups = list() # type: List[Group]

        for raw_group in self.relationships.get("groups", {}).get("data", [{}]):
            if raw_group.get("type", None) == 'groups':
                group = Group(user=self.user, _fetched_data=dict(data=raw_group))

                all_groups.append(group)

        return all_groups


    @property
    def included(self) -> List[dict]:
        return self.get("included", [{}])
