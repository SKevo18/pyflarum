import typing as t

from ....extensions import ExtensionMixin
from ...flarum.core.discussions import DiscussionFromBulk



class PreventNecrobumpingDiscussionMixin(DiscussionFromBulk):
    @property
    def fof_prevent_necrobumping(self) -> t.Optional[int]:
        """
            I have no idea what this does either, sorry.
        """

        return self.attributes.get("fof-prevent-necrobumping", None)



class PreventNecrobumpingExtension(ExtensionMixin):
    AUTHOR = 'fof'
    NAME = 'prevent-necrobumping'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromBulk, PreventNecrobumpingDiscussionMixin)
