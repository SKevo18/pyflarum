from typing import Optional, TYPE_CHECKING
if TYPE_CHECKING:
    from ...session import FlarumUser

from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


class NecrobumpingDiscussionMixin(DiscussionFromBulk):
    @property
    def fof_prevent_necrobumping(self) -> Optional[int]:
        """
            I have no idea what this does either, sorry.
        """

        return self.attributes.get("fof-prevent-necrobumping", None)



class NecrobumpingExtension(ExtensionMixin, NecrobumpingDiscussionMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, DiscussionFromBulk, NecrobumpingDiscussionMixin)
