from typing import Union


from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser

from pyflarum.flarum.core.filters import Filter

from pyflarum.extensions.absolutely_all import AbsolutelyAllExtension, AbsolutelyAllFlarumUserMixin
from pyflarum.extensions.flarum.Flarum_Subscriptions import SubscriptionsDiscussionFromBulkMixin, SubscriptionsExtension


EXTENSIONS = [
    AbsolutelyAllExtension,
    SubscriptionsExtension
]

user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: AbsolutelyAllFlarumUserMixin


def follow_all():
    discussion: Union[SubscriptionsDiscussionFromBulkMixin]

    for discussions in user.absolutely_all_discussions(Filter(query='is:ignored')):
        for discussion in discussions:
            discussion = discussion.follow()
            print(f"Now following ignored discussion {discussion.id} ({discussion.url})")


if __name__ == "__main__":
    follow_all()
