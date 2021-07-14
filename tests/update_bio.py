from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum import FlarumUser
from pyflarum.extensions.flarum.FoF_UserBio import UserBioFlarumUserMixin, UserBioExtension, UserBioUserFromBulkMixin


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=[UserBioExtension]) # type: UserBioFlarumUserMixin


if __name__ == "__main__":
    # Get random quote:
    quote = requests.get("http://api.quotable.io/random").json() # type: dict

    # Set it as your bio:
    my_user = user.update_bio(f"{quote['content']}\n\n- {quote.get('author', 'Unknown')}") # type: UserBioUserFromBulkMixin
    print(my_user.bio)
