from .. import ExtensionMixin
from ...flarum.core.users import UserFromBulk


class SpamblockUserMixin(UserFromBulk):
    @property
    def canSpamblock(self) -> bool:
        return self.attributes.get("canSpamblock", False)


class SpamblockExtension(ExtensionMixin, SpamblockUserMixin):
    def mixin(self):
        super().mixin(self, UserFromBulk, SpamblockUserMixin)
