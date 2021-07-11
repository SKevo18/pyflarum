from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class ReplyTemplatesDiscussionMixin(DiscussionFromBulk):
    @property
    def replyTemplate(self) -> str:
        return self.attributes.get("replyTemplate", "")


    @property
    def canManageReplyTemplates(self) -> bool:
        return self.attributes.get("canManageReplyTemplates", False)



class ReplyTemplatesExtension(ExtensionMixin, ReplyTemplatesDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, ReplyTemplatesDiscussionMixin)
