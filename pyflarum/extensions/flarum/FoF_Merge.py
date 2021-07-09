from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class MergeDiscussionMixin(DiscussionFromBulk):
    @property
    def canMerge(self) -> bool:
        return self.attributes.get("canMerge", False)



class MergeExtension(ExtensionMixin, MergeDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, MergeDiscussionMixin)
