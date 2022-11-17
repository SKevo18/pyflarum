from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser
from pyflarum.client.flarum.core.discussions import PreparedDiscussion
from pyflarum.client.extensions.flarum.Flarum_Tags import TagsExtension, TagsPreparedDiscussionMixin, TagsFlarumUserMixin



def test_post():
    USER: TagsFlarumUserMixin = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[TagsExtension])


    to_post: TagsPreparedDiscussionMixin = PreparedDiscussion(user=USER, title='Test', content='This was created programatically. It means that tag assignment works.')
    to_post.append_tag(1)
    print(to_post.as_json)
    posted = to_post.post()

    print(posted.url)



if __name__ == "__main__":
    test_post()
