import typing as t

from peewee import *
from datetime import datetime

from .discussions import DB_Discussion



class DB_Post(Model):
    discussion_id = ForeignKeyField(DB_Discussion, backref='posts') # type: ForeignKeyField | DB_Discussion
    """Discussion that this post belongs to."""

    number = IntegerField(default=1) # type: IntegerField | int
    """The number/order of the post in the discussion."""
    created_at = DateTimeField(default=datetime.now) # type: DateTimeField | datetime
    """When was this post created. Default is now."""
    type = CharField(max_length=100, default='comment') # type: CharField | str
    """The type of the post. Can be `'comment'` for standard post."""

    content = TextField() # type: TextField | str
    """The post's content, in HTML."""

    edited_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the post edited at?"""
    hidden_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the post hidden at?"""

    ip_address = CharField(max_length=45, null=True) # type: CharField | str
    """The IP address of the user that created the post."""

    is_private = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the post is private."""
    is_approved = BooleanField(default=True) # type: BooleanField | bool
    """Whether or not the post is approved."""

    discussions_fp: t.Iterable[DB_Discussion]
    """First post relationship with discussion."""


    class Meta:
        table_name = 'posts'
