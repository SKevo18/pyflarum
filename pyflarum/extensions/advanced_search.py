import typing as t

from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.users import User
from ..flarum.core.filters import Filter

from ..error_handler import parse_request


AUTHOR = 'skevo'
NAME = 'advanced-search'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class AdvancedSearchFlarumUserMixin(FlarumUser):
    def get_user_by_username(self, username: str) -> t.Optional[User]:
        filter = Filter(query=username, limit=1)

        raw = self.session.get(f"{self.api_urls['users']}", params=filter.to_dict)
        json = parse_request(raw)

        for possible_user in json.get("data", [{}]):
            if possible_user.get("attributes", {}).get("username", None) == username:
                return User(user=self, _fetched_data=dict(data=possible_user))

        return None



class AdvancedSearchExtension(ExtensionMixin, AdvancedSearchFlarumUserMixin):
    def __init__(self):
        self.name = NAME
        self.author = AUTHOR
        self.id = ID

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumUser, AdvancedSearchFlarumUserMixin)
