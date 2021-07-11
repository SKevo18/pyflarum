from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromBulk


class MergeDiscussionMixin(DiscussionFromBulk):
    @property
    def canMerge(self) -> bool:
        return self.attributes.get("canMerge", False)



class MergeExtension(ExtensionMixin, MergeDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, MergeDiscussionMixin)
