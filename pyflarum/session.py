import typing as t
if t.TYPE_CHECKING:
    from .custom_types import AnyUser


import warnings

from datetime import datetime
from requests import Session
from urllib.parse import urlparse


from .flarum.core.forum import Forum

from .flarum.core.users import MyUser, User, Users
from .flarum.core.notifications import Notifications
from .flarum.core.groups import Group, Groups

from .flarum.core.discussions import Discussion, Discussions
from .flarum.core.posts import Post, Posts

from .flarum.core.filters import Filter


from .error_handler import MissingExtensionWarning, MissingExtensionError, parse_request
from .datetime_conversions import datetime_to_flarum


from .extensions import ExtensionMixin



class FlarumSession:
    """
        The main object that carries the Flarum session.
    """

    def __init__(self, forum_url: 'str', username_or_email: t.Optional[str]=None, password: t.Optional[str]=None, api_endpoint: 'str'="api", user_agent: 'str'="pyflarum", session_object: 'Session | t.Any'=Session()):
        """
            ### Parameters:
            - `forum_url` - the forum URL that you want the bot to fetch/update data from.
            - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the user isn't logged in.
            - `password` - optional. The user's password. If `None`, then the user isn't logged in.
            - `api_endpoint` - the API endpoint of the forum, without slashes. This can be specified in Flarum's `config.php` and normally forums don't need to change the default `'api'`
            - `user_agent` - the user agent that will be used to make all requests. Defaults to `'pyflarum'`.
            - `session_object` - the `Session` object to make requests with. You can pass any object that supports all operations from the [requests](https://pypi.org/project/requests/) library, check [requests_cache](https://pypi.org/project/requests-cache/) as an example.
            ```
        """

        if not forum_url.startswith("http"):
            raise TypeError(f'Invalid protocol used in `forum_url` ({forum_url}) - expected either "https://" or "http://"')

        parsed_url = urlparse(forum_url, scheme="https")
        self.forum_url = f"{parsed_url.scheme}://{parsed_url.hostname}"

        self.api_endpoint = api_endpoint
        self.username_or_email = username_or_email
        self.session = session_object

        self.session.headers.update({
            "User-Agent": user_agent
        })


        self.authenticate(username_or_email, password)


    def __str__(self) -> str:
        return f'<{type(self).__name__}> authenticated={self.is_authenticated}; username={self.username_or_email}'


    def __repr__(self) -> str:
        return self.__str__()


    def authenticate(self, username_or_email: t.Optional[str]=None, password: t.Optional[str]=None) -> None:
        """
            Authenticates your user. This can be run after `FlarumUser` was initialized, to switch to a different user. You can even change
            `FlarumUser.forum_url` to login to another forum.

            ### Parameters:
            - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the user isn't logged in.
            - `password` - optional. The user's password. If `None`, then the user isn't logged in.
        """

        if username_or_email and password:
            identification_data = {"identification": username_or_email, "password": password}

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
    def api_urls(self) -> t.Dict[str, str]:
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
    def __init__(self, extensions: 't.Optional[t.List[ExtensionMixin]]'=None, **kwargs):
        """
            ### Parameters:
            - `forum_url` - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https://domain.tld/ - wrong; https://domain.tld - correct).
            - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the bot doesn't login.
            - `password` - optional. The user's password. If `None`, then the bot doesn't login.
            - `api_endpoint` - the API endpoint of the forum, without slashes. This can be specified in Flarum's `config.php` and normally forums don't need to change the default `'api'`
            - `user_agent` - the user agent that will be used to make all requests. Defaults to `pyflarum <version>`.
            - `session_object` - the `Session` object to make requests with. You can pass any object that supports all operations from the [requests](https://pypi.org/project/requests/) library, check [requests_cache](https://pypi.org/project/requests-cache/) as an example.
            - `extensions` - a list of `ExtensionMixin` classes. These are monkey-patched on initialization. Learn more about [extensions](https://cwkevo.github.io/pyflarum/docs/#extensions).
            ```
        """

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

                if soft and len(soft) > 0:
                    for soft_dependency in soft:
                        if soft_dependency not in self.extensions:
                            warnings.warn(f'`{extension}` softly depends on `{soft_dependency}`. Some features might be unavailable.', MissingExtensionWarning)


        super().__init__(**kwargs)
        __json = self._fetch_user_data()


        if __json:
            self.data = MyUser(user=self, _fetched_data=dict(data=__json))
            self.username = self.data.username

        else:
            self.username = self.username_or_email


    def _fetch_user_data(self) -> t.Optional[dict]:
        """
            Fetches your user's JSON data.
        """

        if self.username_or_email:
            filter = Filter(limit=1)

            if '@' in self.username_or_email:
                filter.query = f'email:{self.username_or_email}'

            else:
                filter.query = self.username_or_email


            raw = self.session.get(f"{self.api_urls['users']}", params=filter.to_dict)
            json = parse_request(raw)

            for possible_user in json.get("data", [{}]):
                if '@' in self.username_or_email:
                    if possible_user.get("attributes", {}).get("email", None) == self.username_or_email:
                        return possible_user

                else:
                    if possible_user.get("attributes", {}).get("username", None) == self.username_or_email:
                        return possible_user


        return None


    def _update_user_data(self, new_data: 'dict') -> t.Union['FlarumUser', User]:
        """
            Updates your user data with new data, if the data belongs to you.
            Then returns updated `FlarumUser`.

            If the data doesn't belong to you, the other `User` is returned.
        """

        if int(new_data.get("data", {}).get("id", -1)) == self.data.id:
            self.data = MyUser(user=self, _fetched_data=new_data)

            return self


        else:
            user = User(user=self, _fetched_data=new_data)

            return user


    def get_forum_data(self) -> Forum:
        """
            Obtains the forum data, returns `Forum` object.
        """

        raw = self.session.get(f"{self.api_urls['base']}")
        json = parse_request(raw)


        return Forum(user=self, _fetched_data=json)


    def get_user_by_id(self, id: int) -> User:
        """
            Obtains a user by specific ID.
        """

        raw = self.session.get(f"{self.api_urls['users']}/{id}")
        json = parse_request(raw)


        return User(user=self, _fetched_data=json)


    def get_discussion_by_id(self, id: int) -> Discussion:
        """
            Obtains a discussion by specific ID.
        """

        raw = self.session.get(f"{self.api_urls['discussions']}/{id}")
        json = parse_request(raw)


        return Discussion(user=self, _fetched_data=json)


    def get_post_by_id(self, id: int) -> Post:
        """
            Obtains a post by specific ID.
        """

        raw = self.session.get(f"{self.api_urls['posts']}/{id}")
        json = parse_request(raw)


        return Post(user=self, _fetched_data=json)


    def get_discussions(self, filter: t.Optional[Filter]=None) -> Discussions:
        """
            Obtains all discussions from `/api/discussions`, optionally filtering results by using `filter`.
        """

        if filter:
            raw = self.session.get(f"{self.api_urls['discussions']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['discussions']}")

        json = parse_request(raw)


        return Discussions(user=self, _fetched_data=json)


    def get_posts(self, filter: t.Optional[Filter]=None) -> Posts:
        """
            Obtains all posts from `/api/posts`, optionally filtering results by using `filter`.
        """

        if filter:
            raw = self.session.get(f"{self.api_urls['posts']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['posts']}")

        json = parse_request(raw)


        return Posts(user=self, _fetched_data=json)


    def get_users(self, filter: 'Filter'=None) -> Users:
        """
            Obtains all users from `/api/users`, optionally filtering results by using `filter`.
        """


        if filter:
            raw = self.session.get(f"{self.api_urls['users']}", params=filter.to_dict)

        else:
            raw = self.session.get(f"{self.api_urls['users']}")

        json = parse_request(raw)


        return Users(user=self, _fetched_data=json)


    def get_notifications(self, filter: t.Optional[Filter]=None) -> Notifications:
        """
            Obtains all of your notifications from `/api/notifications`, optionally filtering results by using `filter`.
        """

        if filter:
            raw = self.session.get(f"{self.api_urls['notifications']}", params=filter.to_dict)
        
        else:
            raw = self.session.get(f"{self.api_urls['notifications']}")


        json = parse_request(raw)


        return Notifications(user=self, _fetched_data=json)


    def mark_all_discussions_as_read(self, at: 'datetime'=datetime.now()) -> 't.Literal[True]':
        """
            Marks all discussions as read.

            Specify `at` to mark discussions as read at a specific date (strange how this is allowed, might be
            because of timezones).
        """

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


    def mark_all_notifications_as_read(self) -> 't.Literal[True]':
        """
            Marks all notifications as read. Returns `True` when successful.
        """

        raw = self.session.post(f"{self.api_urls['notifications']}/read")
        parse_request(raw)


        return True


    def get_groups(self) -> Groups:
        """
            Obtains all groups of a forum from `/api/groups`.
        """

        raw = self.session.get(f"{self.api_urls['groups']}")
        json = parse_request(raw)


        return Groups(user=self, _fetched_data=json)


    def update_user_info(self, user: t.Optional['AnyUser']=None, new_username: t.Optional[str]=None, groups: t.Union[t.Optional[t.List[t.Union[str, int]]], t.Union[t.List[Group], Groups]]=None) -> t.Union['FlarumUser', User]:
        """
            Updates the info of a user (this can be your user or someone else).

            If you are updating yourself, then `FlarumUser` is returned (with the new data).
            If you are updating someone else, then the updated `User` is returned.

            ### Parameters:
            - `user` - the user to update.
            - `new_username` - the user's new username.
            - `groups` - new groups of the user. This can either be a list of `pyflarum.flarum.core.groups.Group` objects,
            or just one `pyflarum.flarum.core.groups.Groups`, or a list of `str` or `int` representing the group IDs.
        """

        id = user.id if user else self.data.id

        patch_data = {
            "data": {
                "type": "users",
                "id": id,
                "attributes": {},
                "relationships": {}
            }
        } # type: t.Dict[str, t.Dict[str, dict]]


        if new_username:
            patch_data['attributes']['username'] = new_username

        if groups:
            patch_data['data']['relationships'].update({"groups": {"data": [group.id if isinstance(group, Group) else group for group in groups]}})


        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=patch_data)
        json = parse_request(raw)


        return self._update_user_data(new_data=json)


    def send_password_reset_email(self) -> t.Union['FlarumUser', User]:
        """
            Allows you to send yourself a password reset E-mail.
        """

        patch_data = {"email": self.data.email}

        raw = self.session.patch(f"{self.api_urls['users']}/{self.data.id}", json=patch_data)
        json = parse_request(raw)


        return self._update_user_data(new_data=dict(data=json))


    def update_preferences(self, preferences: t.Iterable[t.Tuple[str, t.Any]], user: t.Optional['AnyUser']=None) -> t.Union['FlarumUser', User]:
        """
            Updates an user's preferences.

            If no user is specified, then your user is updated.
        """

        id = user.id if user else self.data.id

        patch_data = {
            "data": {
                "type": "users",
                "id": id,
                "attributes": {
                    "preferences": {}
                }
            }
        }


        for preference, value in preferences:
            patch_data['data']['attributes']['preferences'][preference] = value


        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=patch_data)
        json = parse_request(raw)


        return self._update_user_data(new_data=json)


    def change_email(self, new_email: str, password_confirmation: str, user: t.Optional['AnyUser']=None) -> t.Union['FlarumUser', User]:
        """
            Changes your E-mail. If `user` is specified, then that user's E-mail is changed.

            If you are changing the E-mail of another user, you do not need to specify their password.
        """

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


    def upload_user_avatar(self, file: t.BinaryIO, user: t.Optional['AnyUser']=None, file_name: str="avatar", file_type: 't.Literal["image/png", "image/jpeg", "image/gif"]'="image/png") -> t.Union['FlarumUser', User]:
        """
            Uploads an avatar for yourself. If `user` is specified, then avatar of that user is changed.
        """

        id = user.id if user else self.data.id

        raw = self.session.post(url=f"{self.api_urls['users']}/{id}/avatar", files={ "avatar": (file_name, file, file_type) })
        json = parse_request(raw)


        return self._update_user_data(new_data=json)


    def remove_user_avatar(self, user: t.Optional['AnyUser']=None) -> t.Union['FlarumUser', User]:
        """
            Removes your user's avatar. If `user` is specified, then avatar of that user is removed.
        """

        raw = self.session.delete(url=f"{self.api_urls['users']}/{user.id if user else self.data.id}/avatar")
        json = parse_request(raw)
 

        return self._update_user_data(new_data=json)
