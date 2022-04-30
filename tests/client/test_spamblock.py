from datetime import timedelta

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser

from pyflarum.error_handler import FlarumError
from pyflarum.client.extensions import admin
from pyflarum.client.extensions.flarum import FoF_Spamblock
from pyflarum.client.extensions.flarum import Flarum_Suspend



def test_spamblock():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[admin.AdminExtension, FoF_Spamblock.SpamblockExtension, Flarum_Suspend.SuspendExtension])
    ID_TO_BLOCK = 3

    to_block = USER.get_user_by_id(ID_TO_BLOCK) # type: FoF_Spamblock.SpamblockUserMixin | Flarum_Suspend.SuspendUserMixin
    blocked = to_block.spamblock()
    print(f"Success: {blocked}")

    try:
        to_block.suspend(suspended_for=timedelta(minutes=15))
        print("Suspended for 15 minutes instead.")

    except FlarumError as error:
        print(f"Error: {error}")



if __name__ == "__main__":
    test_spamblock()
