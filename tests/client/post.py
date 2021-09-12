from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.flarum.core.discussions import PreparedDiscussion


user = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])


if __name__ == "__main__":
    to_post = PreparedDiscussion(user=user, title='Test', content='testingy')
    posted = to_post.post()
    print(posted.url)
