#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""The main module for all Flarum user related actions of pyFlarum Python package.
"""

from typing import Generator, Iterable, Iterator, Union
import time

import requests
from requests_cache.core import install_cache

from pyflarum.user.models.flarum.Discussions import FlarumDiscussion, FlarumDiscussions


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
            print(f"[pyFlarum] Failed to authenticate: {e}")


        if self.isAuthenticated:
            print("[pyFlarum] Successfuly authenticated.")

        else:
            print(f"[pyFlarum] Not logged in.")


class FlarumMyUser(FlarumSession):
    """
        ### Description:
        The main class for performing all Flarum user related actions by using the Flarum API.

        ### Parameters:
        - `forum_url` - The forum URL to fetch data from (required). The URL must have a Flarum `/api` as it's API endpoint - alternatively,
        see `api_endpoint` parameter.
        - `username` - Optional. The username to login as. Logging in is required for performing restricted actions (such as posting a discussion or post).
        - `password` - Optional, required when username is set. A raw-text password to use for logging in. In case logging in fails,
        a "guest" mode is used as a fallback instead.
        - `use_cache` - Whether or not to cache requests to `pyflarum_cache.sql` file (from `requests_cache`). Can boost fetch speed, but
        I don't recommend to use it when you are making a bot that checks forum for updates in short periods of time.
        - `cache_expire_after` - For how many seconds is the cache valid for? Default is 300, or 5 minutes.
        - `proxies` - A dictionary of proxies for `requests`.
        See [Python requests proxies documentation page](https://docs.python-requests.org/en/master/user/advanced/#proxies).
        - `delay_between_requests` - Some servers have a rate limit for requests. In order to not be rate-limited, you can specify a delay between all
        API requests. Default is no delay. This number is a `float`, just like in `time.sleep()` (since that function is used for delaying).
        - `api_endpoint` - The path to the forum's API URI, without trailing slash.
        Default is "/api" (for most forums, unless defined otherwise in config.php)
    """

    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, use_cache: bool=True, cache_expire_after: int=300, proxies: dict=None, delay_between_requests: float=0, api_endpoint="/api"):
        """
            The main class for performing all Flarum user related actions by using the Flarum API.
        """

        FlarumSession.__init__(self, forum_url=forum_url, username=username, password=password, use_cache=use_cache, cache_expire_after=cache_expire_after, proxies=proxies)

        # API URLs:
        self.API_ENDPOINTS = {
            "api_discussions_url": f"{self.forum_url}{api_endpoint}/discussions",
            "api_posts_url": f"{self.forum_url}{api_endpoint}/posts",
            "api_users_url": f"{self.forum_url}{api_endpoint}/users"
        }

        self.delay = delay_between_requests


    def __fetch(self, raise_on_error: bool=False, *args, **kwargs) -> dict:
        if self.delay:
            time.sleep(self.delay)

        raw = self.session.get(*args, **kwargs).json() # type: dict

        if "errors" in raw:
            if raise_on_error:
                raise Exception(raw.get("errors", '"errors" were detected in the raw API response, but now they cannot be obtained?'))
            return dict()

        return raw


    def get_discussions(self, ids: Union[Iterable, Iterator]=None, parameters: dict={}, raise_on_api_error: bool=False) -> Union[Generator[FlarumDiscussion, None, None], FlarumDiscussions]:
        """
            ### Descriptions:
            Fetches discussions from Flarum API, skipping non existing ones by default.

            ### Parameters:
            - `ids` - A `list` or `tuple` of discussion IDs to fetch (from `/api/discussions/<id>`).
                
                If no IDs are specified, then "all" discussions are fetched (from `/api/discussions`, although this result is paginated by Flarum
                (so not all forums discussions are included here, as a preventive measure for Flarum database - would be a problem with mass amount
                of discussions, and would stress database), so if you want to fetch more discussions, you have to specify the limit in
                `parameters` - see below).
            
                Also keep in mind that results fetched from `/api/discussions` (e. g.: if you don't specify `ids`) do not include full discussion
                data (not one that you'd find when accessing the discussion directly by its ID - again, for database performance reasons). By default,
                20 discussions are fetched, with 50 being the maximum amount of discussions fetched at once (see `parameters` below).

                When `ids` isn't specified, then this function returns a `generator` - fetches discussion one by one and yields it as `FlarumDiscussion`.
                If `ids` isn't specified, then `FlarumDiscussions` is returned instead (reason why there are 2 different objects for this is explained above,
                TL;DR fetching discussions without `ids`/from `/api/discussions` does not contain full discussion data).

            - `parameters` - A dictionary of search parameters, when fetching all discussions (e. g.: omitting `ids`). This is used in Flarum search, for example.
                
                Template for commonly used ones:
                
            ```
            {
                "filter[q]": <search term - can include gambits>,
                "page[limit]": <limit of results>,
                "page[offset]": <offset by x results>
            }
            ```
    
                Maximum number of discussions fetched at once is 50 (Flarum limitation, to not stress database):
                `{"page[limit]": 50}` - default is 20
            
            - `raise_on_api_error` - Raise a `FlarumError`, if result contains `errors` (e. g.: discussion wasn't found), otherwise errors are skipped.
        
            ### Example usage:
            
            #### Fetch 1000 discussions:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            for discussion in user.get_discussions(ids=(id for id in range(1000))) # nice one-liner - fetches 1000 discussions
                print(discussion)
            ```

            #### Fetch 50 discussions made by luceos on second page at once, by specifying parameters:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            param = {
                "filter[q]": "author:luceos",
                "sort": "createdAt",
                "page[limit]": 50
                "page[offset]": 100
            }

            for discussion in user.get_discussions(parameters=parameters):
                print(discussion)
            ```

        """

        if ids is None:
            raw = self.__fetch(raise_on_error=raise_on_api_error, url=f"{self.API_ENDPOINTS['api_discussions_url']}", params=parameters)
            discussions = FlarumDiscussions(raw.get("data", {}))

            return discussions

        else:
            def __discussion_generator() -> Generator[Union[FlarumDiscussion, None], None, None]:
                for id in ids:
                    raw = self.__fetch(raise_on_error=raise_on_api_error, url=f"{self.API_ENDPOINTS['api_discussions_url']}/{id}", params=parameters)
                    discussion = FlarumDiscussion(raw.get("data", {}))

                    yield discussion

            return __discussion_generator()


    def get_all_discussions(self, parameters: dict={}, raise_on_api_error: bool=False) -> Generator[FlarumDiscussions, None, None]:
        """
            ### Description:
            Generates/fetches all discussions, until there are none left.

            ### Parameters:
            - `parameters` - A dictionary of search parameters. Same as for `get_discussions()`.
            `page[offset]` and `page[limit]` get overwritten - mandatory in order for this function to work properly - so
            you do not have to specify them.

            - `raise_on_api_error` - Raise a `FlarumError`, if result contains `errors` (e. g.: discussion wasn't found), otherwise errors are skipped.

            ### Example usage:
            
            #### Fetch all discussions on Discuss, ordered from newest to oldest:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            for discussion in user.get_all_discussions(parameters={"sort": "-createdAt"}):
                print(discussion)
            ```
        """
        parameters["page[offset]"] = 0
        parameters["page[limit]"] = 50
        offset = 0

        while True:
            raw = self.__fetch(raise_on_error=raise_on_api_error, url=f"{self.API_ENDPOINTS['api_discussions_url']}", params=parameters)
            discussions = FlarumDiscussions(raw)

            offset += 1
            parameters["page[offset]"] = offset * parameters["page[limit]"]

            yield discussions

            if not discussions.next_link:
                break
