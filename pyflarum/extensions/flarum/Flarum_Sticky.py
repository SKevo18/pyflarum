from .. import ExtensionMixin

from ...error_handler import parse_request
from ...flarum.core.discussions import Discussion, DiscussionFromNotification, DiscussionFromBulk


AUTHOR = 'flarum'
NAME = 'sticky'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class StickyDiscussionFromNotificationMixin(DiscussionFromNotification):
    def __stick_or_unstick(self, sticky: bool=True) -> Discussion:
        """
            A function to either stick or unstick the discussion, to prevent repetition.

            Use `stick()` or `unstick()` instead, please.
        """

        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isSticky": sticky
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)


    def stick(self) -> Discussion:
        """
            Stickies a discussion.
        """

        return self.__stick_or_unstick(sticky=True)


    def unstick(self) -> Discussion:
        """
            Unstickies a discussion.
        """

        return self.__stick_or_unstick(sticky=False)



class StickyDiscussionFromBulkMixin(DiscussionFromBulk, DiscussionFromNotification):
    @property
    def isSticky(self) -> bool:
        """
            Whether or not the discussion is stickied.
        """

        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        """
            Whether or not you are able to stick this discussion.
        """

        return self.attributes.get("canSticky", False)



class StickyExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromNotification, StickyDiscussionFromNotificationMixin)
        super().mixin(self, DiscussionFromBulk, StickyDiscussionFromBulkMixin)
