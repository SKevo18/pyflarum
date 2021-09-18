import typing as t

from ....extensions import ExtensionMixin
from ...session import FlarumDatabaseSession

from peewee import *


AUTHOR = 'malago'
NAME = 'achievements'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class DB_Achievement(Model):
    name = CharField(max_length=200) # type: CharField | str
    """The name of the achievement"""
    description = TextField() # type: TextField | str
    """The achievement's description."""

    computation	= CharField(max_length=100) # type: CharField | str
    """idk"""
    points = IntegerField(default=0) # type: IntegerField | int
    """How many points does the achievement give to an user?"""

    image = CharField() # type: CharField | str
    """The image for the achievement."""
    rectangle = CharField(max_length=100) # type: CharField | str
    """idk"""

    active = BooleanField(default=1) # type: BooleanField | bool
    """Whether or not the achievement is active."""
    hidden = BooleanField(default=0) # type: BooleanField | bool
    """Whether or not the achievement is hidden."""


    class Meta:
        table_name = 'achievements'



class DB_AchievementsFlarumDatabaseMixin(FlarumDatabaseSession):
    def get_achievements(self, *fields) -> t.Iterator[DB_Achievement]:
        query = DB_Achievement.select(*fields)

        return self._execute_query(query)



class DB_AchievementsExtension(ExtensionMixin):
    MODELS = [DB_Achievement]

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumDatabaseSession, DB_AchievementsFlarumDatabaseMixin)
