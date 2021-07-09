from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class SplitDiscussionMixin(DiscussionFromBulk):
    @property
    def canSplit(self) -> bool:
        return self.attributes.get("canSplit", False)



class SplitExtension(ExtensionMixin, SplitDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, SplitDiscussionMixin)
