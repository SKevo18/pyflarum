from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum import FlarumUser
from pyflarum.extensions import admin


user = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[admin.AdminExtension]) # type: admin.AdminFlarumUserMixin


if __name__ == "__main__":
    # Get random birb image:
    birb_link = requests.get("https://some-random-api.ml/img/birb").json()['link']
    birb_image = requests.get(birb_link, stream=True).content

    # Upload it as avatar:
    updated_user = user.upload_user_avatar(birb_image)
    print(updated_user.data.avatarUrl)

    # ...or for someone else:
    _user = user.get_user_by_id(3)
    user.upload_user_avatar(birb_image, user=_user)
    print(user.data.id)

    # Also, why not upload it as logo?
    user.upload_logo(birb_image)

    # Remove uploaded favicon:
    user.remove_favicon()
    print("OK")
