from typing import Optional

from . import ExtensionMixin
from ..session import FlarumUser

import time


class WatchFlarumUserMixin(FlarumUser):
    def watch_notifications(self, on_notification, interval: Optional[float]=10, auto_mark_as_read: bool=True, **kwargs):
        while True:
            all_notifications = self.get_notifications(**kwargs)

            for notification in all_notifications:
                if not notification.isRead:
                    on_notification(notification)

                    if auto_mark_as_read:
                        notification.mark_as_read()

            if interval:
                time.sleep(interval)


class WatchNotificationsExtension(ExtensionMixin, WatchFlarumUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, FlarumUser, WatchFlarumUserMixin)
