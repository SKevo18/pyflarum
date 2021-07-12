from typing import Union

from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import time

from pyflarum import FlarumUser

from pyflarum.flarum.core.posts import Post
from pyflarum.flarum.core.discussions import Discussion

from pyflarum.extensions.absolutely_all import AbsolutelyAllExtension, AbsolutelyAllFlarumUserMixin
from pyflarum.extensions.flarum.Flarum_Approval import ApprovalDiscussionNotificationMixin, ApprovalExtension, ApprovalPostNotificationMixin


EXTENSIONS = [
    AbsolutelyAllExtension,
    ApprovalExtension
]


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: Union[AbsolutelyAllFlarumUserMixin]


if __name__ == "__main__":
    for discussions in user.absolutely_all_discussions():
        discussion: Union[ApprovalDiscussionNotificationMixin, Discussion]

        for discussion in discussions:
            time.sleep(5) # prevent 429
            full_discussion = discussion.get_full_data()

            for post in full_discussion.get_posts():
                post: Union[ApprovalPostNotificationMixin, Post]
                print(post.id)

                if not post.isApproved:
                    post.approve()
                    print(f"Approved {post.url}")
