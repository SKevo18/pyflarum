from typing import Generator


class FlarumGroup(dict):
    def __init__(self, *args):
        dict.__init__(self, *args)
    

    # Main:
    @property
    def id(self) -> str:
        try:
            return self['id']
        except KeyError:
            return None

    @property
    def type(self) -> str:
        try:
            return self['type']
        except KeyError:
            return None
    
    @property
    def nameSingular(self) -> str:
        try:
            return self['attributes']['nameSingular']
        except KeyError:
            return None

    @property
    def namePlural(self) -> str:
        try:
            return self['attributes']['namePlural']
        except KeyError:
            return None
    
    @property
    def color(self) -> str:
        try:
            return self['attributes']['color']
        except KeyError:
            return None

    @property
    def icon(self) -> str:
        try:
            return self['attributes']['icon']
        except KeyError:
            return None

    @property
    def isHidden(self) -> bool:
        try:
            return self['attributes']['isHidden']
        except KeyError:
            return None



class FlarumGroups(dict):
    def __init__(self, *args):
        dict.__init__(self, *args)


    @property
    def rawData(self) -> dict:
        try:
            return self
        except KeyError:
            return None

    @property
    def all_groups(self) -> Generator[FlarumGroup, None, None]:
        try:
            for data in self['data']:
                group = FlarumGroup(data)
                yield group
        except KeyError:
            return None
