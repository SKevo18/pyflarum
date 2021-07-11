from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.discussions import DiscussionFromNotification
from ...flarum.core.posts import PostFromNotification


class ApprovalDiscussionNotificationMixin(DiscussionFromNotification):
    @property
    def isApproved(self) -> bool:
        return self.attributes.get("isApproved", False)


class ApprovalPostNotificationMixin(PostFromNotification):
    @property
    def isApproved(self) -> bool:
        return self.attributes.get("isApproved", False)


    @property
    def canApprove(self) -> bool:
        return self.attributes.get("canApprove", False)



class ApprovalExtension(ExtensionMixin, ApprovalDiscussionNotificationMixin, ApprovalPostNotificationMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromNotification, ApprovalDiscussionNotificationMixin)
        super().mixin(self, PostFromNotification, ApprovalPostNotificationMixin)
