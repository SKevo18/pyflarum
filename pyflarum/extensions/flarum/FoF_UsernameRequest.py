from typing import Dict, List, Optional

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
    def usernameHistory(self) -> Optional[List[Dict[str, datetime]]]:
        raw_list = self.attributes.get("usernameHistory", None) # type: List[Dict[str, int]]
        formatted_list = [] # type: List[Dict[str, datetime]]

        if raw_list and isinstance(raw_list[0], dict):
            for raw_dict in raw_list:
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
