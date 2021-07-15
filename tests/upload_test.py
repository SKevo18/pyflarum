from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum import FlarumUser
from pyflarum.extensions.admin import AdminFlarumUserMixin, AdminExtension


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'], extensions=[AdminExtension]) # type: AdminFlarumUserMixin


if __name__ == "__main__":
    # Get random birb image:
    birb_link = requests.get("https://some-random-api.ml/img/birb").json()['link']
    birb_image = requests.get(birb_link, stream=True).content

    # Upload it as avatar:
    updated_user = user.upload_user_avatar(birb_image)
    print(updated_user.user.avatarUrl)

    # ...or for someone else:
    user = user.get_user_by_id()

    # Also, why not upload it as logo?
    user.upload_logo(birb_image)

    # Remove uploaded favicon:
    user.remove_favicon()
    print("OK")
