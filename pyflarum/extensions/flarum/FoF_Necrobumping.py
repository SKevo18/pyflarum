from typing import Optional

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
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, NecrobumpingDiscussionMixin)
