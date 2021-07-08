from normalize_path import normalize_path
normalize_path()

import os
import time

from dotenv import load_dotenv
load_dotenv()

from pyflarum import FlarumUser, DiscussionFilter, FlarumError


user = FlarumUser(forum_url=os.environ['forum_url'], username="test", password=os.environ['account_password'])
discussions = user.all_discussions(DiscussionFilter())

while True:
    try:
        for discussion in discussions:
            if not discussion.isHidden:
                discussion.hide()
                print(f"Hid discussion {discussion.id}")

            else:
                discussion.unhide()
                print(f"Unhid discussion {discussion.id}")


    except FlarumError as e:
        if e.status == 429:
            print(e)

            print("Sleeping for 10 seconds.")
            time.sleep(10)

        else:
            print(e)