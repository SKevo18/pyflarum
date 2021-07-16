from typing import Optional

from .. import ExtensionMixin

from ...flarum.core.forum import Forum
from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'flags'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class FlagsForumMixin(Forum):
    @property
    def canViewFlags(self) -> bool:
        return self.attributes.get("canViewFlags", False)


    @property
    def flagCount(self) -> Optional[int]:
        return self.attributes.get("flagCount", None)


    @property
    def guidelinesUrl(self) -> Optional[str]:
        return self.attributes.get("guidelinesUrl", None)



class FlagsPostFromNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromNotification, FlagsPostFromNotificationMixin)
        super().mixin(self, Forum, FlagsForumMixin)
