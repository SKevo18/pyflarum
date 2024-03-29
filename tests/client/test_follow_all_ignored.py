from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser

from pyflarum.client.flarum.core.filters import Filter

from pyflarum.client.extensions import absolutely_all
from pyflarum.client.extensions.flarum import Flarum_Subscriptions



def test_follow_all_ignored():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[absolutely_all.AbsolutelyAllExtension, Flarum_Subscriptions.SubscriptionsExtension]) # type: absolutely_all.AbsolutelyAllFlarumUserMixin

    for discussions in USER.absolutely_all_discussions(Filter(query='is:ignored')):
        for discussion in discussions:
            discussion: Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin
            discussion = discussion.follow()
            print(f"Now following ignored discussion {discussion.id} ({discussion.url})")



if __name__ == "__main__":
    test_follow_all_ignored()
