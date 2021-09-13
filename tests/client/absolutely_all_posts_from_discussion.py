from dotenv import load_dotenv
load_dotenv()

#import time

from pyflarum.client import FlarumUser
from pyflarum.client.extensions.flarum import Flarum_Likes
from pyflarum.client.extensions import absolutely_all


USER = FlarumUser(
    forum_url="https://discuss.flarum.org",
    extensions=[Flarum_Likes.LikesExtension, absolutely_all.AbsolutelyAllExtension]
) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


if __name__ == "__main__":
    discussion = USER.get_discussion_by_id(7585)

    for posts in USER.get_all_posts_from_discussion(discussion):
        for post in posts:
            print(post.url)
        print('-' * 20)
