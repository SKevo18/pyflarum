import typing as t

from ...extensions import ExtensionMixin
from ...extensions.admin import AdminExtension, AdminFlarumUserMixin

from ...flarum.core.forum import Forum
from ...flarum.core import BaseFlarumIndividualObject
from ...error_handler import parse_request


AUTHOR = 'malago'
NAME = 'achievements'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = [AdminExtension]
HARD_DEPENCENDIES = []



class Achievement(BaseFlarumIndividualObject):
    """
        An achievement (Malago's Achievements extension).
    """


    @property
    def name(self) -> t.Optional[str]:
        return self.attributes.get("name", None)


    @property
    def description(self) -> t.Optional[str]:
        return self.attributes.get("description", None)


    @property
    def computation(self) -> t.Optional[str]:
        return self.attributes.get("computation", None)


    @property
    def points(self):
        raw = self.attributes.get("points", None)

        if raw:
            return int(raw)


    @property
    def icon(self) -> t.Optional[str]:
        return self.attributes.get("icon", None)


    @property
    def rectangle(self) -> t.Optional[str]:
        """
            No, I have no idea what this is either.
        """

        return self.attributes.get("rectangle", None)


    @property
    def active(self) -> t.Optional[bool]:
        raw = self.attributes.get("active", None)

        if raw:
            return bool(raw)


    @property
    def hidden(self) -> t.Optional[bool]:
        raw = self.attributes.get("hidden", None)

        if raw:
            return bool(raw)


    @property
    def new(self) -> t.Optional[str]:
        return self.attributes.get("new", None)



class AchievementsForumMixin(Forum):
    @property
    def show_achievements_in_post_footer(self) -> bool:
        return self.attributes.get("malago-achievements.show-post-footer", False)


    @property
    def show_achievements_in_user_card(self) -> bool:
        return self.attributes.get("malago-achievements.show-user-card", False)



class AchievementsAdminFlarumUserMixin(AdminFlarumUserMixin):
    def update_settings(self, show_achievement_list_in_each_post_footer: t.Optional[bool]=None, show_achievement_list_in_user_badge: t.Optional[bool]=None) -> 't.Literal[True]':
        post_data = {}


        if isinstance(show_achievement_list_in_each_post_footer, bool):
            post_data["malago-achievements.show-post-footer"] = show_achievement_list_in_each_post_footer

        if isinstance(show_achievement_list_in_user_badge, bool):
            post_data["malago-achievements.show-user-card"] = show_achievement_list_in_user_badge


        raw = self.session.post(f"{self.api_urls['settings']}", json=post_data)
        parse_request(raw)

        return True


    def create_achievement(self, name: str, description: str, computation: str, points: int, image_url_or_fa_icon: str, active: 'bool | int'=1, hidden: 'bool | int'=0) -> Achievement:
        post_data = {
            "data": {
                "type": "achievements",
                "attributes": {
                    "name": name,
                    "description": description,
                    "computation": computation,
                    "points": points,
                    "image": image_url_or_fa_icon,
                    "rectangle": "0,0,,",
                    "active": int(active),
                    "hidden": int(hidden)
                }
            }
        }

        raw = self.session.post(f"{self.api_urls['base']}/achievements", json=post_data)
        json = parse_request(raw)

        return Achievement(user=self, _fetched_data=json)


    def get_all_achievements(self) -> t.List[Achievement]:
        raw = self.session.get(f"{self.api_urls['base']}/achievements")
        json = parse_request(raw)

        all_achievements = list()

        for raw_achievement in json['data']:
            achievement = Achievement(user=self, _fetched_data=dict(data=raw_achievement))
            all_achievements.append(achievement)

        return all_achievements



class AchievementsExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, AdminFlarumUserMixin, AchievementsAdminFlarumUserMixin)
        super().mixin(self, Forum, AchievementsForumMixin)
