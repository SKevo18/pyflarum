from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum import FlarumUser


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'])


if __name__ == "__main__":
    # Get random birb image:
    birb_link = requests.get("https://some-random-api.ml/img/birb").json()['link']
    birb_image = requests.get(birb_link, stream=True).content

    # Upload it as avatar
    my_user = user.upload_avatar(birb_image, file_type="image/jpeg")
    print(my_user.avatarUrl)
