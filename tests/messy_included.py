from dotenv import load_dotenv
load_dotenv()

from pyflarum import FlarumUser


USER = FlarumUser(forum_url="https://discuss.flarum.org")


if __name__ == "__main__":
    discussion = USER.get_discussion_by_id(28221)
    a = discussion.get_author(mode='first_user')
    print(a.username)
