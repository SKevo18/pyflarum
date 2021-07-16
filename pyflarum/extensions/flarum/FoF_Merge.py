from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'merge'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class MergeDiscussionMixin(DiscussionFromBulk):
    @property
    def canMerge(self) -> bool:
        return self.attributes.get("canMerge", False)



class MergeExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, MergeDiscussionMixin)
