from json.decoder import JSONDecoder
from pyflarum.flarum.core.filters import DiscussionFilter
from typing import Any, Union

from requests import Session

from .flarum.core.discussions import Discussion, Discussions
from .error_handler import handle_errors


class FlarumSession(object):
    def __init__(self, forum_url: str, username: Union[str]=None, password: Union[str, None]=None, api_endpoint: str="api", user_agent: str="pyflarum", session_object: Union[Session, Any]=Session()):
        self.forum_url = forum_url
        self.api_endpoint = api_endpoint
        self.username = username
        self.session = session_object

        self.session.headers.update({
            "User-Agent": user_agent
        })


        self.__authenticate(username, password)


    def __str__(self) -> str:
        return f'<{type(self).__name__}> authenticated={self.is_authenticated}; username={self.username}'


    def __repr__(self) -> str:
        return self.__str__()


    def __authenticate(self, username: Union[str]=None, password: Union[str, None]=None):
        if username and password:
            identification_data = {"identification": self.username, "password": password}


            raw_token_data = self.session.post(url=f'{self.forum_url}/api/token', json=identification_data)

            if raw_token_data.status_code != 200:
                return handle_errors(status_code=raw_token_data.status_code)


            token_data = raw_token_data.json() # type: dict

            if 'errors' in token_data:
                return handle_errors(token_data['errors'])


            token = token_data.get("token", None)
            user_id = token_data.get("userId", None)

            if token:
                self.session.headers.update({
                    "Authorization": f'Token {token}; userId={user_id}',
                })

                self.is_authenticated = True

            else:
                self.is_authenticated = False

        else:
            self.is_authenticated = False


    @property
    def api_urls(self):
        """
            API reference:
            https://github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md
        """

        return {
            "forum": f"{self.forum_url}/{self.api_endpoint}/forum",

            "discussions": f"{self.forum_url}/{self.api_endpoint}/discussions",
            "posts": f"{self.forum_url}/{self.api_endpoint}/posts",

            "users": f"{self.forum_url}/{self.api_endpoint}/users",
            "notifications": f"{self.forum_url}/{self.api_endpoint}/notifications",
            "groups": f"{self.forum_url}/{self.api_endpoint}/groups",

            "tags": f"{self.forum_url}/{self.api_endpoint}/tags",
        }


class FlarumUser(FlarumSession):
    def get_discussion_by_id(self, id: int):
        raw = self.session.get(f"{self.api_urls['discussions']}/{id}")

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        return Discussion(session=self, _fetched_data=json)


    def all_discussions(self, filter: DiscussionFilter=None) -> Discussions:
        raw = self.session.get(f"{self.api_urls['discussions']}", params=filter)

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        return Discussions(session=self, _fetched_data=json)