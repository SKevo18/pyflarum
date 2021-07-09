from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class ApprovalDiscussionMixin(DiscussionFromBulk):
    @property
    def isApproved(self) -> bool:
        return self.attributes.get("isApproved", False)



class ApprovalExtension(ExtensionMixin, ApprovalDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, ApprovalDiscussionMixin)
