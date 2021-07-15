from typing import Optional
from ...custom_types import AnyUser

from .. import ExtensionMixin
from ...session import FlarumUser
from ...flarum.core.users import UserFromBulk
from ...error_handler import parse_request


AUTHOR = 'fof'
NAME = 'user-bio'
ID = f"{AUTHOR}-{NAME}"


class UserBioFlarumUserMixin(FlarumUser):
    def update_user_bio(self, user: Optional[AnyUser]=None, bio: Optional[str]=None):
        post_data = {
            "data": {
                "type": "users",
                "id": self.user.id,
                "attributes": {
                    "bio": bio if bio else ""
                }
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{user.id if user else self.user.id}", json=post_data)
        json = parse_request(raw)

        return self.__update_user_data(new_data=dict(data=json))


class UserBioUserFromBulkMixin(UserFromBulk):
    @property
    def bio(self) -> Optional[str]:
        return self.attributes.get("bio", None)


    @property
    def canViewBio(self) -> bool:
        return self.attributes.get("canViewBio", False)


    @property
    def canEditBio(self) -> bool:
        return self.attributes.get("canEditBio", False)


class UserBioExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, FlarumUser, UserBioFlarumUserMixin)
        super().mixin(self, UserFromBulk, UserBioUserFromBulkMixin)
