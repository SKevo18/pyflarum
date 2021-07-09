from typing import Optional

from datetime import datetime

from .. import ExtensionMixin
from ...datetime_conversions import flarum_to_datetime
from ...flarum.core.discussions import Discussion


class BestAnswerDiscussionMixin(Discussion):
    @property
    def hasBestAnswer(self) -> bool:
        return self.attributes.get("hasBestAnswer", False)


    @property
    def bestAnswerSetAt(self) -> Optional[datetime]:
        raw = self.attributes.get("bestAnswerSetAt", None)

        return flarum_to_datetime(raw)



class BestAnswerExtension(ExtensionMixin, BestAnswerDiscussionMixin):
    def mixin(self):
        super().mixin(self, Discussion, BestAnswerDiscussionMixin)
