import logging
from typing import Union

import requests
from requests_cache.core import install_cache

logger = logging.getLogger(__name__)


class FlarumSession:
    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, cache: bool=True, cache_expire_after: int=300, proxies: dict=None):
        if cache:
            install_cache('./pyflarum_cache', backend='sqlite', expire_after=cache_expire_after)

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
