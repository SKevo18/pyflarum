import typing as t

if t.TYPE_CHECKING:
    from ..core.users import DB_User

from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime

from .discussions import DB_Discussion
from ..extensions.likes import DB_PostLikes



class DB_Post(SQLModel, table=True):
    __tablename__ = 'posts'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the post. This is handled by the database."""

    discussion_id: int = Field(foreign_key='discussions.id')
    discussion: t.Optional[DB_Discussion] = Relationship(back_populates='posts')
    """Discussion that this post belongs to."""

    number: int = Field(default=1)
    """The number/order of the post in the discussion."""
    created_at: datetime = Field(default=datetime.utcnow())
    """When was this post created. Default is now."""
    type: str = Field(max_length=100, default='comment')
    """The type of the post. Can be `'comment'` for standard post."""

    content: t.Text
    """The post's content, in HTML."""

    edited_at: t.Optional[datetime]
    """When was the post edited at?"""
    hidden_at: t.Optional[datetime]
    """When was the post hidden at?"""

    ip_address: t.Optional[str] = Field(max_length=45)
    """The IP address of the user that created the post."""

    is_private: bool = Field(default=False)
    """Whether or not the post is private."""
    is_approved: bool = Field(default=True)
    """Whether or not the post is approved."""


    users_liked: t.List['DB_User'] = Relationship(back_populates='liked_posts', link_model=DB_PostLikes)
    """The list of users that liked this post."""
