from typing import Union


from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.flarum.core.notifications import Notification

from pyflarum.extensions.watch import WatchNotificationsExtension


EXTENSIONS = [
    WatchNotificationsExtension
]


def on_notification(notification: Notification):
    print(notification.id)


user = FlarumUser(forum_url=os.environ['forum_url'], username="test", password=os.environ['account_password'], extensions=EXTENSIONS) # type: WatchNotificationsExtension
user.watch_notifications(on_notification)
