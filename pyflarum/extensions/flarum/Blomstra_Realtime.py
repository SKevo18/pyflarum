from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'blomstra'
NAME = 'realtime'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class RealtimeDiscussionMixin:
    # TODO: Does it actually come from this extension?
    @property
    def canViewWhoTypes(self: DiscussionFromBulk) -> bool:
        """
            Whether or not you can view who is typing in real time.
        """

        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin):
    """
        https://extiverse.com/extension/blomstra/realtime
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, RealtimeDiscussionMixin)
