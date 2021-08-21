from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.extensions.flarum import Flarum_Likes
from pyflarum.flarum.core.posts import PostFromBulk
from pyflarum.flarum.core.discussions import Discussion


USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[Flarum_Likes.LikesExtension])


if __name__ == "__main__":
    discussion = USER.get_discussions()[0].get_full_data() # type: Discussion

    for post in discussion.get_posts():
        post: 'Flarum_Likes.LikesPostFromBulkMixin'
        liked_by = post.get_liked_by()

        if len(liked_by) > 0:
            print(f"Post {post.id} ({post.url}) was liked by:")
            for user in post.get_liked_by():
                print(user.username)
