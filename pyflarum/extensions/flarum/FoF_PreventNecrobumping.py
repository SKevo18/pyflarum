from typing import Optional

from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'prevent-necrobumping'
ID = f"{AUTHOR}-{NAME}"



class PreventNecrobumpingDiscussionMixin(DiscussionFromBulk):
    @property
    def fof_prevent_necrobumping(self) -> Optional[int]:
        """
            I have no idea what this does either, sorry.
        """

        return self.attributes.get("fof-prevent-necrobumping", None)



class PreventNecrobumpingExtension(ExtensionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, PreventNecrobumpingDiscussionMixin)
