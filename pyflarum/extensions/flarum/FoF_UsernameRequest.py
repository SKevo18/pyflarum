from typing import Dict, List, Optional, TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from .. import ExtensionMixin
from ...flarum.core.users import UserFromBulk


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


class UsernameRequestExtension(ExtensionMixin, UsernameRequestUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, UserFromBulk, UsernameRequestUserMixin)
