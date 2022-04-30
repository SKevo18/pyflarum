from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser
from pyflarum.client.extensions import advanced_search


def test_advanced_search():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[advanced_search.AdvancedSearchExtension]) # type: advanced_search.AdvancedSearchFlarumUserMixin
    user = USER.get_user_by_username('test')

    if user:
        print(user.username)
    else:
        print("This user wasn't found.")



if __name__ == "__main__":
    test_advanced_search()
