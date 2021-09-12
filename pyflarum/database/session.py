import typing as t

from peewee import *

from .models.discussions import DB_Discussion
from .models.posts import DB_Post


MODELS = {DB_Discussion, DB_Post} # type: t.Set[Model]



class FlarumDatabase:
    def __init__(self, database: Database, extensions: t.Optional[t.Iterable]=None):
        self.database = database


    def get_discussions(self, *fields) -> t.Iterator[DB_Discussion]:
        with self.database as database:
            return (DB_Discussion.select(*fields).execute(database))
