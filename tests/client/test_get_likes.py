from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser
from pyflarum.client.extensions.flarum import Flarum_Likes
from pyflarum.client.flarum.core.discussions import Discussion



def test_get_likes():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[Flarum_Likes.LikesExtension])

    discussion = USER.get_discussions()[0].get_full_data() # type: Discussion

    for post in discussion.get_posts():
        post: 'Flarum_Likes.LikesPostFromBulkMixin'
        liked_by = post.get_liked_by()

        if len(liked_by) > 0:
            print(f"Post {post.id} ({post.url}) was liked by:")
            for user in post.get_liked_by():
                print(user.username)



if __name__ == "__main__":
    test_get_likes()
