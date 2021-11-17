from ....extensions import ExtensionMixin

from ...flarum.core.forum import Forum



class ForumMixin(Forum):
    @property
    def markdown_mdarea(self) -> bool:
        """
            Whether or not the MDArea is enabled for markdown.
        """

        return self.attributes.get("flarum-markdown.mdarea", False)



class MarkdownExtension(ExtensionMixin):
    """
        https://packagist.org/packages/flarum/markdown
    """

    AUTHOR = 'flarum'
    NAME = 'markdown'


    @classmethod
    def mixin(cls):
        super().mixin(Forum, ForumMixin)
