from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'split'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class SplitDiscussionMixin(DiscussionFromBulk):
    @property
    def canSplit(self) -> bool:
        return self.attributes.get("canSplit", False)



class SplitExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, SplitDiscussionMixin)
