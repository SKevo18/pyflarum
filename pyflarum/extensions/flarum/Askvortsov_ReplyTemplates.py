from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'askvortsov'
NAME = 'reply-templates'
ID = f"{AUTHOR}-{NAME}"


class ReplyTemplatesDiscussionMixin(DiscussionFromBulk):
    @property
    def replyTemplate(self) -> str:
        return self.attributes.get("replyTemplate", "")


    @property
    def canManageReplyTemplates(self) -> bool:
        return self.attributes.get("canManageReplyTemplates", False)



class ReplyTemplatesExtension(ExtensionMixin):
    def mixin(self):
        
        super().mixin(self, DiscussionFromBulk, ReplyTemplatesDiscussionMixin)
