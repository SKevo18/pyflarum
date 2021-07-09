from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class RealtimeDiscussionMixin(DiscussionFromBulk):
    @property
    def canViewWhoTypes(self) -> bool:
        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin, RealtimeDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, RealtimeDiscussionMixin)
