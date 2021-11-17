from ....extensions import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk



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

    AUTHOR = 'askvortsov'
    NAME = 'reply-templates'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, ReplyTemplatesDiscussionFromBulkMixin)
