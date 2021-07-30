from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import time

from pyflarum import FlarumUser
from pyflarum.extensions.flarum import Flarum_Likes
from pyflarum.extensions import absolutely_all


USER = FlarumUser(
    forum_url=os.environ['forum_url'],
    username_or_email='test',
    password=os.environ['account_password'],
    extensions=[Flarum_Likes.LikesExtension, absolutely_all.AbsolutelyAllExtension]
) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


if __name__ == "__main__":
    for posts in USER.absolutely_all_posts():
        for post in posts:
            post: Flarum_Likes.LikesPostFromBulkMixin

            for user in post.get_liked_by():
                if user.id == USER.data.id:
                    print(f"Post {post.id} ({post.url}) is already liked by me, skipping...")

                    break

                else:
                    liked = post.like()
                    print(f"Liked post {liked.id} ({liked.url})")
                    # time.sleep(1)

                    continue
