from typing import Union, Iterator

from requests import Session


class FlarumSession(object):
    def __init__(self, forum_url: str, username: Union[str]=None, password: Union[str, None]=None, user_agent: str="pyflarum", session_object: object=Session()):
        self.forum_url = forum_url
        self.username = username
        self.session = session_object # type: Session

        self.session.headers.update({
            "User-Agent": user_agent
        })


        self.__authenticate(username, password)


    def __str__(self) -> str:
        return f'<{type(self).__name__}> {self.forum_url}'


    def __repr__(self) -> str:
        return self.__str__()


    def __authenticate(self, username: Union[str]=None, password: Union[str, None]=None):
        if username and password:
            identification_data = {"identification": self.username, "password": self.password}
            token_data = self.session.post(url=f'{self.forum_url}/api/token', json=identification_data).json() # type: dict

            token = token_data.get("token", None)
            user_id = token_data.get("userId", None)

            if token:
                self.session.headers.update({
                    "Authorization": f'Token {token}; userId={user_id}',
                })

                self.isAuthenticated = True

            else:
                self.isAuthenticated = False

        else:
            self.isAuthenticated = False


class FlarumUser(FlarumSession):
    def get_discussion
