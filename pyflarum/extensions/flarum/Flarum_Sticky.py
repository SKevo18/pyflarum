from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'flarum'
NAME = 'sticky'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class StickyDiscussionMixin(DiscussionFromBulk):
    @property
    def isSticky(self) -> bool:
        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        return self.attributes.get("canSticky", False)



class StickyExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, StickyDiscussionMixin)
