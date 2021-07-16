from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'blomstra'
NAME = 'realtime'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class RealtimeDiscussionMixin(DiscussionFromBulk):
    @property
    def canViewWhoTypes(self) -> bool:
        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, RealtimeDiscussionMixin)
