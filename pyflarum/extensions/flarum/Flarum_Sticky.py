from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromBulk


class StickyDiscussionMixin(DiscussionFromBulk):
    @property
    def isSticky(self) -> bool:
        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        return self.attributes.get("canSticky", False)



class StickyExtension(ExtensionMixin, StickyDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, StickyDiscussionMixin)
