from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk


AUTHOR = 'askvortsov'
NAME = 'moderator-warnings'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class ModeratorWarningsUserMixin(UserFromBulk):
    @property
    def canViewWarnings(self) -> bool:
        """
            Whether or not you can view the warnings of this user.
        """

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
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, UserFromBulk, ModeratorWarningsUserMixin)
