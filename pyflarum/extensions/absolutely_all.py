from typing import Optional

from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter


AUTHOR = 'skevo'
NAME = 'absolutely-all'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []


class AbsolutelyAllFlarumUserMixin(FlarumUser):
    def absolutely_all_users(self, filter: Optional[Filter]=None):
        """
            A generator that yields `Users` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()
    
        _filter.page = 0
        users = self.all_users(_filter)

        while True:
            yield users

            users = self.all_users(_filter)
            _filter.page += 1

            if not users.next_link:
                break


    def absolutely_all_posts(self, filter: Optional[Filter]=None):
        """
            A generator that yields `Posts` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()
    
        _filter.page = 0
        posts = self.all_posts(_filter)

        while True:
            yield posts

            posts = self.all_posts(_filter)
            _filter.page += 1

            if not posts.next_link:
                break


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


class AbsolutelyAllExtension(ExtensionMixin):
    def __init__(self):
        self.name = NAME
        self.author = AUTHOR
        self.id = ID

    def get_dependencies(self):
        return {
            "soft": SOFT_DEPENDENCIES,
            "hard": HARD_DEPENCENDIES
        }


    def mixin(self):
        super().mixin(self, FlarumUser, AbsolutelyAllFlarumUserMixin)
