from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.extensions import advanced_search


USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[advanced_search.AdvancedSearchExtension]) # type: advanced_search.AdvancedSearchFlarumUserMixin


if __name__ == "__main__":
    user = USER.get_user_by_username('test')

    if user:
        print(user.username)

    else:
        print("This user wasn't found.")
