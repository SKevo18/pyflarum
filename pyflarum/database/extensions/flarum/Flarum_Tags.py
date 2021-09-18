import typing as t
if t.TYPE_CHECKING:
    from datetime import datetime

from peewee import *

from ....extensions import ExtensionMixin
from ...session import FlarumDatabaseSession

from ...flarum.core.discussions import DB_Discussion
from ...flarum.core.users import DB_User



AUTHOR = 'flarum'
NAME = 'tags'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class DB_Tag(Model):
    name = CharField(max_length=100) # type: CharField | str
    """The tag's name."""
    slug = CharField(max_length=100) # type: CharField | str
    """The tag's slug."""

    description = TextField(null=True) # type: TextField | str
    """Tag's description."""
    color = CharField(max_length=50, null=True) # type: CharField | str
    """The HEX color code for the tag's color."""

    background_path = CharField(max_length=100, null=True) # type: CharField | str
    """The background path for the tag."""
    background_mode = CharField(max_length=100, null=True) # type: CharField | str
    """The background mode for the tag."""

    position = IntegerField(null=True)
    """The tag's position/order in the tag list."""
    parent_tag = ForeignKeyField('self', null=True, backref='children', column_name='parent_id') # type: ForeignKeyField | DB_Tag
    """The tag's parent tag, if it's a secondary tag."""
    default_sort = CharField(max_length=50, null=True) # type: CharField | str
    """The tag's default sorting behaviour."""

    is_restricted = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the tag is restricted."""
    is_hidden = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not the tag is hidden."""

    discussion_count = IntegerField(default=0) # type: IntegerField | int
    """The tag's discussion count."""

    last_posted_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the last discussion that has the tag posted at?"""
    last_posted_discussion = ForeignKeyField(DB_Discussion, null=True, column_name='last_posted_discussion_id') # type: ForeignKeyField | DB_Discussion
    """The discussion that was last posted in the tag."""
    last_posted_user = ForeignKeyField(DB_User, null=True, column_name='last_posted_user_id') # type: ForeignKeyField | DB_User
    """The user that last posted in the tag."""

    icon = CharField(max_length=100, null=True) # type: CharField | str
    """The tag's icon."""


    class Meta:
        table_name = 'tags'



class DB_DiscussionTag(Model):
    discussion = ForeignKeyField(DB_Discussion, column_name='discussion_id') # type: ForeignKeyField | DB_Discussion
    """The discussion that has this `tag`."""
    tag = ForeignKeyField(DB_Tag, column_name='tag_id') # type: ForeignKeyField | DB_Tag
    """The tag that belongs to this `discussion`."""


    class Meta:
        table_name = 'discussion_tag'



class DB_TagUser(Model):
    user = ForeignKeyField(DB_User, column_name='user_id') # type: ForeignKeyField | DB_User
    """The user of `tag` relationship."""
    tag = ForeignKeyField(DB_Tag, column_name='tag_id') # type: ForeignKeyField | DB_Tag
    """The tag of `user` relationship."""

    marked_as_read_at = DateTimeField(null=True) # type: DateTimeField | datetime
    """When was the tag last marked as read by the user?"""
    is_hidden = BooleanField(default=False) # type: BooleanField | bool
    """Whether or not something is hidden, idk.""" # TODO


    class Meta:
        table_name = 'tag_user'



class DB_TagsFlarumDatabaseMixin(FlarumDatabaseSession):
    def get_tags(self, *fields) -> t.Iterator[DB_Tag]:
        query = DB_Tag.select(*fields)

        return self._execute_query(query)



class DB_TagsExtension(ExtensionMixin):
    MODELS = [
        DB_Tag,
        DB_TagUser,
        DB_DiscussionTag
    ]

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumDatabaseSession, DB_TagsFlarumDatabaseMixin)
