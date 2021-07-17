"""
    Custom types for pyFlarum.

    ### Types:
    - `AnyUser` - `User`, `UserFromBulk`, `UserFromNotification`
    - `AnyDiscussion` - `Discussion`, `DiscussionFromBulk`, `DiscussionFromNotification`
    - `AnyPost` - `Post`, `PostFromBulk`, `PostFromNotification`
"""

from typing import Union


from .flarum.core.users import User, UserFromBulk, UserFromNotification
from .flarum.core.discussions import Discussion, DiscussionFromBulk, DiscussionFromNotification
from .flarum.core.posts import Post, PostFromBulk, PostFromNotification


AnyUser = Union[User, UserFromBulk, UserFromNotification]
AnyDiscussion = Union[Discussion, DiscussionFromBulk, DiscussionFromNotification]
AnyPost = Union[Post, PostFromBulk, PostFromNotification]
