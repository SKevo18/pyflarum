import typing as t

from datetime import datetime, timedelta

from ....extensions import ExtensionMixin

from ...flarum.core.users import User, UserFromBulk
from ....error_handler import parse_request, FlarumError
from ....datetime_conversions import datetime_to_flarum, flarum_to_datetime



class SuspendUserMixin(UserFromBulk):
    @property
    def canSuspend(self) -> bool:
        return self.attributes.get("canSuspend", False)


    @property
    def suspendedUntil(self):
        raw = self.attributes.get("suspendedUntil", None)

        return flarum_to_datetime(raw)


    def suspend(self, suspended_until: t.Optional[datetime]=None, suspended_for: t.Optional[timedelta]=None) -> User:
        if suspended_until:
            until = suspended_until

        else:
            if suspended_for:
                raw_until = datetime.now() + suspended_for
                until = raw_until

            else:
                until = datetime(6669, 2, 6)


        post_data = {
            "data": {
                "type": "users",
                "id": "3",
                "attributes": {
                    "suspendedUntil": datetime_to_flarum(until)
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['users']}/{self.id}", json=post_data)
        json = parse_request(raw)

        if json is None:
            raise FlarumError(f"The JSON response was empty while suspending user ID `{self.id}`.")

        return User(user=self.user, _fetched_data=json)



class SuspendExtension(ExtensionMixin):
    AUTHOR = 'flarum'
    NAME = 'suspend'


    @classmethod
    def mixin(cls):
        super().mixin(UserFromBulk, SuspendUserMixin)
