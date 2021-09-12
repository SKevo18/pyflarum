from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser


user = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'])


if __name__ == "__main__":
    forum = user.get_forum_data()
    print(f"""
        Title: {forum.title}

        Welcome title: {forum.welcomeTitle}
        Welcome message: {forum.welcomeMessage}
    """)

    print("Groups:")
    for group in user.get_groups():
        print(f" • {group.nameSingular}")
