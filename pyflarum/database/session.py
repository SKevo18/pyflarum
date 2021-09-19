import typing as t

from peewee import *
from peewee import BaseQuery, ModelSelect

from .flarum.core.other import DB_AccessToken
from .flarum.core.users import DB_User
from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

from ..extensions import bind_extension_models, mixin_extensions, ExtensionMixin



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
        self._bind_models()


    def __enter__(self):
        return self.database.__enter__()


    def __exit__(self, *exc):
        return self.database.__exit__(*exc)


    def _execute_query(self, query: BaseQuery) -> t.Iterator:
        return (query.execute(self.database))
    

    def _bind_models(self, models: t.Iterable[t.Type[Model]]=MODELS):
        """
            Binds `models` to the session's database.
            
            This is required especially for `ForeignKeyField`s, as they need to be bound to database
            in order to call `execute()` when retrieving them.
        """

        for model in models:
            model.bind(self.database)


    def _create_tables(self, models: t.Iterable[t.Type[Model]]=MODELS):
        """
            Creates the table for `models` for the session's database.

            Please note that pyFlarum wraps the database around an already existing data, and
            it is not meant to create the database structure from scratch, although I assume that
            it would just work.
        """
        # TODO: Test if it works.

        return self.database.create_tables(models)



class FlarumDatabase(FlarumDatabaseSession):
    def __init__(self, extensions: t.Optional[t.Iterable[ExtensionMixin]]=None, **kwargs):
        """
            ### Parameters:
            - `extensions` - Iterable of extensions. The principe is same as it is in `FlarumUser`.

            - `database` - the `Database` object. It is recommended to use [peewee's database classes](https://docs.peewee-orm.com/en/latest/peewee/database.html).
        """

        self.extensions = extensions
        super().__init__(**kwargs)

        if self.extensions:
            mixin_extensions(self.extensions)
            self.database = bind_extension_models(self.extensions, self.database)


    def get_access_tokens(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_AccessToken], ModelSelect]:
        _query = DB_AccessToken.select(*fields) # type: ModelSelect

        return _query if query else self._execute_query(_query)


    def get_users(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_User], ModelSelect]:
        _query = DB_User.select(*fields) # type: ModelSelect

        return _query if query else self._execute_query(_query)


    def get_discussions(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_Discussion], ModelSelect]:
        _query = DB_Discussion.select(*fields) # type: ModelSelect

        return _query if query else self._execute_query(_query)


    def get_posts(self, query: bool=False, *fields) -> t.Union[t.Iterator[DB_Post], ModelSelect]:
        _query = DB_Post.select(*fields) # type: ModelSelect

        return _query if query else self._execute_query(_query)
