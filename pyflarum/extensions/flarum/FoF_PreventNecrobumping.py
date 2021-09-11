import typing as t

from .. import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk


AUTHOR = 'fof'
NAME = 'prevent-necrobumping'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class PreventNecrobumpingDiscussionMixin(DiscussionFromBulk):
    @property
    def fof_prevent_necrobumping(self) -> t.Optional[int]:
        """
            I have no idea what this does either, sorry.
        """

        return self.attributes.get("fof-prevent-necrobumping", None)



class PreventNecrobumpingExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, DiscussionFromBulk, PreventNecrobumpingDiscussionMixin)
