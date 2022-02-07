from typing import TYPE_CHECKING

from pyflarum.client.session import FlarumUser
from pyflarum.error_handler import FlarumError

from pyflarum.client.flarum.core.discussions import PreparedDiscussion, Discussions, Discussion, DiscussionFromBulk, DiscussionFromNotification
from pyflarum.client.flarum.core.posts import PreparedPost, Posts, Post, PostFromBulk, PostFromNotification, PostFromDiscussion

from pyflarum.client.flarum.core.users import Users, User, UserFromBulk, UserFromNotification, MyUser
from pyflarum.client.flarum.core.groups import PreparedGroup, Groups, Group

from pyflarum.client.flarum.core.filters import Filter
from pyflarum.client.flarum.core.notifications import Notifications, Notification
from pyflarum.client.flarum.core.forum import Forum


from pathlib import Path
try:
    with open(f"{Path(__file__).parent.parent.parent.absolute()}{Path('/README.md')}", 'r', encoding="UTF-8") as readme:
        __doc__ = readme.read() 

except Exception:
    __doc__ = "Failed to load README.md. For now, please see the GitHub version, which is identical: https://github.com/CWkevo/pyFlarum & report this issue. Thanks!"


from pyflarum.database.session import FlarumDatabase

from pyflarum.database.flarum.core.discussions import DB_Discussion
from pyflarum.database.flarum.core.posts import DB_Post
from pyflarum.database.flarum.core.users import DB_User


if TYPE_CHECKING:
    _ = [
        FlarumUser, FlarumError,
        PreparedDiscussion, Discussions, Discussion, DiscussionFromBulk, DiscussionFromNotification,
        PreparedPost, Posts, Post, PostFromBulk, PostFromNotification, PostFromDiscussion,
        Users, User, UserFromBulk, UserFromNotification, MyUser,
        PreparedGroup, Groups, Group,
        Filter, Notifications, Notification, Forum,

        FlarumDatabase,
        DB_Discussion, DB_Post, DB_User,
    ]
