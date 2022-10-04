from dotenv import load_dotenv
load_dotenv()

from pyflarum.client import FlarumUser
from pyflarum.client.extensions.flarum import Flarum_Likes
from pyflarum.client.extensions import absolutely_all



def test_absolutely_all_posts():
    USER = FlarumUser(
        forum_url="https://discuss.flarum.org",
        extensions=[Flarum_Likes.LikesExtension, absolutely_all.AbsolutelyAllExtension]
    ) # type: absolutely_all.AbsolutelyAllFlarumUserMixin

    discussion = USER.get_discussion_by_id(7585)

    for number, posts in enumerate(USER.get_all_posts_from_discussion(discussion)):
        if number > 3: # only first 3 batches of posts
            break

        for post in posts:
            print(post.url)
        print('-' * 20)



if __name__ == "__main__":
    test_absolutely_all_posts()
