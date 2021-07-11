from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk


AUTHOR = 'askvortsov'
NAME = 'moderator-warnings'
ID = f"{AUTHOR}-{NAME}"


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


class ModeratorWarningsExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, UserFromBulk, ModeratorWarningsUserMixin)
