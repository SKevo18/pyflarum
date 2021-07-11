from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'])


if __name__ == "__main__":
    pass # Test stuff
