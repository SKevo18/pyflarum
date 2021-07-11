from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.posts import PostFromNotification


class LikesPostNotificationMixin(PostFromNotification):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)



class LikesExtension(ExtensionMixin, LikesPostNotificationMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, PostFromNotification, LikesPostNotificationMixin)
