import typing as t

from sqlmodel import SQLModel, Session
from sqlalchemy.future import Engine

from .flarum.core.other import DB_AccessToken
from .flarum.core.users import DB_User
from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

from ..extensions import bind_extension_models, mixin_extensions, ExtensionMixin


_MDL = t.TypeVar('_MDL', bound=SQLModel)



class FlarumDatabaseSession:
    def __init__(self, engine: Engine):
        """
            ### Parameters:
            - `engine` - the `Engine` object (`sqlmodel.create_engine()`).
        """

        self.engine = engine
        self._create_tables()


    def _create_tables(self):
        """
            Creates the table for `models` for the session's database.
        """

        return SQLModel.metadata.create_all(self.engine)



class FlarumDatabase(FlarumDatabaseSession):
    def __init__(self, extensions: t.Optional[t.Iterable[ExtensionMixin]]=None, **kwargs):
        """
            ### Parameters:
            - `extensions` - Iterable of extensions. The principe is same as it is in `FlarumUser`.
        """

        self.extensions = extensions
        super().__init__(**kwargs)

        if self.extensions:
            mixin_extensions(self.extensions)
            self.database = bind_extension_models(self.extensions, self.database)


    def _generic_filter_query(self, cls: _MDL, session: Session, **filters) -> t.List[_MDL]:
        """
            A generic, shorthand function to obtain filtered data from the database.
        """

        return session.query(cls).filter_by(**filters).all()


    def get_access_tokens(self, session: Session, **filters) -> t.List[DB_AccessToken]:
        """
            Obtains access tokens from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_access_tokens(id=1, token='123abc456def')
            ```
        """

        return self._generic_filter_query(DB_AccessToken, session, **filters)


    def get_users(self, session: Session, **filters) -> t.List[DB_User]:
        """
            Obtains users from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_users(id=1, username='SKevo')
            ```
        """

        return self._generic_filter_query(DB_User, session, **filters)


    def get_discussions(self, session: Session, **filters) -> t.List[DB_Discussion]:
        """
            Obtains discussions from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_discussions(id=1, title='Hello')
            ```
        """

        return self._generic_filter_query(DB_Discussion, session, **filters)


    def get_posts(self, **filters) -> t.List[DB_Post]:
        """
            Obtains posts from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_posts(id=1, content='Hello world')
            ```
        """

        return self._generic_filter_query(DB_Post, **filters)
