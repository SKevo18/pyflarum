import typing as t
if t.TYPE_CHECKING:
    from .posts import DB_Post

from .users import DB_User

from peewee import *
from datetime import datetime



class DB_Discussion(Model):
    id: t.Union[AutoField, int]
    """The ID of the discussion."""
    title = CharField(max_length=200, null=False) # type: CharField | str
    """The title of the discussion"""
    comment_count = IntegerField(default=0) # type: IntegerField | int
    """The comment count of the discussion"""
    participant_count = IntegerField(default=0) # type: IntegerField | int
    """The discussion's participant count."""
    post_number_index = IntegerField(default=0) # type: IntegerField | int
    # TODO

    created_at = DateTimeField(default=datetime.now) # type: DateTimeField | datetime
    """When was this discussion created at"""

    user = ForeignKeyField(DB_User, backref='discussions', column_name='user_id') # type: ForeignKeyField | DB_User
    """The user that made the discussion."""
    author = user
    first_post = DeferredForeignKey(r'DB_Post', column_name='first_post_id') # type: DeferredForeignKey | DB_Post
    """The first post of the discussion."""
    posts: t.Iterable['DB_Post']
    """All posts in the discussion."""

    last_posted_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the last post in this discussion made."""
    last_posted_user = ForeignKeyField(DB_User, column_name='last_posted_user_id', null=True) # type: ForeignKeyField | DB_User
    """The user that last posted in the discussion."""
    last_post = DeferredForeignKey(r'DB_Post', column_name='last_post_id', null=True) # type: DeferredForeignKey | DB_Post
    """The last post in the discussion."""
    last_post_number = IntegerField(null=True) # type: IntegerField | int

    hidden_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was this discussion hidden at? `None`/`NULL` means that it is not hidden."""
    hidden_user = ForeignKeyField(DB_User, column_name='hidden_user_id', null=True) # type: ForeignKeyField | DB_User
    """The user that hid the discussion."""

    slug = CharField() # type: CharField | str
    """The slug of the discussion."""

    is_private = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the discussion is private."""


    @property
    def uri(self):
        return f"/d/{self.id}-{self.slug}"


    @property
    def is_hidden(self):
        return self.hidden_at is None


    class Meta:
        table_name = 'discussions'



class DB_DiscussionUser(Model):
    pass
