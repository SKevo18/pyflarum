from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class StickyDiscussionMixin(DiscussionFromBulk):
    @property
    def isSticky(self) -> bool:
        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        return self.attributes.get("canSticky", False)



class StickyExtension(ExtensionMixin, StickyDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, StickyDiscussionMixin)
