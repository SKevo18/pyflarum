from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'split'
ID = f"{AUTHOR}-{NAME}"


class SplitDiscussionMixin(DiscussionFromBulk):
    @property
    def canSplit(self) -> bool:
        return self.attributes.get("canSplit", False)



class SplitExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, SplitDiscussionMixin)
