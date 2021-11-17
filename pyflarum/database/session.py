import re
import typing as t

from sqlmodel import SQLModel, Session
from sqlalchemy.future import Engine

from .flarum.core.other import DB_AccessToken
from .flarum.core.users import DB_User
from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

from ..extensions import mixin_extensions, ExtensionMixin


_MDL = t.TypeVar('_MDL', bound=SQLModel)



class FlarumDatabase:
    def __init__(self, engine: Engine, extensions: t.Optional[t.Iterable[ExtensionMixin]]=None, **session_kwargs):
        """
            ### Parameters:
            - `engine` - the `Engine` object (`sqlmodel.create_engine()`).
            - `extensions` - a list of extensions to be used. The principle is same as in `FlarumUser`.
            - `session_kwargs` - any other keyword arguments to be passed to the `Session` object.
        """

        self.extensions = extensions
        self.engine = engine
        self.session = None
        self._skw = session_kwargs

        if self.extensions:
            mixin_extensions(self.extensions)

        self._create_tables()


    def _create_tables(self):
        """
            Creates all tables for the database.
        """

        return SQLModel.metadata.create_all(self.engine)


    def __enter__(self) -> None:
        """
            Initializes a database session.
        """

        self.session = Session(self.engine, **self._skw)
        return self


    def __exit__(self, *_) -> None:
        """
            Closes the database session.
        """

        self.session.close()
        self.session = None


    def requires_session(func: t.Callable) -> t.Callable:
        """
            A decorator to ensure that the database session is initialized before the function is called.
        """

        def wrapper(self: 'FlarumDatabase', *args, **kwargs):
            if not self.session:
                raise RuntimeError('Database session is not initialized. You need to use the database in a context manager, e. g.: `with DATABASE: DATABASE.[...]`')

            return func(self, *args, **kwargs)

        return wrapper



    @requires_session
    def filter(self, cls: _MDL, **filters) -> t.List[_MDL]:
        """
            A generic, shorthand function to obtain filtered data from the database.
        """

        return self.session.query(cls).filter_by(**filters).all()


    @requires_session
    def insert(self, cls: _MDL, **kwargs) -> _MDL:
        """
            A generic, shorthand function to insert data into the database & commit and refresh it.
        """

        inst = cls(**kwargs)

        self.session.add(inst)
        self.session.commit()
        self.session.refresh(inst)

        return inst


    def get_access_tokens(self, **filters) -> t.List[DB_AccessToken]:
        """
            Obtains access tokens from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_access_tokens(id=1, token='123abc456def')
            ```
        """

        return self.filter(DB_AccessToken, **filters)


    def get_users(self, **filters) -> t.List[DB_User]:
        """
            Obtains users from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_users(id=1, username='SKevo')
            ```
        """

        return self.filter(DB_User, **filters)


    def get_discussions(self, **filters) -> t.List[DB_Discussion]:
        """
            Obtains discussions from the database.

            ### Parameters:
            - `**filters` - `key = value` pair of filters.

            ### Example:
            ```python
            DATABASE.get_discussions(id=1, title='Hello')
            ```
        """

        return self.filter(DB_Discussion, **filters)


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

        return self.filter(DB_Post, **filters)
