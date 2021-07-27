from typing import Any, BinaryIO, Dict, List, Union, Optional, Literal
from .custom_types import AnyUser


import warnings
from datetime import datetime
from requests import Session


from .flarum.core.forum import Forum

from .flarum.core.users import MyUser, User, Users
from .flarum.core.notifications import Notifications
from .flarum.core.groups import Groups

from .flarum.core.discussions import Discussion, Discussions
from .flarum.core.posts import Post, Posts

from .flarum.core.filters import Filter


from .error_handler import MissingExtensionError, MissingExtensionWarning, parse_request
from .datetime_conversions import datetime_to_flarum


from .extensions import ExtensionMixin


class FlarumSession(object):
    def __init__(self, forum_url: str, username: Union[str]=None, password: Union[str, None]=None, api_endpoint: str="api", user_agent: str="pyflarum", session_object: Union[Session, Any]=Session()):
        self.forum_url = forum_url
        self.api_endpoint = api_endpoint
        self.username = username
        self.session = session_object

        self.session.headers.update({
            "User-Agent": user_agent
        })


        self.authenticate(username, password)


    def __str__(self) -> str:
        return f'<{type(self).__name__}> authenticated={self.is_authenticated}; username={self.username}'


    def __repr__(self) -> str:
        return self.__str__()


    def authenticate(self, username: Union[str]=None, password: Union[str, None]=None):
        if username and password:
            identification_data = {"identification": username, "password": password}

            raw = self.session.post(url=f'{self.forum_url}/api/token', json=identification_data)
            token_data = parse_request(raw)

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
            self.session.headers.update({
                "Authorization": None,
            })

            self.is_authenticated = False


    @property
    def api_urls(self):
        """
            Simple, hardcoded `'key: value'` `dict` of Flarum's API routes for quick access.

            API routes reference (old):
            https://github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md
        """

        return {
            "base": f"{self.forum_url}/{self.api_endpoint}",
            "forum": f"{self.forum_url}/{self.api_endpoint}/forum",

            "settings": f"{self.forum_url}/{self.api_endpoint}/settings",
            "extensions": f"{self.forum_url}/{self.api_endpoint}/extensions",

            "discussions": f"{self.forum_url}/{self.api_endpoint}/discussions",
            "posts": f"{self.forum_url}/{self.api_endpoint}/posts",

            "users": f"{self.forum_url}/{self.api_endpoint}/users",
            "notifications": f"{self.forum_url}/{self.api_endpoint}/notifications",
            "groups": f"{self.forum_url}/{self.api_endpoint}/groups",

            "tags": f"{self.forum_url}/{self.api_endpoint}/tags",
        }


