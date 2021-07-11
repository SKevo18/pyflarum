from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.users import UserFromBulk


class SpamblockUserMixin(UserFromBulk):
    @property
    def canSpamblock(self) -> bool:
        return self.attributes.get("canSpamblock", False)


class SpamblockExtension(ExtensionMixin, SpamblockUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, UserFromBulk, SpamblockUserMixin)
