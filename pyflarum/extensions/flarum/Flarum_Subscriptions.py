from typing import Literal

from .. import ExtensionMixin

from ...flarum.core.discussions import Discussion, DiscussionFromNotification, DiscussionFromBulk

from ...error_handler import parse_request


AUTHOR = 'flarum'
NAME = 'subscriptions'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class SubscriptionsDiscussionFromNotificationMixin(DiscussionFromNotification):
    def __change_subscription_state(self, state: Literal['following', 'ignoring', None]):
        post_data = {
            "data": {
                "type": "discussions",
                "id": "15",
                "attributes": {
                    "subscription": state
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=post_data)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)
    

    def follow(self):
        return self.__change_subscription_state(state='following')


    def unfollow(self):
        return self.__change_subscription_state(state=None)


    def ignore(self):
        return self.__change_subscription_state(state='ignore')


class SubscriptionsDiscussionFromBulkMixin(DiscussionFromBulk, SubscriptionsDiscussionFromNotificationMixin):
    @property
    def subscription(self) -> bool:
        return self.attributes.get("subscription", None)



class SubscriptionsExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromNotification, SubscriptionsDiscussionFromNotificationMixin)
        super().mixin(self, DiscussionFromBulk, SubscriptionsDiscussionFromBulkMixin)
