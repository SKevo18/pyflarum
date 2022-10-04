from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum.client import FlarumUser



def test_forum_data():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])

    forum = USER.get_forum_data()
    print(f"""
        Title: {forum.title}

        Welcome title: {forum.welcomeTitle}
        Welcome message: {forum.welcomeMessage}
    """)


    print("Groups:")
    for group in USER.get_groups():
        print(f"• {group.nameSingular}")


if __name__ == "__main__":
    test_forum_data()
