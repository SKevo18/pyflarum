from ....extensions import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromBulk
from ...flarum.core.users import UserFromBulk



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
    AUTHOR = 'fof'
    NAME = 'byobu'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, ByobuDiscussionMixin)
        super().mixin(UserFromBulk, ByobuUserMixin)
