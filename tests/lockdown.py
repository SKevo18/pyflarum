from typing import Type, Union, TYPE_CHECKING
if TYPE_CHECKING:
    from pyflarum.flarum.core.discussions import DiscussionFromBulk

from normalize_path import normalize_path
normalize_path()

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


USER = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


if __name__ == "__main__":
    for discussions in USER.absolutely_all_discussions():
        for discussion in discussions:
            discussion: Union[Flarum_Lock.LockDiscussionFromBulkMixin, Type['DiscussionFromBulk']]

            print(discussion.url)
            locked = discussion.lock()
            print(f"Locked {locked.url}")
