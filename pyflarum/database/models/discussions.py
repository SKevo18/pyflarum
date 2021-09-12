from peewee import *


class Discussion(Model):
    title = CharField(max_length=200, null=False)
    comment_count = IntegerField(default=0)
    participant_count = IntegerField(default=0)
