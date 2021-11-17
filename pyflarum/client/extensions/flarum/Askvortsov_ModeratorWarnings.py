from ....extensions import ExtensionMixin

from ...flarum.core.users import UserFromBulk



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

    AUTHOR = 'askvortsov'
    NAME = 'moderator-warnings'


    @classmethod
    def mixin(cls):
        super().mixin(UserFromBulk, ModeratorWarningsUserFromBulkMixin)
