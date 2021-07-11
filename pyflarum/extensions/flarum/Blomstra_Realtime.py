from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromBulk


class RealtimeDiscussionMixin(DiscussionFromBulk):
    @property
    def canViewWhoTypes(self) -> bool:
        return self.attributes.get("canViewWhoTypes", False)



class RealtimeExtension(ExtensionMixin, RealtimeDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, RealtimeDiscussionMixin)
