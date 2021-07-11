from .. import ExtensionMixin

from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'likes'
ID = f"{AUTHOR}-{NAME}"


class LikesPostNotificationMixin(PostFromNotification):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)



class LikesExtension(ExtensionMixin):
    def mixin(self):
        
        super().mixin(self, PostFromNotification, LikesPostNotificationMixin)
