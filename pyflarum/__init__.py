from pyflarum.session import FlarumUser
from pyflarum.error_handler import FlarumError

from pyflarum.flarum.core.discussions import PreparedDiscussion, Discussions, Discussion, DiscussionFromBulk, DiscussionFromNotification
from pyflarum.flarum.core.posts import PreparedPost, Posts, Post, PostFromBulk, PostFromNotification, PostFromDiscussion

from pyflarum.flarum.core.users import Users, User, UserFromBulk, UserFromNotification, MyUser
from pyflarum.flarum.core.groups import PreparedGroup, Groups, Group

from pyflarum.flarum.core.filters import Filter
from pyflarum.flarum.core.notifications import Notifications, Notification
from pyflarum.flarum.core.forum import Forum


from pathlib import Path
try:
    with open(f"{Path(__file__).parent.parent.absolute()}{Path('/README.md')}", 'r', encoding="UTF-8") as readme:
        __doc__ = readme.read() 

except Exception:
    __doc__ = "Failed to read README.md. For now, see the GitHub version, which is identical: https://github.com/cwkevo/pyflarum"


if __name__ == "__main__":
    _ = [
        FlarumUser, FlarumError,
        PreparedDiscussion, Discussions, Discussion, DiscussionFromBulk, DiscussionFromNotification,
        PreparedPost, Posts, Post, PostFromBulk, PostFromNotification, PostFromDiscussion,
        Users, User, UserFromBulk, UserFromNotification, MyUser,
        PreparedGroup, Groups, Group,
        Filter, Notifications, Notification, Forum
    ]
