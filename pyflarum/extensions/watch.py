from . import ExtensionMixin
from ..session import FlarumUser

import time


class StopWatching(Exception):
    pass


class WatchUserMixin(FlarumUser):
    def watch_notifications(self, on_notification, interval: float=10, **kwargs):
        while True:
            all_notifications = self.get_notifications(**kwargs)

            for notification in all_notifications:
                if notification.isUnread:
                    on_notification(notification)

            time.sleep(interval)


class WatchNotificationsExtension(ExtensionMixin, WatchUserMixin):
    def mixin(self):
        super().mixin(self, FlarumUser, WatchUserMixin)
