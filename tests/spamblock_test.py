from datetime import timedelta
from typing import Union

from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.extensions.admin import AdminExtension
from pyflarum.extensions.flarum.FoF_Spamblock import SpamblockExtension, SpamblockUserMixin
from pyflarum.extensions.flarum.Flarum_Suspend import SuspendExtension, SuspendUserMixin


EXTENSIONS = [
    AdminExtension,
    SpamblockExtension,
    SuspendExtension
]


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: Union[AdminExtension, SpamblockExtension, SuspendExtension]


if __name__ == "__main__":
    id_to_block = 3

    to_block = user.get_user_by_id(id_to_block) # type: Union[SpamblockUserMixin, SuspendUserMixin]
    blocked = to_block.spamblock()
    print(f"Success: {blocked}")

    to_block.suspend(suspended_for=timedelta(minutes=15))
    print("Suspended for 15 minutes instead.")
