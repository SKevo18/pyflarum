from ...extensions import ExtensionMixin
from ..session import FlarumDatabase

import sqlmodel as sql


class DB_Example(sql.SQLModel):
    __tablename__ = ...



class DB_ExampleFlarumDatabaseMixin(FlarumDatabase):
    def _example(self):
        return self.session.exec(sql.select(DB_Example)).all()



class DB_ExampleExtension(ExtensionMixin):
    AUTHOR = "unknown"
    NAME = "unknown"
    ID = f"{AUTHOR}-{NAME}"

    SOFT_DEPENDENCIES = []
    HARD_DEPENCENDIES = []


    @classmethod
    def get_dependencies(cls):
        return {
            "soft": cls.SOFT_DEPENDENCIES,
            "hard": cls.HARD_DEPENCENDIES
        }


    @classmethod
    def mixin(cls):
        super().mixin(FlarumDatabase, DB_ExampleFlarumDatabaseMixin)
