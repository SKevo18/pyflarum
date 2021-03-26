from typing import Generator

from pyflarum.classes.flarum.FlarumUser import FlarumUser


class FlarumUsers(dict):
    def __init__(self, *args, **kwargs):
        dict.__init__(self, *args, **kwargs)


    @property
    def firstLink(self) -> str:
        try:
            return self['links']['first']
        except KeyError:
            return None
    
    @property
    def nextLink(self) -> str:
        try:
            return self['links']['next']
        except KeyError:
            return None
    
    @property
    def all(self) -> Generator[FlarumUser, None, None]:
        try:
            for data in self['data']:
                user = FlarumUser(data)
                yield user
        except KeyError:
            return None
