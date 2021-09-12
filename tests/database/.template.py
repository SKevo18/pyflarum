from peewee import SqliteDatabase

from pyflarum.database.session import FlarumDatabase


DATABASE = FlarumDatabase(SqliteDatabase('tests/database/database.db'))


if __name__ == "__main__":
    ...
