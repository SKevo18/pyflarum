import typing as t

from peewee import *

from .models.discussions import DB_Discussion
from .models.posts import DB_Post



class FlarumDatabase:
    def __init__(self, database: Database, extensions: t.Optional[t.Iterable]=None):
        self.database = database


    def get_discussions(self, *fields) -> t.Iterator[DB_Discussion]:
        with self.database.atomic():
            return (DB_Discussion.select(*fields).execute(self.database))


    def get_posts(self, *fields) -> t.Iterator[DB_Post]:
        with self.database.atomic():
            return (DB_Post.select(*fields).execute(self.database))
