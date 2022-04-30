from dotenv import load_dotenv
load_dotenv()

import os
# import time

from pyflarum.client import FlarumUser
from pyflarum.client.extensions.flarum import Flarum_Likes
from pyflarum.client.extensions import absolutely_all
from pyflarum.client.flarum.core.posts import Post
from pyflarum.error_handler import FlarumError



def like_all():
    USER = FlarumUser(
        forum_url=os.environ['forum_url'],
        username_or_email='test',
        password=os.environ['account_password'],
        extensions=[Flarum_Likes.LikesExtension, absolutely_all.AbsolutelyAllExtension]
    ) # type: absolutely_all.AbsolutelyAllFlarumUserMixin

    for posts in USER.absolutely_all_posts():
        for post in posts:
            post: 'Flarum_Likes.LikesPostFromBulkMixin | Flarum_Likes.LikesPostFromDiscussionMixin'

            if not post.is_comment():
                print(f"Post {post.id} is not a comment. Skipping.")
                continue

            try:
                liked = post.like() # type: Post
                print(f"Liked post {liked.id} ({liked.url})")

            except FlarumError:
                pass

            # time.sleep(1)
            continue



if __name__ == "__main__":
    like_all()