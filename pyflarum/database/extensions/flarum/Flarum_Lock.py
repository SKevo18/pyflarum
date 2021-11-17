from ....extensions import ExtensionMixin

import sqlmodel as sql

from ...flarum.core.discussions import DB_Discussion


class DB_FlarumLock_DiscussionMixin(DB_Discussion):
    is_locked: bool = sql.Field(default=False)



class DB_LockExtension(ExtensionMixin):
    SOFT_DEPENDENCIES = []
    HARD_DEPENCENDIES = []


    @classmethod
    def get_dependencies(cls):
        return {
            "soft": cls.SOFT_DEPENDENCIES,
            "hard": cls.HARD_DEPENCENDIES
        }


    @classmethod
    def mixin(cls):
        super().mixin(DB_FlarumLock_DiscussionMixin, DB_Discussion)
