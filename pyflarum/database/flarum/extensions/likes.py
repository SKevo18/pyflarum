import typing as t

if t.TYPE_CHECKING:
    from ..core.posts import DB_Post
    from ..core.users import DB_User

from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship



class DB_PostLikes(SQLModel, table=True):
    __tablename__ = 'post_likes'

    post_id: t.Optional[int] = Field(default=None, primary_key=True, foreign_key='posts.id')
    """The ID of the post that the user liked."""
    post: t.Optional['DB_Post'] = Relationship(back_populates='users_liked')
    """The post that the user liked."""
    user_id: t.Optional[int] = Field(default=None, primary_key=True, foreign_key='user.id')
    """The ID of the user that liked the post."""
    user: t.Optional['DB_User'] = Relationship(back_populates='liked_posts')
    """The user that liked the post."""

    created_at: t.Optional[datetime]
    """The datetime when was the post liked."""
