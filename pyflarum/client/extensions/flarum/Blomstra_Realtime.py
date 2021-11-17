from ....extensions import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk



class RealtimeDiscussionMixin(DiscussionFromBulk):
    @property
    def canViewWhoTypes(self) -> bool:
        """
            Whether or not you can view who is typing in real time.
        """

        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin):
    """
        https://extiverse.com/extension/blomstra/realtime
    """

    AUTHOR = 'blomstra'
    NAME = 'realtime'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, RealtimeDiscussionMixin)
