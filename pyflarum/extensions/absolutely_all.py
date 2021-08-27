from typing import Generator, Optional, TYPE_CHECKING
if TYPE_CHECKING:
    from ..flarum.core.notifications import Notifications
    from ..flarum.core.discussions import Discussions, Discussion
    from ..flarum.core.posts import Posts, Post
    from ..flarum.core.users import Users


from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter


AUTHOR = 'skevo'
NAME = 'absolutely-all'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class AbsolutelyAllFlarumUserMixin(FlarumUser):
    def absolutely_all_users(self, filter: Optional[Filter]=None)  -> Generator['Users', None, None]:
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


    def absolutely_all_posts(self, filter: Optional[Filter]=None) -> Generator['Posts', None, None]:
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


    def absolutely_all_discussions(self, filter: Optional[Filter]=None) -> Generator['Discussions', None, None]:
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


    def absolutely_all_notifications(self, filter: Optional[Filter]=None) -> Generator['Notifications', None, None]:
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
    

    def get_all_posts_from_discussion(self, discussion: 'Discussion') -> Generator['Post', None, None]:
        """
            This makes additional API request for every individual post to fetch full post data from a long discussion.
            Sadly, the reason why additional request is needed is because only post IDs are present in the relationship data of the discussion.

            I recommend you to put a delay between `next()` to prevent "429  Rate Limited" error for forums that are protected from flooding.
        """

        raw_posts = discussion.relationships.get("posts", {}).get("data", []) # type: list[dict]

        for raw_post in raw_posts:
            post_id = raw_post.get("id", None) # type: Optional[int]

            if post_id:
                yield self.get_post_by_id(post_id)



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
