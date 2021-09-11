import typing as t
if t.TYPE_CHECKING:
    from ..flarum.core.notifications import Notifications
    from ..flarum.core.discussions import Discussions
    from ..flarum.core.posts import Posts
    from ..flarum.core.users import Users


import warnings


from . import ExtensionMixin
from ..session import FlarumUser

from ..flarum.core.filters import Filter
from ..flarum.core.discussions import Discussion


AUTHOR = 'skevo'
NAME = 'absolutely-all'
ID = f"{AUTHOR}-{NAME}"


SOFT_DEPENDENCIES = []
HARD_DEPENCENDIES = []



class AbsolutelyAllFlarumUserMixin(FlarumUser):
    def absolutely_all_users(self, filter: t.Optional[Filter]=None)  -> t.Generator['Users', None, None]:
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


    def absolutely_all_posts(self, filter: t.Optional[Filter]=None) -> t.Generator['Posts', None, None]:
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


    def absolutely_all_discussions(self, filter: t.Optional[Filter]=None) -> t.Generator['Discussions', None, None]:
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


    def absolutely_all_notifications(self, filter: t.Optional[Filter]=None) -> t.Generator['Notifications', None, None]:
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
    

    def get_all_posts_from_discussion(self, discussion: Discussion, at_once: int=50, force: bool=False) -> t.Generator['Posts', None, None]:
        """
            This fetches all posts from a long discussion where only post IDs are present.

            First, a list of all IDs is created from the API response. Then, IDs are broken into chunks of size `at_once` and
            yielded as `Posts`.

            Use `force=True` to bypass `at_once` being capped at 50, if more than 50.
        """

        if not isinstance(discussion, Discussion):
            raise TypeError("`discussion` parameter must be an instance of `Discussion`.")


        if at_once > 50 and not force:
            at_once = 50
            warnings.warn("`at_once` was capped at 50, because Flarum (by default/currently) doesn't support fetching more than 50 entires at once from API. Use `force=True` to bypass.")


        raw_posts = discussion.relationships.get("posts", {}).get("data", []) # type: t.List[dict]
        post_ids = [] # type: t.List[int]


        for raw_post in raw_posts:
            post_id = raw_post.get("id", None) # type: t.Optional[int]

            if post_id:
                post_ids.append(post_id)


        for id in range(0, len(post_ids), at_once): 
            yield self.get_posts(filter=Filter(limit=50, ids=post_ids[id:id + at_once]))



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
