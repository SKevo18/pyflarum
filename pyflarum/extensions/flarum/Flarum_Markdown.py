from .. import ExtensionMixin

from ...flarum.core.forum import Forum


AUTHOR = "flarum"
NAME = "markdown"
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class ForumMixin(Forum):
    @property
    def markdown_mdarea(self) -> bool:
        return self.attributes.get("flarum-markdown.mdarea", False)



class ExampleExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, Forum, ForumMixin)
