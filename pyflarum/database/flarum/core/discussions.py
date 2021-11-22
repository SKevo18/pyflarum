import typing as t
if t.TYPE_CHECKING:
    from .posts import DB_Post

from .users import DB_User

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime



class DB_Discussion(SQLModel, table=True):
    __tablename__ = 'discussions'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the discussion. This is handled by the database."""

    title: str = Field(max_length=200)
    """The title of the discussion"""
    slug: str = Field(max_length=255)
    """The discussion's slug."""
    comment_count: int = Field(default=0)
    """The comment count of the discussion"""
    participant_count: int = Field(default=0)
    """The discussion's participant count."""
    post_number_index: int = Field(default=0)
    """The post number index of the discussion."""

    created_at: datetime = Field(default=datetime.utcnow())
    """When was this discussion created at"""

    user_id: t.Optional[int] = Field(default=None, foreign_key="users.id")
    """The discussion's author user ID."""
    author: t.Optional[DB_User] = Relationship(back_populates="discussions")
    """The discussion's author."""

    first_post_id: t.Optional[int] = Field(default=None)
    """The ID of the first post in the discussion."""

    last_posted_at: t.Optional[datetime] = Field(default=None)
    """When was the last post in this discussion made."""
    last_posted_user_id: t.Optional[int] = Field(default=None)
    """The user that last posted in the discussion."""
    last_post_id: t.Optional[int] = Field(default=None)
    """The last post in the discussion."""
    last_post_number: t.Optional[int] = Field(default=None)
    """The number of the last post in the discussion."""

    hidden_at: t.Optional[datetime] = Field(default=None)
    """
        When was this discussion hidden at? `None`/`NULL` means that it is not hidden.
    
        Note: You can also use `DB_Discussion.is_hidden` to check whether or not the discussion is hidden.
    """
    hidden_user_id: t.Optional[int] = Field(default=None)
    """The ID of the user that hid the discussion."""

    is_private: bool = Field(default=False)
    """Whether or not the discussion is private."""

    posts: t.List['DB_Post'] = Relationship(back_populates="discussion")
    """List of posts in the discussion."""

    # Extensions:
    is_locked: bool = Field(default=False)
    """Whether or not the discussion is locked."""
    is_sticky: bool = Field(default=False)
    """Whether or not the discussion is sticky."""



    @property
    def uri(self):
        """
            The URI of the discussion.
        """

        return f"/d/{self.id}-{self.slug}"


    @property
    def is_hidden(self):
        """
            Whether or not the discussion is hidden.
        """

        return self.hidden_at is None
