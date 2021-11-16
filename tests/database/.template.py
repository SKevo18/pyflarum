from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabaseSession


DATABASE = FlarumDatabaseSession(create_engine('sqlite://tests/database/database.db'))



if __name__ == "__main__":
    ...
