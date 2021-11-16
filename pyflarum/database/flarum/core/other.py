import typing as t

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime

from .users import DB_User



class DB_AccessToken(SQLModel, table=True):
    __tablename__ = 'access_tokens'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the access token. This is handled by the database."""

    token: str = Field(max_length=40, sa_column_kwargs={'unique': True})
    """The unique access token."""
    user_id: t.Optional[int] = Field(default=None, foreign_key="users.id")
    user: DB_User = Relationship(back_populates="access_tokens")
    """To what user does this token belong to."""

    last_activity_at: datetime
    """When was the access token last active."""
    created_at: datetime
    """When was this token created at?"""

    type: str = Field(max_length=100)
    """The type of the access token (example: `'session_remember'`)"""

    title: t.Optional[str] = Field(max_length=150)
    """The title of the access token."""
    last_ip_address: t.Optional[str] = Field(max_length=45)
    """The last IP address associated with this access token."""
    last_user_agent: t.Optional[str] = Field(max_length=255)
    """The last browser's user agent that used this token."""



class DB_APIKey(SQLModel, table=True):
    __tablename__ = 'api_keys'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the API key. This is handled by the database."""

    key: str = Field(max_length=100)
    """The unique API key."""

    allowedips: t.Optional[str] = Field(max_length=255)
    """The IP addresses that are allowed to use this API key."""
    scopes: t.Optional[str] = Field(max_length=255)
    """The scopes that this API key has access to."""
    user_id: t.Optional[int] = Field(default=None, foreign_key="users.id")
    user: DB_User = Relationship(back_populates="api_keys")
    """As what user to perform actions when using this API key."""

    created_at: datetime = Field(default=datetime.utcnow())
    """When was this API key created at?"""
    last_activity_at: t.Optional[datetime]
    """When was the API key last active?"""
