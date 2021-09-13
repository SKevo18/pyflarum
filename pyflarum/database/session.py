import typing as t
if t.TYPE_CHECKING:
    from ..extensions import ExtensionMixin

import warnings

from peewee import *
from peewee import BaseQuery

from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

from ..error_handler import MissingExtensionWarning, MissingExtensionError



class FlarumDatabaseSession:
    def __init__(self, database: Database):
        """
            ### Parameters:
            - `database` - the `Database` object. Recommended is to use [peewee's database classes](https://docs.peewee-orm.com/en/latest/peewee/database.html).
        """

        self.database = database


    def __enter__(self):
        return self.database.__enter__()


    def __exit__(self, **exc):
        return self.database.__exit__(**exc)


    def _execute_query(self, query: BaseQuery) -> t.Iterator:
        return (query.execute(self.database))



class FlarumDatabase(FlarumDatabaseSession):
    def __init__(self, extensions: t.Optional[t.Iterable['ExtensionMixin']]=None, **kwargs):
        """
            ### Parameters:
            - `extensions` - Iterable of extensions. The principe is same as it is in `FlarumUser`.

            - `database` - the `Database` object. Recommended is to use [peewee's database classes](https://docs.peewee-orm.com/en/latest/peewee/database.html).
        """

        self.extensions = extensions

        if self.extensions:
            for extension in self.extensions:
                dependencies = extension.get_dependencies(extension) # type: dict

                hard = dependencies.get("hard", None)
                soft = dependencies.get("soft", None)

                if hard and len(hard) > 0:
                    for hard_dependency in hard:
                        if hard_dependency not in self.extensions:
                            raise MissingExtensionError(f'`{extension}` hardly depends on `{hard_dependency}`. Please, include that extension too in your extension list.')

                extension.mixin(extension)

                if soft and len(soft) > 0:
                    for soft_dependency in soft:
                        if soft_dependency not in self.extensions:
                            warnings.warn(f'`{extension}` softly depends on `{soft_dependency}`. Some features might be unavailable.', MissingExtensionWarning)


        super().__init__(**kwargs)


    def get_discussions(self, *fields) -> t.Iterator[DB_Discussion]:
        query = DB_Discussion.select(*fields)

        return self._execute_query(query)


    def get_posts(self, *fields) -> t.Iterator[DB_Post]:
        query = DB_Post.select(*fields)

        return self._execute_query(query)
