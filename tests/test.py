from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from datetime import datetime

from pyflarum import FlarumUser
from pyflarum.flarum.core.filters import Filter
from pyflarum.extensions.absolutely_all_discussions import AbsolutelyAllExtension


EXTENSIONS = [
    AbsolutelyAllExtension
]

user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: AbsolutelyAllExtension


def all_discussions():
    for discussions in user.absolutely_all_discussions(Filter(order_by='createdAt')):
        for discussion in discussions:
                print(discussion)


def all_notifications():
    all_notifications = user.get_notifications()

    for notification in all_notifications:
        print(notification.isRead)



if __name__ == "__main__":
    all_notifications()
