"""
    Custom types for pyFlarum.

    ### Types:
    - `AnyUser` - `User` | `UserFromBulk` | `UserFromNotification`
    - `AnyDiscussion` - `Discussion` | `DiscussionFromBulk` | `DiscussionFromNotification`
    - `AnyPost` - `Post` | `PostFromBulk` | `PostFromNotification`
"""

import typing as t
if t.TYPE_CHECKING:
    from .session import FlarumUser

    from .flarum.core import BaseFlarumIndividualObject

    from .flarum.core.users import User, UserFromBulk, UserFromNotification
    from .flarum.core.discussions import Discussion, DiscussionFromBulk, DiscussionFromNotification
    from .flarum.core.posts import Post, PostFromBulk, PostFromNotification, PostFromDiscussion

    AnyUser: 'User | UserFromBulk | UserFromNotification'
    AnyDiscussion: 'Discussion | DiscussionFromBulk | DiscussionFromNotification'
    AnyPost:  'Post | PostFromBulk | PostFromNotification | PostFromDiscussion'

    class AnyFlarumClass(BaseFlarumIndividualObject):
        def __init__(self, user: 'FlarumUser', _fetched_data: dict) -> None: ...
        def __call__(self, user: 'FlarumUser', _fetched_data: dict): ...
