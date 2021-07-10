from typing import TYPE_CHECKING, Optional, Union, List

from datetime import datetime

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.users import UserFromNotification
from ...flarum.core.posts import PostFromNotification
from ...error_handler import handle_errors
from ...datetime_conversions import flarum_to_datetime


class Notifications(dict):
    """
        A data of multiple notifications fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    def __iter__(self):
        return iter(self.get_notifications())


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


    def get_notifications(self):
        """
            All notifications from the `Notifications` object.
        """

        all_notifications = list() # type: List[BaseNotification]

        for raw_notification in self.data:
            if raw_notification.get("type", None) == 'notifications':
                notification = BaseNotification(user=self.user, _fetched_data=dict(data=raw_notification, parent_included=self.included))
                all_notifications.append(notification)

        return all_notifications


    def mark_all_as_read(self) -> bool:
        raw = self.user.session.post(f"{self.user.api_urls['notifications']}/read")

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        return True



class BaseNotification(dict):
    """
        Notification, that always has properties defined.
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
    def contentType(self) -> Optional[str]:
        return self.attributes.get("contentType", None)


    @property
    def content(self) -> Optional[dict]:
        return self.attributes.get("content", None)


    @property
    def new_post_number(self) -> Optional[int]:
        if self.content and self.contentType == "newPost":
            post_number = self.content.get("postNumber", None)

            if post_number:
                return int(post_number)


    @property
    def reply_number(self) -> Optional[int]:
        if self.content and self.contentType == "postMentioned":
            reply_number = self.content.get("replyNumber", None)

            if reply_number:
                return int(reply_number)


    @property
    def createdAt(self) -> Optional[datetime]:
        raw = self.attributes.get("createdAt", None)

        return flarum_to_datetime(raw)


    @property
    def isRead(self) -> bool:
        return self.attributes.get("isRead", False)


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})


    @property
    def parent_included(self) -> List[dict]:
        return self.get("parent_included", [{}])


    def from_user(self) -> Optional[Union[dict, UserFromNotification]]:
        id = self.relationships.get("fromUser", {}).get("data", {}).get("id", None)
        
        for raw_user in self.parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))
                return user

        return None


    def subject(self) -> Optional[Union[dict, PostFromNotification]]:
        id = self.relationships.get("fromUser", {}).get("data", {}).get("id", None)
        
        for raw_user in self.parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))
                return user

        return None

