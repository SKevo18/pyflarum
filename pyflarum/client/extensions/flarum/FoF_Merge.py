from ....extensions import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk



class MergeDiscussionMixin(DiscussionFromBulk):
    @property
    def canMerge(self) -> bool:
        return self.attributes.get("canMerge", False)



class MergeExtension(ExtensionMixin):
    AUTHOR = 'fof'
    NAME = 'merge'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, MergeDiscussionMixin)
