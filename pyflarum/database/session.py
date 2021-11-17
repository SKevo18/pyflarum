import typing as t

from sqlmodel import SQLModel, Session
from sqlalchemy.future import Engine
from sqlalchemy.orm.query import Query
from sqlalchemy.exc import IntegrityError

from .flarum.core.other import DB_AccessToken
from .flarum.core.users import DB_User
from .flarum.core.discussions import DB_Discussion
from .flarum.core.posts import DB_Post

try:
    import bcrypt # type: ignore
except ImportError:
    bcrypt = None


_MDL = t.TypeVar('_MDL')



class FlarumDatabase:
    MODELS = [DB_AccessToken, DB_User, DB_Discussion, DB_Post]


    def __init__(self, engine: Engine, **session_kwargs):
        """
            ### Parameters:
            - `engine` - the `Engine` object (`sqlmodel.create_engine()`).
            - `session_kwargs` - any other keyword arguments to be passed to the `Session` object.
        """

        self.engine = engine
        self.session = None
        self._skw = session_kwargs

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


    def requires_session(function):
        """
            A decorator to ensure that the database session is initialized before the function is called.
        """

        def wrapper(self: 'FlarumDatabase', *args, **kwargs):
            if not self.session:
                raise RuntimeError('Database session is not initialized. You need to use the database in a context manager, e. g.: `with DATABASE: DATABASE.session.[...]`')

            return function(self, *args, **kwargs)

        return wrapper



    @requires_session
    def generic_filter(self, cls: _MDL, **filters) -> 'Query[_MDL]':
        """
            A generic, shorthand function to obtain filtered data from the database.
        """

        return self.session.query(cls).filter_by(**filters)


    @requires_session
    def generic_insert(self, cls: _MDL, **kwargs) -> _MDL:
        """
            A generic, shorthand function to insert data into the database & commit and refresh it.
        """

        inst = cls(**kwargs)

        self.session.add(inst)


        try:
            self.session.commit()

        except IntegrityError:
            self.session.rollback()
            raise ValueError("One of the user's data is not unique.")


        self.session.refresh(inst)
        return inst



    def create_user(self, username: str, password: bytes, nickname: t.Optional[str]=None, **kwargs) -> DB_User:
        """
            Creates a new user and inserts it in the database.
        """

        if not bcrypt:
            raise RuntimeError('`bcrypt` module is not installed.')

        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())

        if not nickname:
            nickname = username


        return self.generic_insert(DB_User, username=username, password=hashed_password, nickname=nickname, **kwargs)
