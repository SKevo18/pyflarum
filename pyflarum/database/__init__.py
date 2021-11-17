from typing import TYPE_CHECKING

from pyflarum.database.session import FlarumDatabase

from pyflarum.database.flarum.core.discussions import DB_Discussion
from pyflarum.database.flarum.core.posts import DB_Post
from pyflarum.database.flarum.core.users import DB_User


if TYPE_CHECKING:
    _ = [
        FlarumDatabase,
        DB_Discussion, DB_Post, DB_User,
    ]
