from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class TagsDiscussionMixin(DiscussionFromBulk):
    @property
    def canTag(self) -> bool:
        return self.attributes.get("canTag", False)



class TagsExtension(ExtensionMixin, TagsDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, TagsDiscussionMixin)
