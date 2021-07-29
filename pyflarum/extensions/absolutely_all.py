from typing import Generator, Optional, TYPE_CHECKING
if TYPE_CHECKING:
    from ..flarum.core.notifications import Notifications
    from ..flarum.core.discussions import Discussions
    from ..flarum.core.posts import Posts
    from ..flarum.core.users import Users


from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter


AUTHOR = 'skevo'
NAME = 'absolutely-all'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class AbsolutelyAllFlarumUserMixin:
    def absolutely_all_users(self: FlarumUser, filter: Optional[Filter]=None)  -> Generator['Users', None, None]:
        """
            A generator that yields `Users` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()


        _filter.page = 0
        users = self.get_users(_filter)


        while True:
            yield users

            users = self.get_users(_filter)
            _filter.page += 1

            if not users.next_link:
                break


    def absolutely_all_posts(self: FlarumUser, filter: Optional[Filter]=None) -> Generator['Posts', None, None]:
        """
            A generator that yields `Posts` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()


        _filter.page = 0
        posts = self.get_posts(_filter)


        while True:
            yield posts

            posts = self.get_posts(_filter)
            _filter.page += 1

            if not posts.next_link:
                break


    def absolutely_all_discussions(self: FlarumUser, filter: Optional[Filter]=None) -> Generator['Discussions', None, None]:
        """
            A generator that yields `Discussions` from entire forum, until there are `None` left. `Filter` compatible.
        """

        if isinstance(filter, Filter):
            _filter = filter

        else:
            _filter = Filter()


        _filter.page = 0
        discussions = self.get_discussions(_filter)


        while True:
            yield discussions

            discussions = self.get_discussions(_filter)
            _filter.page += 1

            if not discussions.next_link:
                break


    def absolutely_all_notifications(self: FlarumUser, filter: Optional[Filter]=None) -> Generator['Notifications', None, None]:
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
# TODO: How to type hint inheritance? 
# AbsolutelyAllFlarumUserMixin: Type[FlarumUser]



class AbsolutelyAllExtension(ExtensionMixin):
    """
        A pyFlarum extension. Allows you to fetch all specific data from a forum (e. g.: all discussions, all posts, etc.), until there are none left.

        Based on `Generator`, that yields in a while loop, until no `next_link` is present in the API.
    """

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
