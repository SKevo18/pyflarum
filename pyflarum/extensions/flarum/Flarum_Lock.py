from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'flarum'
NAME = 'lock'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class LockDiscussionMixin(DiscussionFromBulk):
    @property
    def isLocked(self) -> bool:
        return self.attributes.get("isLocked", False)


    @property
    def canLock(self) -> bool:
        return self.attributes.get("canLock", False)



class StickyExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, LockDiscussionMixin)
