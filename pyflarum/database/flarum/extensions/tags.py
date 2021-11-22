import typing as t

if t.TYPE_CHECKING:
    from ..core.discussions import DB_Discussion
    from ..core.users import DB_User

from datetime import datetime

from sqlmodel import SQLModel, Field, Relationship



class DB_TagUser(SQLModel, table=True):
    """
        Represents a tag-to-user relationship in the database.
    """

    __tablename__ = 'tag_user'
    user_id: t.Optional[int] = Field(default=None, primary_key=True, foreign_key='users.id')
    """The ID of the user."""
    tag_id: t.Optional[int] = Field(default=None, primary_key=True, foreign_key='tags.id')
    """The ID of the tag."""

    marked_as_read_at: t.Optional[datetime]
    """When the user marked the tag as read?"""
    is_hidden: bool = Field(default=False)
    """?"""



class DB_Tag(SQLModel, table=True):
    """
        Represents a tag in the database.
    """

    __tablename__ = 'tags'
    id: t.Optional[int] = Field(default=None, primary_key=True)
    """The ID of the tag. This is handled by the database."""

    name: str = Field(max_length=100)
    """The name of the tag."""
    slug: str = Field(max_length=100)
    """The tag's slug (will be used in URL)."""

    description: t.Optional[t.Text]
    """The description of the tag."""
    color: t.Optional[str] = Field(max_length=50)
    """The tag's color."""

    background_path: t.Optional[str] = Field(max_length=100)
    """?"""
    background_mode: t.Optional[str] = Field(max_length=100)
    """?"""

    position: t.Optional[int]
    """The tag's position in the tag tree."""
    parent_id: t.Optional[int] = Field(default=None, foreign_key='tags.id')
    """The ID of the parent tag."""
    parent_tag: t.Optional['DB_Tag'] = Relationship(back_populates='children')
    """The tag's parent tag."""

    default_sort: t.Optional[str]
    """The default sorting behaviour of the tag."""

    is_restricted: bool = Field(default=False)
    """Whether or not the tag is restricted."""
    is_hidden: bool = Field(default=False)
    """Whether or not the tag is hidden."""

    discussion_count: int = Field(default=0)
    """How many discussions are tagged with this tag?"""

    last_posted_at: t.Optional[datetime]
    """The datetime when was the last discussion posted in this tag."""
    last_posted_discussion_id: t.Optional[int] = Field(default=None, foreign_key='discussions.id')
    """The ID of the last posted discussion in this tag."""
    last_posted_discussion: t.Optional['DB_Discussion'] = Relationship(back_populates='tags')
    """The last posted discussion in this tag."""
    last_posted_user_id: t.Optional[int] = Field(default=None, foreign_key='users.id')
    """The ID of the user that last posted in this tag."""
    last_posted_user: t.Optional['DB_User'] = Relationship(back_populates='tags')
    """The user that last posted in this tag."""

    icon: t.Optional[str] = Field(max_length=100)
    """The [FontAwesome](https://fontawesome.com/v5.15/icons?d=gallery&m=free) icon for the tag."""

    users: t.List['DB_User'] = Relationship(back_populates='tags', link_model=DB_TagUser)
    """Users that have relationship with this tag."""
