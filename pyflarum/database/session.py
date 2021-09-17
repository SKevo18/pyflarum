import typing as t
if t.TYPE_CHECKING:
    from ..extensions import ExtensionMixin

from peewee import BaseQuery
from peewee import *

from .flarum.core.other import DB_AccessToken
from .flarum.core.users import DB_User
from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

from ..extensions import mixin_extensions



class FlarumDatabaseSession:
    MODELS = [
        DB_AccessToken,
        DB_User,
        DB_Discussion,
        DB_Post
    ] # type: t.Iterable[t.Type[Model]]

    def __init__(self, database: Database):
        """
            ### Parameters:
            - `database` - the `Database` object. Recommended is to use [peewee's database classes](https://docs.peewee-orm.com/en/latest/peewee/database.html).
        """

        self.database = database

        for model in FlarumDatabaseSession.MODELS:
            model.bind(self.database)


    def __enter__(self):
        return self.database.__enter__()


    def __exit__(self, *exc):
        return self.database.__exit__(*exc)


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
            mixin_extensions(self.extensions)


        super().__init__(**kwargs)


    def get_access_tokens(self, *fields) -> t.Iterator[DB_AccessToken]:
        query = DB_AccessToken.select(*fields)

        return self._execute_query(query)


    def get_users(self, *fields) -> t.Iterator[DB_User]:
        query = DB_User.select(*fields)

        return self._execute_query(query)


    def get_discussions(self, *fields) -> t.Iterator[DB_Discussion]:
        query = DB_Discussion.select(*fields)

        return self._execute_query(query)


    def get_posts(self, *fields) -> t.Iterator[DB_Post]:
        query = DB_Post.select(*fields)

        return self._execute_query(query)
