from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk


AUTHOR = 'askvortsov'
NAME = 'moderator-warnings'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class ModeratorWarningsUserFromBulkMixin(UserFromBulk):
    @property
    def canViewWarnings(self) -> bool:
        """
            Whether or not you can view the warnings of the user.
        """

        return self.attributes.get("canViewWarnings", False)


    @property
    def canManageWarnings(self) -> bool:
        """
            Whether or not you are able to manage the user's warnings.
        """

        return self.attributes.get("canManageWarnings", False)


    @property
    def canDeleteWarnings(self) -> bool:
        """
            Whether or not you can delete the user's warnings.
        """

        return self.attributes.get("canDeleteWarnings", False)


    @property
    def visibleWarningCount(self) -> int:
        """
            The amount of warnings that you can see that belong to the user.
        """

        return self.attributes.get("visibleWarningCount", 0)



class ModeratorWarningsExtension(ExtensionMixin):
    """
        https://extiverse.com/extension/askvortsov/flarum-moderator-warnings
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, UserFromBulk, ModeratorWarningsUserFromBulkMixin)
