from typing import Any, Callable, Optional

import time

from . import ExtensionMixin
from ..session import FlarumUser
from ..flarum.core.notifications import Notification


AUTHOR = 'skevo'
NAME = 'watch'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class WatchFlarumUserMixin(FlarumUser):
    def watch_notifications(self, on_notification: Callable[[Notification], Any], interval: Optional[float]=10, auto_mark_as_read: bool=True, **kwargs):
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
    def __init__(self):
        self.name = NAME
        self.author = AUTHOR
        self.id = ID

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumUser, WatchFlarumUserMixin)
