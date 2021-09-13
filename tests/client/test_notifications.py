from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser

from pyflarum.client.flarum.core.posts import PostFromNotification

from pyflarum.client.extensions import absolutely_all


EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension
]

USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


def all_notifications():
    for notifications in USER.absolutely_all_notifications():
        for notification in notifications:
            print(notification.id)

            if not notification.isRead:
                subject = notification.get_subject()

                if isinstance(subject, PostFromNotification):
                    print(subject.content)



if __name__ == "__main__":
    print(f"{USER.username}'s notification IDs:")
    all_notifications()
