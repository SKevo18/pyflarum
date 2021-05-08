# -*- coding: utf-8 -*-

"""The main module for all Flarum user related actions of pyFlarum Python package.
"""

from typing import Generator, Iterable, Iterator, Union
import time

import requests
from requests_cache.core import install_cache

from pyflarum.user.models.flarum.Discussions import FlarumDiscussion, FlarumDiscussions
from pyflarum.user.models.Users import FlarumUser


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

        - `raise_on_api_error` - Raise a `FlarumError`, if result contains `errors` (e. g.: no data was found),
        otherwise errors are ignored (and skipped).

        - `api_endpoint` - The path to the forum's API URI, without trailing slash.
        Default is "/api" (for most forums, unless defined otherwise in config.php)
    """

    def __init__(self, forum_url: str, username: Union[str, None]=None, password: Union[str, None]=None, use_cache: bool=True, cache_expire_after: int=300, proxies: dict=None, delay_between_requests: float=0, raise_on_api_error: bool=False, api_endpoint="/api"):
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
        self.raise_on_api_error = raise_on_api_error


    def __fetch(self, *args, **kwargs) -> dict:
        if self.delay:
            time.sleep(self.delay)

        raw = self.session.get(*args, **kwargs).json() # type: dict

        if "errors" in raw:
            if self.raise_on_api_error:
                raise Exception(raw.get("errors", '"errors" were detected in the raw API response, but now they cannot be obtained?'))
            return dict()

        return raw


    def get_discussion_by_id(self, id: int) -> FlarumDiscussion:
        """
            ### Description:
            Obtains discussion by its unique ID.

            ### Parameters:
            - `id` - The ID of the discussion. Can be an integer, although `str` is possible.

            - `raise_on_api_error` - Raise a `FlarumError`, if result contains `errors` (e. g.: discussion wasn't found), otherwise errors are ignored (and skipped).
        """

        raw = self.__fetch(url=f"{self.API_ENDPOINTS['api_discussions_url']}/{id}")
        discussion = FlarumDiscussion(raw=raw)

        if discussion.type == "discussions":
            return discussion


    def get_discussions_by_ids(self, ids: Union[Iterable, Iterator]=None) -> Generator[FlarumDiscussion, None, None]:
        """
            ### Descriptions:
            A generator that fetches full discussions from Flarum API by their IDs.

            ### Parameters:
            - `ids` - An iterable or iterator containing discussion IDs to fetch (from `/api/discussions/<id>`).

            ### Example usage:

            #### Fetch 1000 discussions:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            for discussion in user.get_discussions_by_ids(ids=(id for id in range(1000))) # nice one-liner - fetches 1000 discussions
                print(discussion)
            ```
        """

        for id in ids:
            discussion = self.get_discussion_by_id(id=id)

            if discussion:
                yield discussion


    def bulk_get_discussions(self, parameters: dict={}) -> FlarumDiscussions:
        """
            ### Descriptions:
            Fetches discussions from Flarum API, without IDs. Note that discussions in bulk do not contain all
            of their properties, such as posts (Flarum limitation).

            ### Parameters:
            - `parameters` - A dictionary of search parameters. These are used in Flarum search bar (for example).
                
                Template for commonly used ones:
                
            ```
            {
                "filter[q]": <search term - can include gambits>,
                "page[limit]": <limit of results>,
                "page[offset]": <offset by x results>
            }
            ```

                Maximum number of discussions fetched at once is 50 (Flarum limitation, to not stress database):
                `{"page[limit]": 50}` - default is 20, anything above 50 will snap the limit to 50 anyways.

            ### Example usage:

            #### Fetch 50 discussions made by luceos on second page at once, by specifying parameters:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            param = {
                "filter[q]": "author:luceos",
                "sort": "createdAt",
                "page[limit]": 50
                "page[offset]": 100
            }

            for discussion in user.bulk_get_discussions(parameters=parameters):
                print(discussion)
            ```

        """

        raw = self.__fetch(url=f"{self.API_ENDPOINTS['api_discussions_url']}", params=parameters)
        discussions = FlarumDiscussions(raw)

        return discussions


    def get_all_discussions(self, parameters: dict={}) -> Generator[FlarumDiscussions, None, None]:
        """
            ### Description:
            Generates/fetches all discussions in bulk, until there are none left.

            ### Parameters:
            - `parameters` - A dictionary of search parameters. Same as for `bulk_get_discussions()`.
            `page[offset]` and `page[limit]` get overwritten - mandatory in order for this function to work properly - so
            you do not have to specify them.

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
            raw = self.__fetch(url=f"{self.API_ENDPOINTS['api_discussions_url']}", params=parameters)
            discussions = FlarumDiscussions(raw)

            if discussions:
                yield discussions

            offset += 1
            parameters["page[offset]"] = offset * parameters["page[limit]"]

            if not discussions.next_link:
                break


    def get_all_discussions_detailed(self, parameters: dict={}) -> Union[Generator[FlarumDiscussion, None, None]]:
        """
            ### Description:
            Generates/fetches full discussion data, until there are none left. The way it works is that discussions are fetched in bulk first, then
            discussion IDs from that bunch are obtained and passed to another API request for full discussion data.

            ### Parameters:
            - `parameters` - A dictionary of search parameters. Same as for `get_all_discussions()`.
            `page[offset]` and `page[limit]` get overwritten - mandatory in order for this function to work properly - so
            you do not have to specify them.

            ### Example usage:

            #### Fetch content of all posts from all discussions on Discuss, discussions ordered from newest to oldest:
            ```
            user = FlarumMyUser("https://discuss.flarum.org")

            for discussion in user.get_all_discussions_detailed(parameters={"sort": "-createdAt"}):
                for post in discussion.posts:
                    print(post.contentHTML)
            ```
        """

        parameters["page[offset]"] = 0
        parameters["page[limit]"] = 50
        offset = 0

        while True:
            raw = self.__fetch(url=f"{self.API_ENDPOINTS['api_discussions_url']}", params=parameters)
            discussions = FlarumDiscussions(raw)

            if discussions:
                for d in discussions:
                    discussion = self.get_discussion_by_id(id=d.id)

                    if discussion:
                        yield discussion

            offset += 1
            parameters["page[offset]"] = offset * parameters["page[limit]"]

            if not discussions.next_link:
                break


    def get_user_by_id(self, id: int) -> FlarumUser:
        """
            ### Description:
            Obtains user by its unique ID.

            ### Parameters:
            - `id` - The ID of the user. Can be an integer, although `str` is possible.

        """

        raw = self.__fetch(url=f"{self.API_ENDPOINTS['api_users_url']}/{id}")
        user = FlarumUser(raw)

        if user.type == "users":
            return user
