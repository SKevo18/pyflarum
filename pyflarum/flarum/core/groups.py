from typing import TYPE_CHECKING, Optional, List

# Avoid my greatest enemy in Python: circular import:
if TYPE_CHECKING:
    from ...session import FlarumUser

from ...error_handler import parse_request



class PreparedGroup(dict):
    def __init__(self, user: 'FlarumUser', nameSingular: str, namePlural: Optional[str]=None, color: Optional[str]=None, icon: Optional[str]=None, isHidden: bool=False):
        self.user = user

        self.nameSingular = nameSingular
        self.namePlural = (namePlural if namePlural else self.nameSingular)
        self.color = color
        self.icon = icon
        self.isHidden = isHidden
    

    @property
    def to_dict(self):
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


    def create(self):
        """
            Creates the group. Returns the created `Group`.
        """

        raw = self.user.session.post(self.user.api_urls['groups'], json=self.to_dict)
        json = parse_request(raw)

        return Group(user=self.user, _fetched_data=json)



class Groups(dict):
    """
        A data of multiple groups fetched from the API.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    def __iter__(self):
        return iter(self.get_groups())


    @property
    def links(self) -> dict:
        return self.get("links", {})


    @property
    def first_link(self) -> Optional[str]:
        return self.links.get("first", None)


    @property
    def previous_link(self) -> Optional[str]:
        return self.links.get("prev", None)


    @property
    def next_link(self) -> Optional[str]:
        return self.links.get("next", None)


    @property
    def data(self) -> List[dict]:
        return self.get("data", [{}])


    @property
    def included(self) -> List[dict]:
        return self.get("included", [{}])


    def get_groups(self):
        """
            All groups from the `Groups` object.
        """

        all_groups = [] # type: List[Group]

        for raw_group in self.data:
            if raw_group.get("type", None) == 'groups':
                group = Group(user=self.user, _fetched_data=dict(data=raw_group))

                all_groups.append(group)

        return all_groups



class Group(Groups):
    """
        A Flarum group.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(user=self.user, _fetched_data=_fetched_data)


    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def id(self) -> Optional[int]:
        raw = self.data.get("id", None)

        if raw:
            return int(raw)

    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


    @property
    def nameSingular(self) -> Optional[str]:
        return self.attributes.get("nameSingular", None)


    @property
    def namePlural(self) -> Optional[str]:
        return self.attributes.get("namePlural", None)


    @property
    def color(self) -> Optional[str]:
        return self.attributes.get("color", None)


    @property
    def icon(self) -> Optional[str]:
        return self.attributes.get("icon", None)


    @property
    def isHidden(self) -> bool:
        return bool(self.attributes.get("isHidden", 0))


    def edit(self, new_data: PreparedGroup):
        raw = self.user.session.patch(f"{self.user.api_urls['groups']}/{self.id}", json=new_data.to_dict)
        json = parse_request(raw)

        return Group(user=self.user, _fetched_data=json)


    def delete(self):
        raw = self.user.session.delete(f"{self.user.api_urls['groups']}/{self.id}")
        parse_request(raw)

        return True

