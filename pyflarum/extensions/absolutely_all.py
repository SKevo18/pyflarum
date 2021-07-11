from typing import Optional

from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter


class AbsolutelyAllFlarumUserMixin(FlarumUser):
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


    def absolutely_all_notifications(self, filter: Optional[Filter]=None):
        """
            A generator that yields all of your `Notifications`, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()
    
        _filter.page = 0
        discussions = self.get_notifications(_filter)

        while True:
            yield discussions

            discussions = self.get_notifications(_filter)
            _filter.page += 1

            if not discussions.next_link:
                break


class AbsolutelyAllExtension(ExtensionMixin, AbsolutelyAllFlarumUserMixin):
    def mixin(self, user: 'FlarumUser'=None):
        super().mixin(self, FlarumUser, AbsolutelyAllFlarumUserMixin)
