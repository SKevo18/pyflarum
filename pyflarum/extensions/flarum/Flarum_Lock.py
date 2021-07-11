from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'flarum'
NAME = 'lock'
ID = f"{AUTHOR}-{NAME}"


class LockDiscussionMixin(DiscussionFromBulk):
    @property
    def isLocked(self) -> bool:
        return self.attributes.get("isLocked", False)


    @property
    def canLock(self) -> bool:
        return self.attributes.get("canLock", False)



class StickyExtension(ExtensionMixin):
    def mixin(self):
        
        super().mixin(self, DiscussionFromBulk, LockDiscussionMixin)
