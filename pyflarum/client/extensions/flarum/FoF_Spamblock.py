from ....extensions import ExtensionMixin

from ...flarum.core.users import UserFromBulk, UserFromNotification
from ....error_handler import parse_request



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
    AUTHOR = 'fof'
    NAME = 'spamblock'


    @classmethod
    def mixin(cls):
        super().mixin(UserFromNotification, SpamblockUserFromNotificationMixin)
        super().mixin(UserFromBulk, SpamblockUserMixin)
