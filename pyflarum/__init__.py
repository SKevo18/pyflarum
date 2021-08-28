from .session import FlarumUser
from .error_handler import FlarumError

from .flarum.core.discussions import PreparedDiscussion, Discussions, Discussion, DiscussionFromBulk, DiscussionFromNotification
from .flarum.core.posts import PreparedPost, Posts, Post, PostFromBulk, PostFromNotification, PostFromDiscussion

from .flarum.core.users import Users, User, UserFromBulk, UserFromNotification, MyUser
from .flarum.core.groups import PreparedGroup, Groups, Group

from .flarum.core.filters import Filter
from .flarum.core.notifications import Notifications, Notification
from .flarum.core.forum import Forum


__all__ = [
    'FlarumUser', 'FlarumError',

    'PreparedDiscussion', 'Discussions', 'Discussion', 'DiscussionFromBulk', 'DiscussionFromNotification',
    'PreparedPost', 'Posts', 'Post', 'PostFromBulk', 'PostFromNotification', 'PostFromDiscussion',

    'Users', 'User', 'UserFromBulk', 'UserFromNotification', 'MyUser',
    'PreparedGroup', 'Groups', 'Group',

    'Filter',
    'Notifications', 'Notification',
    'Forum'
]


try:
    with open("README.md", 'r', encoding="UTF-8") as readme:
        __doc__ = readme.read() 

except:
    __doc__ = "Failed to read README.md. For now, see the GitHub version, which is identical: https://github.com/cwkevo/pyflarum"


if __name__ == "__main__":
    print(__doc__)
