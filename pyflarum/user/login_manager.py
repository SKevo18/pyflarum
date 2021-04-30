from typing import Generator, Union
import json
import logging

import requests
from requests_cache.core import install_cache

logger = logging.getLogger(__name__)


class FlarumSession:
    """
        The session for `FlarumMyUser`
    """

    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, use_cache: bool=True, cache_expire_after: int=300, proxies: dict=None):
        if use_cache:
            install_cache('pyflarum_cache', backend='sqlite', expire_after=cache_expire_after)

        # Main:
        self.session = requests.Session()
        self.forum_url = forum_url

        # Proxies:
        if type(proxies) == dict:
            self.session.proxies.update(proxies)

        # Authentication:
        self.username = username
        self.password = password

        try:
            # Authenticating with auth data:
            self.identification_data = {"identification": self.username, "password": self.password}
            self.token_data = self.session.post(url=f'{self.forum_url}/api/token', json=self.identification_data).json() # type: dict
            
            if 'token' in self.token_data:
                self.session.headers.update(
                    {
                        "Authorization": f'Token {self.token_data["token"]}; userId={str(self.token_data["userId"])}',
                        "User-Agent": "pyflarum-bot-authenticated"
                    }
                )

                self.isAuthenticated = True

            else:
                self.isAuthenticated = False

        except Exception as e:
            # Authentication failed, fallback to "read-only" mode:
            self.identification_data = None
            self.token_data = None
            self.session.headers.update(
                {
                    "User-Agent": "pyflarum-bot-unauthenticated"
                }
            )

            self.isAuthenticated = False
            logger.error(e)


        if self.isAuthenticated:
            logger.info("[pyFlarum] Successfuly authenticated.")

        else:
            logger.info(f"[pyFlarum] Couldn't authenticate '{self.username}' for '{self.forum_url} - not logged in.")


class FlarumMyUser(FlarumSession):
    """
        The main class for performing all Flarum user related actions by using the Flarum API.
    """

    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, use_cache: bool=True, cache_expire_after: int=300, proxies: dict=None):
        """
            The main class for performing all Flarum user related actions by using the Flarum API.
        """

        FlarumSession.__init__(self, forum_url=forum_url, username=username, password=password, use_cache=use_cache, cache_expire_after=cache_expire_after, proxies=proxies)

        # API URLs:
        self.API_ENDPOINTS = {
            "api_discussions_url": f"{self.forum_url}/api/discussions",
            "api_posts_url": f"{self.forum_url}/api/posts",
            "api_users_url": f"{self.forum_url}/api/users"
        }


    def get_discussions_by_ids(self, ids: list) -> Generator[dict, None, None]:
        for id in ids:
            raw_discussion = self.session.get(url=f"{self.API_ENDPOINTS['api_discussions_url']}/{id}").json()

            yield raw_discussion


if __name__ == "__main__":
    user = FlarumMyUser("https://discuss.flarum.org", use_cache=False)

    file = open("scrap.json", "a")

    file.write("[")

    for discussion in user.get_discussions_by_ids((x for x in range(10))):
        file.write(json.dumps(discussion) + ",\n")

    file.write("]")

    file.close()
