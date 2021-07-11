from typing import Optional, Union

from ...extensions import ExtensionMixin
from ...flarum.core.admin import AdminFlarumUserMixin

from ...session import FlarumUser
from ...error_handler import parse_request



class Achievement(dict):
    """
        An achievement (Malago's Achievements extension).
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        self.user = user

        super().__init__(_fetched_data)


    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", {})


    @property
    def name(self) -> Optional[str]:
        return self.attributes.get("name", None)


    @property
    def description(self) -> Optional[str]:
        return self.attributes.get("description", None)


    @property
    def computation(self) -> Optional[str]:
        return self.attributes.get("computation", None)


    @property
    def points(self):
        raw = self.attributes.get("points", None)

        if raw:
            return int(raw)


    @property
    def icon(self) -> Optional[str]:
        return self.attributes.get("icon", None)


    @property
    def rectangle(self) -> Optional[str]:
        """
            No, I have no idea what this is either.
        """

        return self.attributes.get("rectangle", None)


    @property
    def active(self) -> Optional[bool]:
        raw = self.attributes.get("active", None)

        if raw:
            return bool(raw)


    @property
    def hidden(self) -> Optional[bool]:
        raw = self.attributes.get("hidden", None)

        if raw:
            return bool(raw)


    @property
    def new(self) -> Optional[str]:
        return self.attributes.get("new", None)



class AchievementsExtension(ExtensionMixin):
    def __init__(self):
        self.id = "malago-achievements"


    def mixin(self, user: 'FlarumUser'):
        self._user = user


    def __enable_or_disable(self, enable: bool=True):
        raw = self._user.session.patch(f"{self.api_urls['extensions']}/{self.id}", json={"enabled": enable})
        parse_request(raw)

        return True


    def enable(self):
        return self.__enable_or_disable(enable=True)


    def disable(self):
        return self.__enable_or_disable(enable=False)


    def update_settings(self, show_achievement_list_in_each_post_footer: Optional[bool]=None, show_achievement_list_in_user_badge: Optional[bool]=None):
        post_data = {}


        if isinstance(show_achievement_list_in_each_post_footer, bool):
            post_data["malago-achievements.show-post-footer"] = show_achievement_list_in_each_post_footer

        if isinstance(show_achievement_list_in_user_badge, bool):
            post_data["malago-achievements.show-user-card"] = show_achievement_list_in_user_badge


        raw = self._user.session.post(f"{self.api_urls['settings']}", json=post_data)
        parse_request(raw)

        return True


    def create_achievement(self, name: str, description: str, computation: str, points: int, image_url_or_fa_icon: str, active: Union[bool, int]=1, hidden: Union[bool, int]=0):
        post_data = {
            "data": {
                "type": "achievements",
                "attributes": {
                    "name": name,
                    "description": description,
                    "computation": computation,
                    "points": points,
                    "image": image_url_or_fa_icon,
                    "rectangle": "0,0,,", # TODO: What is this?
                    "active": int(active),
                    "hidden": int(hidden)
                }
            }
        }

        raw = self._user.session.post(f"{self.api_urls['base']}/achievements", json=post_data)
        json = parse_request(raw)

        return Achievement(user=self.user, _fetched_data=json)
