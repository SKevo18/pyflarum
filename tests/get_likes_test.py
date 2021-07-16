from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser
from pyflarum.extensions.flarum import Flarum_Likes


USER = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=[Flarum_Likes.LikesExtension])


if __name__ == "__main__":
    discussion = USER.get_discussion_by_id(16)
    for post in discussion.get_posts():
        post: Flarum_Likes.LikesPostFromBulkMixin

        liked_by = post.get_liked_by()

        if len(liked_by) > 0:
            print(f"Post {post.url} was liked by:")
            for user in post.get_liked_by():
                print(user.username)
