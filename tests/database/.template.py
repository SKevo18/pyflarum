from peewee import SqliteDatabase

from pyflarum.database.session import FlarumDatabaseSession


DATABASE = FlarumDatabaseSession(SqliteDatabase('tests/database/database.db'))



if __name__ == "__main__":
    ...
