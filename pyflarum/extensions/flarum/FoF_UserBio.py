from pyflarum.error_handler import parse_request
from typing import Optional

from .. import ExtensionMixin
from ...session import FlarumUser
from ...flarum.core.users import MyUser, UserFromBulk


AUTHOR = 'fof'
NAME = 'user-bio'
ID = f"{AUTHOR}-{NAME}"


class UserBioFlarumUserMixin(FlarumUser):
    def update_bio(self, bio: Optional[str]=None):
        post_data = {
            "data": {
                "type": "users",
                "id": self.user_id,
                "attributes": {
                    "bio": bio if bio else ""
                }
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{self.user_id}", json=post_data)
        json = parse_request(raw)

        return MyUser(user=self, _fetched_data=json)


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
