import typing as t

# Avoid my greatest enemy in Python: circular import:
if t.TYPE_CHECKING:
    from ...session import FlarumUser

from ...error_handler import parse_request
from ..core import BaseFlarumBulkObject, BaseFlarumIndividualObject



class PreparedGroup(BaseFlarumIndividualObject):
    def __init__(self, user: 'FlarumUser', nameSingular: str, namePlural: t.Optional[str]=None, color: t.Optional[str]=None, icon: t.Optional[str]=None, isHidden: bool=False):
        self.user = user

        self.nameSingular = nameSingular
        self.namePlural = (namePlural if namePlural else self.nameSingular)
        self.color = color
        self.icon = icon
        self.isHidden = isHidden

        self.as_json = self.to_dict
        super().__init__(user=self.user, _fetched_data=self.as_json)


    @property
    def to_dict(self) -> dict:
        """
            Converts the group to a `dict`, so that
            it can be sent to the API.

            An extension might add additional data during runtime. This is the
            most basic template that Flarum requires when creating a group.
        """

        data = {
            "data": {
                "type": "groups",
                "attributes": {
                    "nameSingular": self.nameSingular,
                    "namePlural": self.namePlural,
                    "color": self.color,
                    "icon": self.icon,
                    "isHidden": self.isHidden
                }
            }
        }

        return data


    def create(self) -> 'Group':
        """
            Creates the group. Returns the created `Group`.
        """

        raw = self.user.session.post(self.user.api_urls['groups'], json=self.as_json)
        json = parse_request(raw)

        return Group(user=self.user, _fetched_data=json)



class Groups(BaseFlarumBulkObject):
    """
        A data of multiple groups fetched from the API.
    """


    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        return super().__init__(user=user, _fetched_data=_fetched_data, _listclass=Group, _required_type='groups')


    if t.TYPE_CHECKING:
        def __getitem__(self, key: int) -> 'Group': ...
        def __iter__(self) -> t.Iterator['Group']: ...



class Group(BaseFlarumIndividualObject):
    """
        A Flarum group.
    """


    @property
    def nameSingular(self) -> t.Optional[str]:
        """
            Singular form of the group's name.
        """

        return self.attributes.get("nameSingular", None)


    @property
    def namePlural(self) -> t.Optional[str]:
        """
            Plural form of the group's name.
        """

        return self.attributes.get("namePlural", None)


    @property
    def color(self) -> t.Optional[str]:
        """
            The color of the group.
        """

        return self.attributes.get("color", None)


    @property
    def icon(self) -> t.Optional[str]:
        """
            [FontAwesome](https://fontawesome.com/v5.15/icons?d=gallery) icon of the group.
        """

        return self.attributes.get("icon", None)


    @property
    def isHidden(self) -> bool:
        """
            Whether or not the group is hidden on the forum.
        """

        return bool(self.attributes.get("isHidden", 0))


    def edit(self, new_data: PreparedGroup) -> 'Group':
        """
            Edits the group with new `PreparedGroup`.

            Returns the edited `Group`
        """

        raw = self.user.session.patch(f"{self.user.api_urls['groups']}/{self.id}", json=new_data.to_dict)
        json = parse_request(raw)

        return Group(user=self.user, _fetched_data=json)


    def delete(self) -> 't.Literal[True]':
        """
            Removes the group forever. This is irreversible!

            Returns `True` when the deletion was successful.
        """

        raw = self.user.session.delete(f"{self.user.api_urls['groups']}/{self.id}")
        parse_request(raw)

        return True

