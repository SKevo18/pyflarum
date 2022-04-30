from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum.client import FlarumUser
from pyflarum.client.extensions.flarum import FoF_UserBio



def test_bio():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[FoF_UserBio.UserBioExtension]) # type: FoF_UserBio.UserBioFlarumUserMixin

    # Get random quote:
    quote = requests.get("http://api.quotable.io/random").json() # type: dict

    # Set it as your bio:
    updated = USER.update_user_bio(f"{quote['content']}\n\n- {quote.get('author', 'Unknown')}") # type: FlarumUser
    print(updated.data.bio) # type: ignore # can't type hint updated.data


if __name__ == "__main__":
    test_bio()
