from typing import Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from ...session import FlarumUser

from .. import ExtensionMixin
from ...flarum.core.users import UserFromBulk


class UserBioUserMixin(UserFromBulk):
    @property
    def bio(self) -> Optional[str]:
        return self.attributes.get("bio", None)


    @property
    def canViewBio(self) -> bool:
        return self.attributes.get("canViewBio", False)


    @property
    def canEditBio(self) -> bool:
        return self.attributes.get("canEditBio", False)


class UserBioExtension(ExtensionMixin, UserBioUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, UserFromBulk, UserBioUserMixin)
