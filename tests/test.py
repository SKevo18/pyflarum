from normalize_path import normalize_path
normalize_path()

import os
from dotenv import load_dotenv
load_dotenv()

from pyflarum import FlarumUser


user = FlarumUser(forum_url=os.environ['forum_url'], username="test", password=os.environ['account_password'])
discussion = user.get_discussion(3)
x = discussion.restore()
print(x)
