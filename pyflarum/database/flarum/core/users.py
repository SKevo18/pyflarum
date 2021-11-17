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
    nickname: str = Field(max_length=100)
    """The user's nickname."""

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

    # -----------
    # Extensions:
    # -----------

    # Flarum Suspend
    suspended_until: t.Optional[datetime] = Field(default=None)
    """Time until the user is suspended. Default is `None`, if not suspended."""

    # Flarum Flags
    read_flags_at: t.Optional[datetime] = Field(default=None)
    """When did the user read flagged discussions & posts? Default is `None`, if unread."""

    # Signature
    signature: t.Text = Field(default='')
    """The user's signature (HTML)"""

    # ???
    age: int = Field(default=0)
    """The age of the user."""
    gender: str = Field(default='', max_length=255)
    """The gender of the user."""

    # FoF Username Request
    # TODO: Figure out how to use JSON field/bytes
    username_history: str = Field(default=b'{}')
    """The username history of the user."""

    # FoF Moderator Warnings:
    strikes: int = Field(default=0)
    """How many strikes does the user have?"""

    # FoF Gamification
    rank: str = Field(default=0, max_length=255)
    """The rank of the user on the leaderboard page."""

    # Money
    money: int = Field(default=0)
    """How much money does the user have?"""

    # FoF Polls
    votes: int = Field(default=0)
    """How many times did the user vote on polls?"""
    last_vote_time: datetime = Field(default=datetime(1, 1, 1)) # why not NULL, extension developer???
    """Time when the user last voted on a poll."""

    # FoF Byobu
    blocks_byobu_pd: bool = Field(default=False)
    """Whether or not the user blocks Byobu's Private Discussion feature."""

    # Profile Cover
    cover: t.Optional[str] = Field(default=None, max_length=150)
    """The file name of the user's profile cover."""


    @property
    def is_suspended(self) -> bool:
        """Whether or not the user is suspended."""

        return self.suspended_until is not None and self.suspended_until > datetime.now()


    @property
    def has_read_flags(self) -> bool:
        """Whether or not the user has EVER read flagged posts & discussions."""

        return self.read_flags_at is not None
