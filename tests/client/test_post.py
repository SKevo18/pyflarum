from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser
from pyflarum.client.flarum.core.discussions import PreparedDiscussion



def test_post():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])

    to_post = PreparedDiscussion(user=USER, title='Test', content='testingy')
    posted = to_post.post()

    print(posted.url)



if __name__ == "__main__":
    test_post()
