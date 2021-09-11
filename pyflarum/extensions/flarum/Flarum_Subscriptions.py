import typing as t

from .. import ExtensionMixin

from ...flarum.core.discussions import Discussion, DiscussionFromNotification, DiscussionFromBulk

from ...error_handler import parse_request


AUTHOR = 'flarum'
NAME = 'subscriptions'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class SubscriptionsDiscussionFromNotificationMixin(DiscussionFromNotification):
    def __change_subscription_state(self, state: t.Optional['t.Literal["following", "ignoring"]']):
        """
            Changes the subscription state of a discussion.

            This function is intended to prevent code repetition - you are
            supposed to be using `follow()`, `unfollow()` or `ignore()`.
        """

        post_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "subscription": state
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=post_data)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)
    

    def follow(self):
        """
            Follow the discussion and be notified of all new activity.
        """

        return self.__change_subscription_state(state='following')


    def unfollow(self):
        """
            Unfollow the discussion, but be notified when someone mentions you.
        """

        return self.__change_subscription_state(state=None)


    def ignore(self):
        """
            Ignore the discussion, never be mentioned.

            Note that this will also hide the discussion from `Discussions`.
            Currently, the only ways to access ignored Flarum discussions that I am aware of are:
            1. Accessing the discussion directly (by ID).
            2. Using `pyflarum.flarum.core.filters.Filter` (e. g. `Filter(query="is:ignored")`).
        """
        return self.__change_subscription_state(state='ignore')



class SubscriptionsDiscussionFromBulkMixin(DiscussionFromBulk, SubscriptionsDiscussionFromNotificationMixin):
    @property
    def subscription(self) -> t.Optional['t.Literal["following", "ignoring"]']:
        """
            Get the current subscription state of the discussion.
        """

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
