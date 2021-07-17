from . import ExtensionMixin
from ..session import FlarumUser


AUTHOR = "unknown"
NAME = "unknown"
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class ExampleMixin(FlarumUser):
    @property
    def __example(self):
        return "Example"



class ExampleExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumUser, ExampleMixin)
