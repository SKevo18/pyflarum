from typing import Dict, Generator, List, Union
from collections import UserDict
from datetime import datetime

from pyflarum.date_conversions import flarum_to_datetime


class FlarumDiscussion(UserDict):
    @property
    def type(self) -> str:
        return self.get("type", "discussions")


    @property
    def id(self) -> int:
        return self.get("id", 0)


    @property
    def attributes(self) -> dict:
        return self.get("attributes", dict())


    @property
    def title(self) -> str:
        return self.attributes.get("title", None)


    @property
    def slug(self) -> str:
        return self.attributes.get("slug", None)


    @property
    def commentCount(self) -> int:
        return self.attributes.get("commentCount", 0)


    @property
    def participantCount(self) -> int:
        return self.attributes.get("participantCount", 0)


    @property
    def createdAt(self) -> datetime:
        raw = self.attributes.get("createdAt", datetime.now())
        return flarum_to_datetime(raw)


    @property
    def lastPostedAt(self) -> datetime:
        raw = self.attributes.get("lastPostedAt", datetime.now())
        return flarum_to_datetime(raw)


    @property
    def lastPostNumber(self) -> int:
        return self.attributes.get("lastPostNumber", 0)


    @property
    def canReply(self) -> bool:
        return self.attributes.get("canReply", False)


    @property
    def canRename(self) -> bool:
        return self.attributes.get("canRename", False)


    @property
    def canDelete(self) -> bool:
        return self.attributes.get("canDelete", False)


class FlarumDiscussions(UserDict):
    @property
    def links(self) -> Dict[str, str]:
        return self.get("links", {})


    @property
    def first_link(self) -> str:
        return self.links.get("first", None)


    @property
    def next_link(self) -> str:
        return self.links.get("next", None)


    @property
    def previous_link(self) -> str:
        return self.links.get("prev", None)


    @property
    def discussions(self) -> List[FlarumDiscussion]:
        return self.get("data", [])


    def included(self) -> Generator[Union[dict, FlarumDiscussion, list], None, None]:
        included = self.get("included", []) # type: List[dict]

        for include in included: # TODO: IncludedUser, IncludedDiscussion...
            if include.get("type", None) == "users":
                yield dict(include)
            
            elif include.get("type", None) == "discussions":
                yield FlarumDiscussion(include)
            
            else:
                yield list(include)


    def __iter__(self) -> Generator[FlarumDiscussion, None, None]:
        for raw in self.discussions:
            discussion = FlarumDiscussion(raw) # TODO: BulkDiscussion

            yield discussion
