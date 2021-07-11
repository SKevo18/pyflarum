from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'merge'
ID = f"{AUTHOR}-{NAME}"



class MergeDiscussionMixin(DiscussionFromBulk):
    @property
    def canMerge(self) -> bool:
        return self.attributes.get("canMerge", False)



class MergeExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, MergeDiscussionMixin)
