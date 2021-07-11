from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.users import UserFromBulk


class ModeratorWarningsUserMixin(UserFromBulk):
    @property
    def canViewWarnings(self) -> bool:
        return self.attributes.get("canViewWarnings", False)


    @property
    def canManageWarnings(self) -> bool:
        return self.attributes.get("canManageWarnings", False)


    @property
    def canDeleteWarnings(self) -> bool:
        return self.attributes.get("canDeleteWarnings", False)


    @property
    def visibleWarningCount(self) -> int:
        return self.attributes.get("visibleWarningCount", 0)


class ModeratorWarningsExtension(ExtensionMixin, ModeratorWarningsUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, UserFromBulk, ModeratorWarningsUserMixin)
