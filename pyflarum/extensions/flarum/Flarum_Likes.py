import typing as t

from .. import ExtensionMixin

from ...error_handler import parse_request

from ...flarum.core.users import UserFromBulk
from ...flarum.core.posts import Post, PostFromBulk, PostFromNotification, PostFromDiscussion



AUTHOR = 'flarum'
NAME = 'likes'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class LikesPostFromDiscussionMixin(PostFromDiscussion):
    def __like_or_unlike(self, liked: bool=True) -> Post:
        """
            A function to either like or unlike post, to prevent repetition.

            Use `like()` or `unlike()` instead, please.
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


    def like(self) -> Post:
        """
            Likes a post.
        """

        return self.__like_or_unlike(liked=True)


    def unlike(self) -> Post:
        """
            Unlikes liked post.
        """

        return self.__like_or_unlike(liked=False)



class LikesPostFromNotificationMixin(PostFromNotification, LikesPostFromDiscussionMixin):
    @property
    def canLike(self) -> bool:
        return self.attributes.get("canLike", False)



class LikesPostFromBulkMixin(PostFromBulk):
    def get_liked_by(self) -> t.List[UserFromBulk]:
        """
            Obtain the list of users that liked the post.
        """

        all_users = list()

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
    """
        https://packagist.org/packages/flarum/likes
    """

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, PostFromDiscussion, LikesPostFromDiscussionMixin)
        super().mixin(self, PostFromNotification, LikesPostFromNotificationMixin)
        super().mixin(self, PostFromBulk, LikesPostFromBulkMixin)
