import typing as t

from datetime import datetime

from .. import ExtensionMixin
from ...flarum.core.users import UserFromBulk


AUTHOR = 'fof'
NAME = 'username-request'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class UsernameRequestUserMixin(UserFromBulk):
    @property
    def usernameHistory(self) -> t.Optional[t.List[t.Dict[str, datetime]]]:
        raw_list = self.attributes.get("usernameHistory", None) # type: t.List[t.Dict[str, int]]
        formatted_list = [] # type: t.List[t.Dict[str, datetime]]

        if raw_list and isinstance(raw_list, list):
            for raw_dict in raw_list:
                if isinstance(raw_dict, dict):
                    for username, unix in raw_dict.items():
                        dt = datetime.fromtimestamp(unix)

                        formatted_list.append({ username: dt})

            return formatted_list

        return None



class UsernameRequestExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, UserFromBulk, UsernameRequestUserMixin)
