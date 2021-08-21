from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser

from pyflarum.extensions import absolutely_all
from pyflarum.extensions.flarum import Flarum_Lock


EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension,
    Flarum_Lock.LockExtension
]


USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


if __name__ == "__main__":
    for discussions in USER.absolutely_all_discussions():
        for discussion in discussions:
            discussion: Flarum_Lock.LockDiscussionFromBulkMixin

            if not discussion.isLocked:
                locked = discussion.lock()
                print(f"Locked {locked.url}")

            else:
                print(f"{discussion.url} is already locked.")
