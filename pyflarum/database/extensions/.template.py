from ...extensions import ExtensionMixin
from ..session import FlarumDatabaseSession

from peewee import *


AUTHOR = "unknown"
NAME = "unknown"
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class DB_Example(Model):
    ...

    class Meta:
        table_name = ...



class DB_ExampleFlarumDatabaseMixin(FlarumDatabaseSession):
    def _example(self) -> ...:
        query = DB_Example.select()

        return self._execute_query(query)



class DB_ExampleExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumDatabaseSession, DB_ExampleFlarumDatabaseMixin)
