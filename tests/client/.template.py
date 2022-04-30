from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser


def test_something():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])


if __name__ == "__main__":
    test_something()
