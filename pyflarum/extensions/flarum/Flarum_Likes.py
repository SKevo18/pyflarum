from .. import ExtensionMixin
from ...flarum.core.posts import PostFromNotification


class LikesPostNotificationMixin(PostFromNotification):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)



class LikesExtension(ExtensionMixin, LikesPostNotificationMixin):
    def mixin(self):
        super().mixin(self, PostFromNotification, LikesPostNotificationMixin)
