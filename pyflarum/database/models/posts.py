import typing as t

from peewee import *
from datetime import datetime


from .discussions import DB_Discussion



class DB_Post(Model):
    discussion_id = ForeignKeyField(DB_Discussion, backref='posts')
    """Discussion that this post belongs to."""


    number = IntegerField(default=1)
    """The number/order of the post in the discussion."""

    created_at = DateTimeField(default=datetime.now)
    """When was this post created. Default is now."""

    type = CharField(max_length=100, default='comment')
    """The type of the post. Can be `'comment'` for standard post."""


    content = TextField()
    """The post's content, in HTML."""


    edited_at = DateTimeField(null=True)
    """When was the post edited at?"""

    hidden_at = DateTimeField(null=True)
    """When was the post hidden at?"""


    ip_address = CharField(max_length=45, null=True)
    """The IP address of the user that created the post."""


    is_private = BooleanField(default=False)
    """Whether or not the post is private."""

    is_approved = BooleanField(default=True)
    """Whether or not the post is approved."""


    discussions_fp: t.Iterable[DB_Discussion]
    """First post relationship with discussion."""
