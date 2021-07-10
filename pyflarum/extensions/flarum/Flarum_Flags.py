from .. import ExtensionMixin
from ...flarum.core.posts import PostFromNotification


class FlagsPostNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin, FlagsPostNotificationMixin):
    def mixin(self):
        super().mixin(self, PostFromNotification, FlagsPostNotificationMixin)
