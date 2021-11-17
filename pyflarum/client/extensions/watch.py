import typing as t

import time

from ...extensions import ExtensionMixin
from ..session import FlarumUser
from ..flarum.core.notifications import Notification



class WatchFlarumUserMixin(FlarumUser):
    def watch_notifications(self, on_notification: t.Callable[[Notification], t.Any], interval: t.Optional[float]=10, auto_mark_as_read: bool=True, **kwargs) -> t.NoReturn:
        while True:
            all_notifications = self.get_notifications(**kwargs)

            for notification in all_notifications:
                if not notification.isRead:
                    on_notification(notification)

                    if auto_mark_as_read:
                        notification.mark_as_read()

            if interval:
                time.sleep(interval)



class WatchExtension(ExtensionMixin, WatchFlarumUserMixin):
    AUTHOR = 'skevo'
    NAME = 'watch'


    @classmethod
    def mixin(cls):
        super().mixin(FlarumUser, WatchFlarumUserMixin)
