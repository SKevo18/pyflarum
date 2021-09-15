import typing as t
if t.TYPE_CHECKING:
    from datetime import datetime

from peewee import *

from .users import DB_User



class DB_AccessToken(Model):
    token = CharField(max_length=40, unique=True)
    """The unique access token."""
    user_id = ForeignKeyField(DB_User, backref='tokens', on_delete='CASCADE', on_update='RESTRICT') # type: ForeignKeyField | DB_User
    """To what user does this token belong to."""

    last_activity_at = DateTimeField() # type: DateTimeField | datetime
    """When was the access token last active."""
    created_at = DateTimeField() # type: DateTimeField | datetime
    """When was this token created at?"""

    type = CharField(max_length=100) # type: CharField | str
    """The type of the access token (example: `'session_remember'`)"""

    title = CharField(max_length=150, null=True) # type: CharField | str
    # TODO: doc
    last_ip_address = CharField(max_length=45, null=True) # type: CharField | str
    """The last IP address associated with this access token."""
    last_user_agent = CharField(max_length=255, null=True) # type: CharField | str
    """The last browser's user agent that used this token."""


    class Meta:
        table_name = 'access_tokens'
