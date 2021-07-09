from typing import Optional

from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter


class AbsolutelyAllDiscussionsDiscussionMixin(FlarumUser):
    def absolutely_all_discussions(self, filter: Optional[Filter]=None):
        """
            A generator that yields `Discussions` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()
    
        _filter.page = 0
        discussions = self.all_discussions(_filter)

        while True:
            yield discussions

            discussions = self.all_discussions(_filter)
            _filter.page += 1

            if not discussions.next_link:
                break




class AbsolutelyAllDiscussionsExtension(ExtensionMixin, AbsolutelyAllDiscussionsDiscussionMixin):
    def mixin(self):
        super().mixin(self, FlarumUser, AbsolutelyAllDiscussionsDiscussionMixin)
