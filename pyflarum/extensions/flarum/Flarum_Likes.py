from .. import ExtensionMixin

from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'likes'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class LikesPostNotificationMixin(PostFromNotification):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)



class LikesExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromNotification, LikesPostNotificationMixin)
