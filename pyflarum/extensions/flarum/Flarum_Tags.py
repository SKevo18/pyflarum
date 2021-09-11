from pyflarum.flarum.core import BaseFlarumIndividualObject
import typing as t

from datetime import datetime

from .. import ExtensionMixin

from ...flarum.core.forum import Forum
from ...flarum.core.discussions import DiscussionFromBulk
from ...datetime_conversions import flarum_to_datetime
from ...error_handler import parse_request


AUTHOR = 'flarum'
NAME = 'tags'
ID = f"{AUTHOR}-{NAME}"

SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class Tag(BaseFlarumIndividualObject):
    """
        A Flarum tag.
    """


    @property
    def name(self) -> t.Optional[str]:
        return self.attributes.get("name", None)


    @property
    def description(self) -> t.Optional[str]:
        return self.attributes.get("description", None)


    @property
    def slug(self) -> t.Optional[str]:
        return self.attributes.get("slug", None)


    @property
    def color(self) -> str:
        return self.attributes.get("color", "")


    @property
    def backgroundUrl(self) -> t.Optional[str]:
        return self.attributes.get("backgroundUrl", None)


    @property
    def backgroundMode(self) -> t.Optional[str]:
        return self.attributes.get("backgroundMode", None)


    @property
    def icon(self) -> t.Optional[str]:
        return self.attributes.get("icon", None)


    @property
    def discussionCount(self) -> t.Optional[int]:
        return self.attributes.get("discussionCount", None)


    @property
    def discussionCount(self) -> t.Optional[int]:
        return self.attributes.get("discussionCount", None)


    @property
    def position(self) -> t.Optional[int]:
        return self.attributes.get("position", None)


    @property
    def defaultSort(self) -> t.Optional[str]:
        return self.attributes.get("defaultSort", None)


    @property
    def isChild(self) -> bool:
        return self.attributes.get("isChild", False)


    @property
    def isHidden(self) -> bool:
        return self.attributes.get("isHidden", False)


    @property
    def lastPostedAt(self) -> t.Optional[datetime]:
        raw = self.attributes.get("lastPostedAt", None)
        return flarum_to_datetime(raw)


    @property
    def canStartDiscussion(self) -> bool:
        return self.attributes.get("canStartDiscussion", False)


    @property
    def canAddToDiscussion(self) -> bool:
        return self.attributes.get("canAddToDiscussion", False)


    @property
    def subscription(self) -> t.Optional[str]:
        return self.attributes.get("subscription", None)


    @property
    def template(self) -> str:
        return self.attributes.get("template", "")


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})


    def get_parent_tag(self, force: bool=False):
        if not self.isChild and not force:
            raise TypeError(f'{self.name} is not a children, and therefore does not have a parent tag. Use `force = True` to bypass this error.')

        id = self.relationships.get("parent", {}).get("data", {}).get("id", None) # type: int
        raw = self.user.session.get(f"{self.user.api_urls['tags']}")
        json = parse_request(raw)

        for raw_tag in json.get("data", [{}]):
            if (raw_tag.get("id", None) == id) and (raw_tag.get("type", None) == 'tags'):
                return Tag(user=self.user, _fetched_data=dict(data=raw_tag))

        return None


    def __restrict_or_unrestrict_permissions(self, restrict: bool=True):
        post_data = {
            "data": {
                "type": "tags",
                "id": "1",
                "attributes": {
                    "isRestricted": restrict
                }
            }
        }

        raw = self.user.session.post(f"{self.user.api_urls['tags']}/{self.id}", json=post_data)
        json = parse_request(raw)

        return Tag(user=self.user, _fetched_data=json)


    def restrict_permissions(self):
        return self.__restrict_or_unrestrict_permissions(restrict=True)


    def unrestrict_permissions(self):
        return self.__restrict_or_unrestrict_permissions(restrict=False)



class TagsForumMixin(Forum):
    @property
    def canBypassTagCounts(self) -> bool:
        return self.attributes.get("canBypassTagCounts", False)


    @property
    def minPrimaryTags(self) -> t.Optional[int]:
        raw = self.attributes.get("minPrimaryTags", None)

        if raw:
            return int(raw)


    @property
    def maxPrimaryTags(self) -> t.Optional[int]:
        raw = self.attributes.get("maxPrimaryTags", None)

        if raw:
            return int(raw)


    @property
    def minSecondaryTags(self) -> t.Optional[int]:
        raw = self.attributes.get("minSecondaryTags", None)

        if raw:
            return int(raw)


    @property
    def maxSecondaryTags(self) -> t.Optional[int]:
        raw = self.attributes.get("maxSecondaryTags", None)

        if raw:
            return int(raw)



class TagsDiscussionMixin(DiscussionFromBulk):
    @property
    def canTag(self) -> bool:
        return self.attributes.get("canTag", False)


    def get_tags(self) -> t.List[Tag]:
        all_tags = [] # type: t.List[Tag]
        seen = set()
        tags = self.relationships.get("tags", {}).get("data", [{}]) # type: t.List[dict]

        for raw_tag in tags:
            id = raw_tag.get("id", None)

            for possible_tag in self._parent_included:
                if possible_tag and (possible_tag.get("type", None) == 'tags') and (possible_tag.get("id", None) == id) and (possible_tag.get("id", None) not in seen):
                    tag = Tag(user=self.user, _fetched_data=dict(data=possible_tag))
                    all_tags.append(tag)

                    seen.add(tag.id)
                    continue

        return all_tags



class TagsExtension(ExtensionMixin):
    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, Forum, TagsForumMixin)
        super().mixin(self, DiscussionFromBulk, TagsDiscussionMixin)
