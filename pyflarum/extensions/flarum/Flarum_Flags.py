from .. import ExtensionMixin

from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'flags'
ID = f"{AUTHOR}-{NAME}"


class FlagsPostNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, PostFromNotification, FlagsPostNotificationMixin)
