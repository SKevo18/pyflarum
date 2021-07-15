from typing import List, Optional, TYPE_CHECKING

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ...error_handler import parse_request
from ...datetime_conversions import flarum_to_datetime


class Users(dict):
    """
        A data of multiple users fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    def __iter__(self):
        return iter(self.get_users())


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


    def get_users(self):
        """
            All users from the `Users` object.
        """

        all_users = [] # type: List[UserFromBulk]

        for raw_user in self.data:
            if raw_user.get("type", None) == 'users':
                user = UserFromBulk(user=self.user, _fetched_data=dict(data=raw_user, _parent_included=self.included))
                all_users.append(user)

        return all_users


class UserFromNotification(dict):
    """
        An user from `BaseNotification`
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
        return self.data.get("id", None)


    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


    @property
    def username(self) -> Optional[str]:
        return self.attributes.get("username", None)


    @property
    def email(self) -> Optional[str]:
        return self.attributes.get("email", None)


    @property
    def isEmailConfirmed(self) -> bool:
        return self.attributes.get("isEmailConfirmed", False)


    @property
    def displayName(self) -> Optional[str]:
        return self.attributes.get("displayName", None)


    @property
    def avatarUrl(self) -> Optional[str]:
        return self.attributes.get("avatarUrl", None)


    @property
    def slug(self) -> Optional[str]:
        return self.attributes.get("slug", None)


class UserFromBulk(UserFromNotification):
    """
        An user from `Users`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def joinTime(self) -> Optional[datetime]:
        raw = self.attributes.get("joinTime", None)

        return flarum_to_datetime(raw)


    @property
    def discussionCount(self) -> Optional[int]:
        return self.attributes.get("discussionCount", None)


    @property
    def commentCount(self) -> Optional[int]:
        return self.attributes.get("commentCount", None)


    @property
    def canEdit(self) -> bool:
        return self.attributes.get("canEdit", False)


    @property
    def canEditCredentials(self) -> bool:
        return self.attributes.get("canEditCredentials", False)


    @property
    def canEditGroups(self) -> bool:
        return self.attributes.get("canEditGroups", False)


    @property
    def canDelete(self) -> bool:
        return self.attributes.get("canDelete", False)


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})



class User(UserFromBulk):
    """
        An user that was fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user
        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def foo(self):
        return 'bar'



class MyUser(User):
    """
        Your user, contains full user data.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)
