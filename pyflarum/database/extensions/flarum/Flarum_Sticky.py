import typing as t

from ....extensions import ExtensionMixin
from ...session import FlarumDatabase

from peewee import *
from peewee import ModelSelect

from ...flarum.core.discussions import DB_Discussion


AUTHOR = "flarum"
NAME = "sticky"
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class DB_StickyDiscussionMixin(DB_Discussion):
    is_sticky = BooleanField(default=False) # type: BooleanField | bool


    class Meta:
        table_name = 'discussions'



class DB_StickyFlarumDatabaseMixin(FlarumDatabase):
    def get_sticky_discussions(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_StickyDiscussionMixin], ModelSelect]:
        _query = DB_StickyDiscussionMixin.select(*fields).where(DB_StickyDiscussionMixin.is_sticky == True) # type: ModelSelect

        return _query if query else self._execute_query(_query)



class DB_StickyExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumDatabase, DB_StickyFlarumDatabaseMixin)
