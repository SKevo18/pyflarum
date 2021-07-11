from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser

from pyflarum.flarum.core.posts import PostFromNotification

from pyflarum.extensions.absolutely_all import AbsolutelyAllExtension, AbsolutelyAllFlarumUserMixin


EXTENSIONS = [
    AbsolutelyAllExtension
]

user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: AbsolutelyAllFlarumUserMixin


def all_notifications():
    for notifications in user.absolutely_all_notifications():
        for notification in notifications:
            print(notification.id)

            if not notification.isRead:
                subject = notification.get_subject()

                if isinstance(subject, PostFromNotification):
                    print(subject.content)



if __name__ == "__main__":
    print(f"{user.username}'s notification IDs:")
    all_notifications()
