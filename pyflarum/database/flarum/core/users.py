import typing as t
if t.TYPE_CHECKING:
    from datetime import datetime

from peewee import *
from ...models import BlobJSONField



class DB_User(Model):
    username = CharField(max_length=100) # type: CharField | str
    """The user's username."""
    email = CharField(max_length=150) # type: CharField | str
    """The user's E-mail address."""
    is_email_confirmed = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the user confirmed their E-mail address."""
    password = CharField(max_length=100) # type: CharField | str
    """The user's password (bcrypt encrypted)."""

    avatar_url = CharField(max_length=100, null=True) # type: CharField | str
    """The user's avatar URL."""
    preferences = BlobJSONField(null=True) # type: BlobJSONField | dict
    """The user's preferences (e. g.: for notifications)."""

    joined_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When did the user join the forum."""
    last_seen_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the user last seen at."""
    marked_all_as_read_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When did the user mark all discussions as read."""
    read_notifications_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When did the user read their notifications."""

    discussion_count = IntegerField(default=0) # type: IntegerField | int
    """The user's discussion count."""
    comment_count = IntegerField(default=0) # type: IntegerField | int
    """The user's comment (post) count."""


    class Meta:
        table_name = 'users'
