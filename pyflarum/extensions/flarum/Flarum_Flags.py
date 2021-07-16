from .. import ExtensionMixin

from ...flarum.core.posts import PostFromNotification


AUTHOR = 'flarum'
NAME = 'flags'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class FlagsPostNotificationMixin(PostFromNotification):
    @property
    def canFlag(self) -> bool:
        return self.attributes.get("canFlag", False)



class FlagsExtension(ExtensionMixin):
    def __init__(self):
        self.name = NAME
        self.author = AUTHOR
        self.id = ID

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromNotification, FlagsPostNotificationMixin)
