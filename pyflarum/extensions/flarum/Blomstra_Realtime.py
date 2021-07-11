from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'blomstra'
NAME = 'realtime'
ID = f"{AUTHOR}-{NAME}"


class RealtimeDiscussionMixin(DiscussionFromBulk):
    @property
    def canViewWhoTypes(self) -> bool:
        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin):
    def mixin(self):
        
        super().mixin(self, DiscussionFromBulk, RealtimeDiscussionMixin)
