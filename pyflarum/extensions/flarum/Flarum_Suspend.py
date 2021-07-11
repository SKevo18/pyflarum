from typing import Optional

from datetime import datetime, timedelta

from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk
from ...error_handler import parse_request
from ...datetime_conversions import datetime_to_flarum, flarum_to_datetime


class SuspendUserMixin(UserFromBulk):
    @property
    def canSuspend(self) -> bool:
        return self.attributes.get("canSuspend", False)


    @property
    def suspendedUntil(self) -> bool:
        raw = self.attributes.get("suspendedUntil", None)

        return flarum_to_datetime(raw)


    def suspend(self, suspended_until: Optional[datetime]=None, suspended_for: Optional[timedelta]=None):
        if suspended_until:
            until = datetime_to_flarum(suspended_until)

        else:
            if suspended_for:
                now = datetime.now()
                raw_until = now + suspended_for

                until = datetime_to_flarum(raw_until)

            else:
                until = datetime_to_flarum(datetime(2069, 2, 6))


        post_data = {
            "data": {
                "type": "users",
                "id": "3",
                "attributes": {
                    "suspendedUntil": until
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['users']}/{self.id}", json=post_data)
        json = parse_request(raw)

        return UserFromBulk(user=self.user, _fetched_data=json)




class SuspendExtension(ExtensionMixin, SuspendUserMixin):
    def mixin(self):
        super().mixin(self, UserFromBulk, SuspendUserMixin)