class FlarumUser(FlarumSession, dict):
    def __init__(self, extensions: Optional[List[ExtensionMixin]]=None, **kwargs):
        self.extensions = extensions

        if self.extensions:
            for extension in self.extensions:
                dependencies = extension.get_dependencies(extension) # type: dict

                hard = dependencies.get("hard", None)
                soft = dependencies.get("soft", None)

                if hard and len(hard) > 0:
                    for hard_dependency in hard:
                        if hard_dependency not in self.extensions:
                            raise MissingExtensionError(f'`{extension}` hardly depends on `{hard_dependency}`. Please, include that extension too in your extension list.')

                extension.mixin(extension)

            for extension in self.extensions:
                if soft and len(soft) > 0:
                    for soft_dependency in soft:
                        if soft_dependency not in self.extensions:
                            warnings.warn(f'`{extension}` softly depends on `{soft_dependency}`. Some features might be unavailable.', MissingExtensionWarning)


        super().__init__(**kwargs)
        __json = self._fetch_user_data()


        if __json:
            self.data = MyUser(user=self, _fetched_data=dict(data=__json))


    def _fetch_user_data(self):
        """
            Fetches your user's JSON data.
        """

        filter = Filter(query=self.username, limit=1)
        raw = self.session.get(f"{self.api_urls['users']}", params=filter.to_dict)
        json = parse_request(raw)

        for possible_user in json.get("data", {}):
            if possible_user.get("attributes", {}).get("username", None) == self.username:
                return possible_user

        return None


    def _update_user_data(self, new_data: dict):
        if new_data.get("data", {}).get("id", None) == self.data.id:
            self.data = MyUser(user=self, _fetched_data=new_data)

            return self

        else:
            return self


    def get_forum_data(self):
        raw = self.session.get(f"{self.api_urls['base']}")
        json = parse_request(raw)

        return Forum(user=self, _fetched_data=json)


    def get_discussion_by_id(self, id: int):
        raw = self.session.get(f"{self.api_urls['discussions']}/{id}")
        json = parse_request(raw)

        return Discussion(user=self, _fetched_data=json)


    def get_post_by_id(self, id: int):
        raw = self.session.get(f"{self.api_urls['posts']}/{id}")
        json = parse_request(raw)

        return Post(user=self, _fetched_data=json)


    def all_discussions(self, filter: Filter=None):
        """
            Obtains all discussions from specific page by using `filter`.
        """


        if filter:
            raw = self.session.get(f"{self.api_urls['discussions']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['discussions']}")

        json = parse_request(raw)

        return Discussions(user=self, _fetched_data=json)


    def all_posts(self, filter: Filter=None):
        """
            Obtains all posts from specific page by using `filter`.
        """


        if filter:
            raw = self.session.get(f"{self.api_urls['posts']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['posts']}")

        json = parse_request(raw)

        return Posts(user=self, _fetched_data=json)


    def all_users(self, filter: Filter=None):
        """
            Obtains all users from specific page by using `filter`.
        """


        if filter:
            raw = self.session.get(f"{self.api_urls['users']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['users']}")

        json = parse_request(raw)

        return Users(user=self, _fetched_data=json)


    def get_notifications(self, filter: Optional[Filter]=None) -> Notifications:
        """
            Obtains all notifications of your user.
        """

        if filter:
            raw = self.session.get(f"{self.api_urls['notifications']}", params=filter.to_dict)
        
        else:
            raw = self.session.get(f"{self.api_urls['notifications']}")


        json = parse_request(raw)

        return Notifications(user=self, _fetched_data=json)


    def mark_all_discussions_as_read(self, at: datetime=datetime.now()):
        post_data = {
            "data": {
                "type": "users",
                "id": self.data.id,
                "attributes": {
                    "markedAllAsReadAt": datetime_to_flarum(at)
                }
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{self.data.id}", json=post_data)
        parse_request(raw)

        return True


    def mark_all_notifications_as_read(self):
        raw = self.session.post(f"{self.api_urls['notifications']}/read")
        parse_request(raw)

        return True


    def get_groups(self):
        raw = self.session.get(f"{self.api_urls['groups']}")
        json = parse_request(raw)

        return Groups(user=self, _fetched_data=json)


    def get_user_by_id(self, id: int):
        raw = self.session.get(f"{self.api_urls['users']}/{id}")
        json = parse_request(raw)

        return User(user=self, _fetched_data=json)


    def update_user_info(self, user: Optional[AnyUser]=None, new_username: Optional[str]=None, groups: Optional[list]=None):
        id = user.id if user else self.data.id

        patch_data = {
            "data": {
                "type": "users",
                "id": id,
                "attributes": {},
                "relationships": {}
            }
        } # type: Dict[str, Dict[str, Union[Any, dict]]]


        if new_username:
            patch_data['attributes']['username'] = new_username

        if groups:
            patch_data['data']['relationships'].update({"groups": {"data": groups}})


        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=patch_data)
        json = parse_request(raw)

        return self._update_user_data(new_data=dict(data=json))


    def send_password_reset_email(self):
        patch_data = { "email": self.data.email }

        raw = self.session.patch(f"{self.api_urls['users']}/{self.data.id}", json=patch_data)
        json = parse_request(raw)

        return self._update_user_data(new_data=dict(data=json))


    def update_preferences(self, notification: str, type: str=Literal['alert', 'email'], user: Optional[AnyUser]=None, state: bool=True):
        id = user.id if user else self.data.id

        patch_data = {
            "data": {
                "type": "users",
                "id": id,
                "attributes": {
                    "preferences": {
                        f"notify_{notification}_{type}": state
                    }
                }
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=patch_data)
        json = parse_request(raw)

        return self._update_user_data(new_data=json)


    def change_email(self, new_email: str, password_confirmation: str, user: Optional[AnyUser]=None):
        id = user.id if user else self.data.id

        patch_data = {
            "data": {
                "type": "users",
                "id": id,
                "attributes": {
                    "email": new_email
                }
            },
            "meta": {
                "password": password_confirmation
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=patch_data)
        json = parse_request(raw)

        return self._update_user_data(new_data=json)


    def upload_user_avatar(self, file: BinaryIO, user: Optional[AnyUser]=None, file_name: str="avatar", file_type: Literal['image/png', 'image/jpeg', 'image/gif']="image/png"):
        raw = self.session.post(url=f"{self.api_urls['users']}/{user.id if user else self.data.id}/avatar", files={ "avatar": (file_name, file, file_type) })

        json = parse_request(raw)

        return self._update_user_data(new_data=json)


    def remove_user_avatar(self, user: Optional[AnyUser]=None):
        raw = self.session.delete(url=f"{self.api_urls['users']}/{user.id if user else self.data.id}/avatar")
        json = parse_request(raw)

        return self._update_user_data(new_data=json)
