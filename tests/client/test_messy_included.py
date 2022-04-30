from dotenv import load_dotenv
load_dotenv()

from pyflarum.client import FlarumUser



def test_messy_included():
    USER = FlarumUser(forum_url="https://discuss.flarum.org")

    discussion = USER.get_discussion_by_id(28221)
    author = discussion.get_author()

    print(author.username, '=>', discussion.url)



if __name__ == "__main__":
    test_messy_included()
