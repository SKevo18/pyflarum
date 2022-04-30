from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser

from pyflarum.client.extensions import absolutely_all
from pyflarum.client.extensions.flarum import Flarum_Lock



def test_lockdown():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[absolutely_all.AbsolutelyAllExtension, Flarum_Lock.LockExtension]) # type: absolutely_all.AbsolutelyAllFlarumUserMixin

    for discussions in USER.absolutely_all_discussions():
        for discussion in discussions:
            discussion: Flarum_Lock.LockDiscussionFromBulkMixin

            if not discussion.isLocked:
                locked = discussion.lock()
                print(f"Locked {locked.url}")

            else:
                print(f"{discussion.url} is already locked.")



if __name__ == "__main__":
    test_lockdown()
