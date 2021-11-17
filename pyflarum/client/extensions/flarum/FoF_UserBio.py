import typing as t
if t.TYPE_CHECKING:
    from ...custom_types import AnyUser
    from ...flarum.core.users import User

from ....extensions import ExtensionMixin
from ...session import FlarumUser

from ...flarum.core.forum import Forum
from ...flarum.core.users import UserFromBulk
from ....error_handler import parse_request



class UserBioForumMixin(Forum):
    @property
    def max_bio_length(self) -> bool:
        return self.attributes.get("fof-user-bio.maxLength", False)



class UserBioFlarumUserMixin(FlarumUser):
    def update_user_bio(self, bio: t.Optional[str]=None, user: t.Optional['AnyUser']=None) -> t.Union['FlarumUser', 'User']:
        id = user.id if user else self.data.id

        post_data = {
            "data": {
                "type": "users",
                "id": self.data.id,
                "attributes": {
                    "bio": bio if bio else ""
                }
            }
        }

        raw = self.session.patch(f"{self.api_urls['users']}/{id}", json=post_data)
        json = parse_request(raw)


        return self._update_user_data(new_data=json)



class UserBioUserFromBulkMixin(UserFromBulk):
    @property
    def bio(self) -> t.Optional[str]:
        return self.attributes.get("bio", None)


    @property
    def canViewBio(self) -> bool:
        return self.attributes.get("canViewBio", False)


    @property
    def canEditBio(self) -> bool:
        return self.attributes.get("canEditBio", False)


class UserBioExtension(ExtensionMixin):
    AUTHOR = 'fof'
    NAME = 'user-bio'


    @classmethod
    def mixin(cls):
        super().mixin(FlarumUser, UserBioFlarumUserMixin)
        super().mixin(UserFromBulk, UserBioUserFromBulkMixin)
        super().mixin(Forum, UserBioForumMixin)
