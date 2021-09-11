import typing as t

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
        """
            Whether or not you can view all the flags on the forum.
        """

        return self.attributes.get("canViewFlags", False)


    @property
    def flagCount(self) -> t.Optional[int]:
        """
            The total flagged post/discussion count (forum-wide).
        """

        return self.attributes.get("flagCount", None)


    @property
    def guidelinesUrl(self) -> t.Optional[str]:
        """
            The URL of the forum's guidelines, if specified by the admin.
        """

        return self.attributes.get("guidelinesUrl", None)



class FlagsPostFromNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin):
    """
        https://packagist.org/packages/flarum/flags
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromNotification, FlagsPostFromNotificationMixin)
        super().mixin(self, Forum, FlagsForumMixin)
