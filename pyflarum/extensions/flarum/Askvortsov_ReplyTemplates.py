from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'askvortsov'
NAME = 'reply-templates'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class ReplyTemplatesDiscussionFromBulkMixin(DiscussionFromBulk):
    @property
    def replyTemplate(self) -> str:
        """
            The reply template for the discussion.
        """

        return self.attributes.get("replyTemplate", "")


    @property
    def canManageReplyTemplates(self) -> bool:
        """
            Whether or not you are able to manage the discussion's reply templates.
        """

        return self.attributes.get("canManageReplyTemplates", False)



class ReplyTemplatesExtension(ExtensionMixin):
    """
        https://extiverse.com/extension/askvortsov/flarum-discussion-templates
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, ReplyTemplatesDiscussionFromBulkMixin)
