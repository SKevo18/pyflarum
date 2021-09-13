from dotenv import load_dotenv
load_dotenv()

import os
import time

from pyflarum.client import FlarumUser

from pyflarum.client.extensions import absolutely_all
from pyflarum.client.extensions.flarum import Flarum_Approval


EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension,
    Flarum_Approval.ApprovalExtension
]


USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


if __name__ == "__main__":
    for discussions in USER.absolutely_all_discussions():
        for discussion in discussions:
            full_discussion = discussion.get_full_data()

            for post in full_discussion.get_posts():
                post: Flarum_Approval.ApprovalPostFromNotificationMixin

                if not post.isApproved:
                    post.approve()
                    print(f"Approved {post.url}")
                    time.sleep(3) # prevent 429

                else:
                    print(f"{post.url} is already approved.")
