import typing as t

from peewee import *
from datetime import datetime

# TODO: Deal with circular import
#from .posts import DB_Post



class DB_Discussion(Model):
    title = CharField(max_length=200, null=False)
    """The title of the discussion"""
    comment_count = IntegerField(default=0)
    """The comment count of the discussion"""
    participant_count = IntegerField(default=0)
    """The discussion's participant count."""
    post_number_index = IntegerField(default=0)
    # TODO: doc

    created_at = DateTimeField(default=datetime.now)
    """When was this discussion created at"""

    #first_post_id = ForeignKeyField(DB_Post, backref='discussions_fp')
    """The first post of the discussion."""
    #posts: t.Iterable[DB_Post]
    """All posts in the discussion."""


    class Meta:
        table_name = 'discussions'
