from .. import ExtensionMixin

from ...flarum.core.users import User, UserFromBulk, UserFromNotification
from ...error_handler import FlarumError, parse_request


AUTHOR = 'fof'
NAME = 'spamblock'
ID = f"{AUTHOR}-{NAME}"



class SpamblockUserFromNotificationMixin(UserFromNotification):
    def spamblock(self) -> bool:
        raw = self.user.session.post(f"{self.user.api_urls['users']}/{self.id}/spamblock")
        parse_request(raw)

        return True



class SpamblockUserMixin(User, UserFromBulk, SpamblockUserFromNotificationMixin):
    @property
    def canSpamblock(self) -> bool:
        return self.attributes.get("canSpamblock", False)



class SpamblockExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, UserFromNotification, SpamblockUserFromNotificationMixin)
        super().mixin(self, UserFromBulk, SpamblockUserMixin)
