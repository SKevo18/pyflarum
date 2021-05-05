from datetime import datetime
from pyflarum.date_conversions import flarum_to_datetime


class FlarumDiscussion(dict):
    @property
    def data(self) -> dict:
        return self.get("data", {})

    @property
    def type(self) -> str:
        return self.data.get("type", "discussions")

    @property
    def id(self) -> int:
        return self.data.get("id", 0)

    @property
    def attributes(self) -> dict:
        return self.data.get("attributes", dict())

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


class FlarumDiscussions(dict):
    pass
