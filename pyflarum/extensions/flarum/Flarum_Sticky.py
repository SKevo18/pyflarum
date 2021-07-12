from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'flarum'
NAME = 'sticky'
ID = f"{AUTHOR}-{NAME}"


class StickyDiscussionMixin(DiscussionFromBulk):
    @property
    def isSticky(self) -> bool:
        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        return self.attributes.get("canSticky", False)



class StickyExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, StickyDiscussionMixin)
