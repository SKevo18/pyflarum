from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk, UserFromNotification
from ...error_handler import parse_request


AUTHOR = 'fof'
NAME = 'spamblock'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class SpamblockUserFromNotificationMixin(UserFromNotification):
    def spamblock(self) -> bool:
        raw = self.user.session.post(f"{self.user.api_urls['users']}/{self.id}/spamblock")
        parse_request(raw)

        return True



class SpamblockUserMixin(UserFromBulk, SpamblockUserFromNotificationMixin):
    @property
    def canSpamblock(self) -> bool:
        return self.attributes.get("canSpamblock", False)



class SpamblockExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, UserFromNotification, SpamblockUserFromNotificationMixin)
        super().mixin(self, UserFromBulk, SpamblockUserMixin)
