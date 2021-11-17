import typing as t

from datetime import datetime

from ....extensions import ExtensionMixin

from ....datetime_conversions import flarum_to_datetime
from ...flarum.core.discussions import DiscussionFromBulk, DiscussionFromNotification



class BestAnswerDiscussionNotificationMixin(DiscussionFromNotification):
    @property
    def hasBestAnswer(self) -> bool:
        return self.attributes.get("hasBestAnswer", False)


    @property
    def bestAnswerSetAt(self) -> t.Optional[datetime]:
        raw = self.attributes.get("bestAnswerSetAt", None)

        return flarum_to_datetime(raw)



class BestAnswerDiscussionMixin(DiscussionFromBulk):
    @property
    def canSelectBestAnswer(self) -> bool:
        return self.attributes.get("canSelectBestAnswer", False)



class BestAnswerExtension(ExtensionMixin):
    AUTHOR = 'fof'
    NAME = 'best-answer'


    @classmethod
    def mixin(cls):
        super().mixin(DiscussionFromNotification, BestAnswerDiscussionNotificationMixin)
        super().mixin(DiscussionFromBulk, BestAnswerDiscussionMixin)
