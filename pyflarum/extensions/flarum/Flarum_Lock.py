from .. import ExtensionMixin

from ...error_handler import parse_request
from ...flarum.core.discussions import Discussion, DiscussionFromBulk, DiscussionFromNotification


AUTHOR = 'flarum'
NAME = 'lock'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class LockDiscussionFromNotificationMixin(DiscussionFromNotification):
    def __lock_or_unlock(self, locked: bool=True) -> Discussion:
        """
            A function to either lock or unlock the post, to prevent repetition.

            Use `lock()` or `unlock()` instead, please.
        """

        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isLocked": locked
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)


    def lock(self) -> Discussion:
        """
            Locks the discussion.
        """

        return self.__lock_or_unlock(locked=True)


    def unlock(self) -> Discussion:
        """
            Unlocks the discussion.
        """

        return self.__lock_or_unlock(locked=False)



class LockDiscussionFromBulkMixin(DiscussionFromBulk, LockDiscussionFromNotificationMixin):
    @property
    def isLocked(self) -> bool:
        """
            Whether or not the discussion is locked.
        """

        return self.attributes.get("isLocked", False)


    @property
    def canLock(self) -> bool:
        """
            Whether or not you are able to lock the discussion.
        """

        return self.attributes.get("canLock", False)



class LockExtension(ExtensionMixin):
    """
        https://packagist.org/packages/flarum/lock
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromNotification, LockDiscussionFromNotificationMixin)
        super().mixin(self, DiscussionFromBulk, LockDiscussionFromBulkMixin)
