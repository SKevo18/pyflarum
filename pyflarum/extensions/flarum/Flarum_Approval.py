from .. import ExtensionMixin
from ...flarum.core.discussions import Discussion


class ApprovalDiscussionMixin(Discussion):
    @property
    def isApproved(self) -> bool:
        return self.attributes.get("isApproved", False)



class ApprovalExtension(ExtensionMixin, ApprovalDiscussionMixin):
    def mixin(self):
        super().mixin(self, Discussion, ApprovalDiscussionMixin)
