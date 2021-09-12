import typing as t

from peewee import *
from datetime import datetime

from .posts import DB_Post



class DB_Discussion(Model):
    title = CharField(max_length=200, null=False)
    comment_count = IntegerField(default=0)
    participant_count = IntegerField(default=0)
    post_number_index = IntegerField(default=0)

    created_at = DateTimeField(default=datetime.now)

    first_post_id = ForeignKeyField(DB_Post, backref='discussions_fp')

    posts: t.Iterable[DB_Post]
