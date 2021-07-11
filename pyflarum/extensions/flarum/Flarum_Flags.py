from .. import ExtensionMixin

from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...flarum.core.posts import PostFromNotification


class FlagsPostNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin, FlagsPostNotificationMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, PostFromNotification, FlagsPostNotificationMixin)
