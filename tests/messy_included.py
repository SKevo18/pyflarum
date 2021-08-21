from dotenv import load_dotenv
load_dotenv()

from pyflarum import FlarumUser


USER = FlarumUser(forum_url="https://discuss.flarum.org")


if __name__ == "__main__":
    discussion = USER.get_discussion_by_id(28221)
    author = discussion.get_author()
    print(author.username, '=>', discussion.url)
