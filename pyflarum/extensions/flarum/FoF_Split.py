from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromBulk


class SplitDiscussionMixin(DiscussionFromBulk):
    @property
    def canSplit(self) -> bool:
        return self.attributes.get("canSplit", False)



class SplitExtension(ExtensionMixin, SplitDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, SplitDiscussionMixin)
