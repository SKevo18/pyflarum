from typing import List, Optional

from datetime import datetime

from .. import ExtensionMixin
from ...session import FlarumSession
from ...flarum.core.discussions import DiscussionFromBulk
from ...datetime_conversions import flarum_to_datetime
from ...error_handler import handle_errors


class Tag(dict):
    """
        A Flarum tag.
    """

    def __init__(self, session: 'FlarumSession', _fetched_data: dict):
        self.flarum_session = session
        super().__init__(_fetched_data)


    @property
    def data(self) -> dict:
        return self.get("data", {})


    @property
    def type(self) -> Optional[str]:
        return self.data.get("type", None)


    @property
    def id(self) -> Optional[int]:
        return self.data.get("id", None)


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
    def slug(self) -> Optional[str]:
        return self.attributes.get("slug", None)


    @property
    def color(self) -> str:
        return self.attributes.get("color", "")


    @property
    def backgroundUrl(self) -> Optional[str]:
        return self.attributes.get("backgroundUrl", None)


    @property
    def backgroundMode(self) -> Optional[str]:
        return self.attributes.get("backgroundMode", None)


    @property
    def icon(self) -> Optional[str]:
        return self.attributes.get("icon", None)


    @property
    def discussionCount(self) -> Optional[int]:
        return self.attributes.get("discussionCount", None)


    @property
    def discussionCount(self) -> Optional[int]:
        return self.attributes.get("discussionCount", None)


    @property
    def position(self) -> Optional[int]:
        return self.attributes.get("position", None)


    @property
    def defaultSort(self) -> Optional[str]:
        return self.attributes.get("defaultSort", None)


    @property
    def isChild(self) -> bool:
        return self.attributes.get("isChild", False)


    @property
    def isHidden(self) -> bool:
        return self.attributes.get("isHidden", False)


    @property
    def lastPostedAt(self) -> Optional[datetime]:
        raw = self.attributes.get("lastPostedAt", None)
        return flarum_to_datetime(raw)


    @property
    def canStartDiscussion(self) -> bool:
        return self.attributes.get("canStartDiscussion", False)


    @property
    def canAddToDiscussion(self) -> bool:
        return self.attributes.get("canAddToDiscussion", False)


    @property
    def subscription(self) -> Optional[str]:
        return self.attributes.get("subscription", None)


    @property
    def template(self) -> str:
        return self.attributes.get("template", "")


    @property
    def relationships(self) -> dict:
        return self.data.get("relationships", {})


    def get_parent_tag(self, force: bool=False) -> 'Tag':
        if not self.isChild and not force:
            raise TypeError(f'{self.name} is not a children, and therefore does not have a parent tag. Use `force = True` to bypass this error.')

        id = self.relationships.get("parent", {}).get("data", {}).get("id", None) # type: int
        raw = self.flarum_session.session.get(f"{self.flarum_session.api_urls['tags']}")

        if raw.status_code != 200:
            return handle_errors(status_code=raw.status_code)

        json = raw.json() # type: dict

        if 'errors' in json:
            return handle_errors(raw['errors'])

        for raw_tag in json.get("data", [{}]):
            if (raw_tag.get("id", None) == id) and (raw_tag.get("type", None) == 'tags'):
                return Tag(session=self.flarum_session, _fetched_data=dict(data=raw_tag))

        return None



class TagsDiscussionMixin(DiscussionFromBulk):
    @property
    def canTag(self) -> bool:
        return self.attributes.get("canTag", False)


    def get_tags(self) -> List[Tag]:
        all_tags = list() # type: List[Tag]
        seen = set()
        tags = self.relationships.get("tags", {}).get("data", [{}]) # type: List[dict]

        for raw_tag in tags:
            id = raw_tag.get("id", None)

            for possible_tag in self.included:
                if possible_tag and (possible_tag.get("type", None) == 'tags') and (possible_tag.get("id", None) == id) and (possible_tag.get("id", None) not in seen):
                    tag = Tag(session=self.flarum_session, _fetched_data=dict(data=possible_tag))
                    all_tags.append(tag)

                    seen.add(tag.id)
                    continue

        return all_tags



class TagsExtension(ExtensionMixin, TagsDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, TagsDiscussionMixin)
