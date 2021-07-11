from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromBulk


class LockDiscussionMixin(DiscussionFromBulk):
    @property
    def isLocked(self) -> bool:
        return self.attributes.get("isLocked", False)


    @property
    def canLock(self) -> bool:
        return self.attributes.get("canLock", False)



class StickyExtension(ExtensionMixin, LockDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, LockDiscussionMixin)
