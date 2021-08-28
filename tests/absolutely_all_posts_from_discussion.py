from dotenv import load_dotenv
load_dotenv()

#import time

from pyflarum import FlarumUser
from pyflarum.extensions.flarum import Flarum_Likes
from pyflarum.extensions import absolutely_all


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
