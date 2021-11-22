import typing as t

if t.TYPE_CHECKING:
    from .other import DB_AccessToken, DB_APIKey
    from .discussions import DB_Discussion

from datetime import datetime

from sqlmodel import SQLModel, Field, Relationship, Column, JSON
from ..extensions.tags import DB_Tag, DB_TagUser



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
    """The file name of user's avatar. Avatars are located in the `public/assets/avatars` directory of your forum root."""
    preferences: t.Dict[str, bool] = Field(sa_column=Column(JSON), default={"notify_discussionRenamed_alert": True,"notify_postLiked_alert": True,"notify_discussionLocked_alert": True,"notify_postMentioned_alert": True,"notify_postMentioned_email": False,"notify_userMentioned_alert": True,"notify_userMentioned_email": False,"notify_newPost_alert": True, "notify_newPost_email": True, "notify_userSuspended_alert": True, "notify_userUnsuspended_alert": True, "followAfterReply": True, "discloseOnline": True, "indexProfile": True, "locale": None })
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

    tags: t.List['DB_Tag'] = Relationship(back_populates='users', link_model=DB_TagUser)
    """Tags that have relationship with this user."""
