from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum.client import FlarumUser
from pyflarum.client.extensions import admin


USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[admin.AdminExtension]) # type: admin.AdminFlarumUserMixin


if __name__ == "__main__":
    # Get random birb image:
    birb_link = requests.get("https://some-random-api.ml/img/birb").json()['link']
    birb_image = requests.get(birb_link, stream=True).content

    # Upload it as avatar:
    updated_user = USER.upload_user_avatar(birb_image)
    print(updated_user.data.avatarUrl)

    # ...or for someone else:
    _user = USER.get_user_by_id(3)
    USER.upload_user_avatar(birb_image, user=_user)
    print(USER.data.id)

    # Also, why not upload it as logo?
    USER.upload_logo(birb_image)

    # Remove uploaded favicon:
    USER.remove_favicon()
    print("OK")
