from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser


user = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])


if __name__ == "__main__":
    pass # Test stuff
