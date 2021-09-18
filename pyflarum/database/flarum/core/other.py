from peewee import *
from datetime import datetime

from .users import DB_User



class DB_AccessToken(Model):
    token = CharField(max_length=40, unique=True)
    """The unique access token."""
    user = ForeignKeyField(DB_User, backref='tokens', on_delete='CASCADE', on_update='RESTRICT', column_name='user_id') # type: ForeignKeyField | DB_User
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



class DB_APIKey(Model):
    key = CharField(max_length=100) # type: CharField | str

    allowedips = CharField(null=True) # type: CharField | str
    scopes = CharField(null=True) # type: CharField | str
    user = ForeignKeyField(DB_User, backref='api_keys', column_name='user_id') # type: ForeignKeyField | DB_User

    created_at = DateTimeField(default=datetime.now()) # type: DateTimeField | datetime
    last_activity_at = DateTimeField(null=True) # type: DateTimeField | datetime


    class Meta:
        table_name = 'api_keys'
