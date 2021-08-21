from .. import ExtensionMixin

from ...flarum.core.discussions import DiscussionFromNotification
from ...flarum.core.posts import Post, PostFromNotification

from ...error_handler import FlarumError, parse_request


AUTHOR = 'flarum'
NAME = 'approval'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class ApprovalDiscussionFromNotificationMixin(DiscussionFromNotification):
    @property
    def isApproved(self) -> bool:
        """
            Whether or not the discussion is approved.
        """

        return self.attributes.get("isApproved", False)



class ApprovalPostFromNotificationMixin(PostFromNotification):
    @property
    def isApproved(self) -> bool:
        """
            Whether or not the post is approved.
        """

        return self.attributes.get("isApproved", False)


    @property
    def canApprove(self) -> bool:
        """
            Whether or not you are able to approve the post
        """

        return self.attributes.get("canApprove", False)


    def approve(self, force: bool=False) -> Post:
        """
            Approve the post. Use `force` to approve despite the post being approved already, and do not raise `FlarumError`.
        """

        if self.isApproved and not force:
            raise FlarumError(f'Post ID {self.id} is already approved. Use `force = True` to bypass this error.')


        patch_data = {
            "data": {
                "type": "posts",
                "id": self.id,
                "attributes": {
                    "isApproved": True
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)



class ApprovalExtension(ExtensionMixin):
    """
        https://packagist.org/packages/flarum/approval
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromNotification, ApprovalDiscussionFromNotificationMixin)
        super().mixin(self, PostFromNotification, ApprovalPostFromNotificationMixin)
