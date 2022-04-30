from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser


def test_first_post():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])

    discussion = USER.get_discussions()[0] # discussion on top of the front page with default filters
    print(discussion.title)

    notifications = USER.get_notifications()
    notifications.mark_all_as_read()



if __name__ == "__main__":
    test_first_post()
