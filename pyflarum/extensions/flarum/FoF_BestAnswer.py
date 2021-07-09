from typing import Optional

from datetime import datetime

from .. import ExtensionMixin
from ...datetime_conversions import flarum_to_datetime
from ...flarum.core.discussions import DiscussionFromBulk


class BestAnswerDiscussionMixin(DiscussionFromBulk):
    @property
    def hasBestAnswer(self) -> bool:
        return self.attributes.get("hasBestAnswer", False)


    @property
    def bestAnswerSetAt(self) -> Optional[datetime]:
        raw = self.attributes.get("bestAnswerSetAt", None)

        return flarum_to_datetime(raw)


    @property
    def canSelectBestAnswer(self) -> bool:
        return self.attributes.get("canSelectBestAnswer", False)



class BestAnswerExtension(ExtensionMixin, BestAnswerDiscussionMixin):
    def mixin(self):
        super().mixin(self, DiscussionFromBulk, BestAnswerDiscussionMixin)
