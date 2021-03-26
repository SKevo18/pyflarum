from pyflarum.classes.extensions.Flarum_Tags import FlarumTagUserMixin


# TODO: Create 'FlarumSelfUser', inheriting this + self user properties only
class FlarumUser(FlarumTagUserMixin, dict):
    def __init__(self, *args, **kwargs):
        dict.__init__(self, *args, **kwargs)


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


    # Attributes:
    @property
    def attributes(self) -> dict:
        try:
            return self['attributes']
        except KeyError:
            return None

    @property
    def username(self) -> str:
        try:
            return self.attributes['username']
        except KeyError:
            return None

    @property
    def displayName(self) -> str:
        try:
            return self.attributes['displayName']
        except KeyError:
            return None

    @property
    def avatarUrl(self) -> str:
        try:
            return self.attributes['avatarUrl']
        except KeyError:
            return None

    @property
    def slug(self) -> str:
        try:
            return self.attributes['slug']
        except KeyError:
            return None
