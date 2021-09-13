from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser

from pyflarum.client.flarum.core.filters import Filter

from pyflarum.client.extensions import absolutely_all
from pyflarum.client.extensions.flarum import Flarum_Subscriptions


EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension,
    Flarum_Subscriptions.SubscriptionsExtension
]

USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


def follow_all():
    for discussions in USER.absolutely_all_discussions(Filter(query='is:ignored')):
        for discussion in discussions:
            discussion: Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin
            discussion = discussion.follow()
            print(f"Now following ignored discussion {discussion.id} ({discussion.url})")


if __name__ == "__main__":
    follow_all()
