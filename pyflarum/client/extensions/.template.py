from ...extensions import ExtensionMixin
from ..session import FlarumUser



class ExampleMixin(FlarumUser):
    def _example(self) -> ...:
        ...



class ExampleExtension(ExtensionMixin):
    AUTHOR = "unknown"
    NAME = "unknown"
    ID = f"{AUTHOR}-{NAME}"

    SOFT_DEPENDENCIES = []
    HARD_DEPENCENDIES = []


    @classmethod
    def mixin(cls):
        super().mixin(FlarumUser, ExampleMixin)
