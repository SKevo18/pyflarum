from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk
from ...flarum.core.users import UserFromBulk


AUTHOR = 'fof'
NAME = 'byobu'
ID = f"{AUTHOR}-{NAME}"



class ByobuDiscussionMixin(DiscussionFromBulk):
    @property
    def canEditRecipients(self) -> bool:
        return self.attributes.get("canEditRecipients", False)


    @property
    def canEditUserRecipients(self) -> bool:
        return self.attributes.get("canEditUserRecipients", False)


    @property
    def canEditGroupRecipients(self) -> bool:
        return self.attributes.get("canEditGroupRecipients", False)


class ByobuUserMixin(UserFromBulk):
    @property
    def blocksPd(self) -> bool:
        return self.attributes.get("blocksPd", False)


    @property
    def cannotBeDirectlyMessaged(self) -> bool:
        return self.attributes.get("cannotBeDirectlyMessaged", False)


class ByobuExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, ByobuDiscussionMixin)
        super().mixin(self, UserFromBulk, ByobuUserMixin)
