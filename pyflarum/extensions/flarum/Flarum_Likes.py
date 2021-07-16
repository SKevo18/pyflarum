from typing import List

from .. import ExtensionMixin

from ...flarum.core.users import UserFromBulk
from ...flarum.core.posts import Post, PostFromBulk, PostFromNotification
from ...error_handler import parse_request


AUTHOR = 'flarum'
NAME = 'likes'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class LikesPostFromNotificationMixin(PostFromNotification):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)
    

    def __like_or_unlike(self, liked: bool=True):
        """
            A function to either like or unlike post, to prevent repetition.
        """

        patch_data = {
            "data": {
                "type": "posts",
                "id": self.id,
                "attributes": {
                    "isLiked": liked
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)


    def like(self):
        """
            Likes a post.
        """

        return self.__like_or_unlike(liked=True)


    def unlike(self):
        """
            Unlikes liked post.
        """

        return self.__like_or_unlike(liked=False)



class LikesPostFromBulkMixin(PostFromBulk, LikesPostFromNotificationMixin):
    def get_liked_by(self):
        all_users = list() # type: List[UserFromBulk]

        for raw_user in self.relationships.get("likes", {}).get("data", [{}]):
            if raw_user.get("type", None) == "users":
                id_to_find = raw_user.get("id", None)

                if id_to_find:
                    for possible_raw_user in self._parent_included:
                        if (possible_raw_user.get("type", None) == 'users') and (possible_raw_user.get("id", None) == id_to_find):
                            user = UserFromBulk(user=self.user, _fetched_data=dict(data=possible_raw_user))

                            all_users.append(user)

        return all_users



class LikesExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromNotification, LikesPostFromNotificationMixin)
        super().mixin(self, PostFromBulk, LikesPostFromBulkMixin)
