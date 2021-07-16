from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'askvortsov'
NAME = 'reply-templates'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class ReplyTemplatesDiscussionMixin(DiscussionFromBulk):
    @property
    def replyTemplate(self) -> str:
        return self.attributes.get("replyTemplate", "")


    @property
    def canManageReplyTemplates(self) -> bool:
        return self.attributes.get("canManageReplyTemplates", False)



class ReplyTemplatesExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, ReplyTemplatesDiscussionMixin)
