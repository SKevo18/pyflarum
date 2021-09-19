import typing as t

from ....extensions import ExtensionMixin
from ...session import FlarumDatabase

from peewee import *
from peewee import ModelSelect

from ...flarum.core.discussions import DB_Discussion


AUTHOR = "flarum"
NAME = "lock"
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class DB_LockDiscussionMixin(DB_Discussion):
    is_locked = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the discussion is locked."""


    class Meta:
        table_name = 'discussions'



class DB_LockFlarumDatabaseMixin(FlarumDatabase):
    def get_locked_discussions(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_LockDiscussionMixin], ModelSelect]:
        _query = DB_LockDiscussionMixin.select(*fields).where(DB_LockDiscussionMixin.is_locked == True) # type: ModelSelect

        return _query if query else self._execute_query(_query)



class DB_LockExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumDatabase, DB_LockFlarumDatabaseMixin)
