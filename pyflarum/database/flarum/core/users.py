import typing as t
if t.TYPE_CHECKING:
    from .other import DB_AccessToken, DB_APIKey
    from .discussions import DB_Discussion

from datetime import datetime

from sqlmodel import SQLModel, Field, Relationship



class DB_User(SQLModel, table=True):
    __tablename__ = 'users'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the user. This is handled by the database."""

    username: str = Field(max_length=100, sa_column_kwargs={"unique": True})
    """The user's username."""

    email: str = Field(max_length=150, sa_column_kwargs={"unique": True})
    """The user's E-mail address."""
    is_email_confirmed: bool = Field(default=False)
    """Whether or not the user confirmed their E-mail address."""
    password: str = Field(max_length=100)
    """The user's password (bcrypted)."""

    avatar_url: t.Optional[str] = Field(max_length=100)
    """The user's avatar URL."""
    preferences: str = Field(default='{}')
    """The user's preferences (e. g.: for notifications)."""

    joined_at: t.Optional[datetime] = Field(default=None)
    """When did the user join the forum."""
    last_seen_at: t.Optional[datetime] = Field(default=None)
    """When was the user last seen at."""
    marked_all_as_read_at: t.Optional[datetime] = Field(default=None)
    """When did the user mark all discussions as read."""
    read_notifications_at: t.Optional[datetime] = Field(default=None)
    """When did the user read their notifications."""

    discussion_count: int = Field(default=0)
    """The user's discussion count."""
    comment_count: int = Field(default=0)
    """The user's comment (post) count."""

    access_tokens: t.List['DB_AccessToken'] = Relationship(back_populates='user')
    """List of access tokens belonging to this user."""
    api_keys: t.List['DB_APIKey'] = Relationship(back_populates='user')
    """List of API keys that perform actions on behalf of this user."""
    discussions: t.List['DB_Discussion'] = Relationship(back_populates='author')
    """List of discussions that this user made."""
