from typing import Union

from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.flarum.core.admin import AdminExtension
from pyflarum.extensions.flarum.Malago_Achievements import AchievementsExtension


EXTENSIONS = [
    AdminExtension,
    AchievementsExtension
]


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=EXTENSIONS) # type: Union[AdminExtension, AchievementsExtension]


if __name__ == "__main__":
    user
