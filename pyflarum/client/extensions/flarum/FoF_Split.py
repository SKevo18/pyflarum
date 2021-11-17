from ....extensions import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk



class SplitDiscussionMixin(DiscussionFromBulk):
    @property
    def canSplit(self) -> bool:
        return self.attributes.get("canSplit", False)



class SplitExtension(ExtensionMixin):
    AUTHOR = 'fof'
    NAME = 'split'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, SplitDiscussionMixin)
