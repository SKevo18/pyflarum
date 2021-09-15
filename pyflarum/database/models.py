import json

from peewee import *



class BlobJSONField(BlobField):
    def python_value(self, value):
        if value is not None:
            return json.loads(value)
