from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromNotification
from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'approval'
ID = f"{AUTHOR}-{NAME}"


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



class ApprovalExtension(ExtensionMixin):
    def mixin(self):
        
        super().mixin(self, DiscussionFromNotification, ApprovalDiscussionNotificationMixin)
        super().mixin(self, PostFromNotification, ApprovalPostNotificationMixin)
