from peewee import SqliteDatabase

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.extensions.flarum import Flarum_Lock, Flarum_Sticky


EXTENSIONS = [
    Flarum_Lock.DB_LockExtension,
    Flarum_Sticky.DB_StickyExtension
]

DATABASE = FlarumDatabase(extensions=EXTENSIONS, database=SqliteDatabase('tests/database/database.db')) # type: Flarum_Lock.DB_LockFlarumDatabaseMixin | Flarum_Sticky.DB_StickyFlarumDatabaseMixin



if __name__ == "__main__":
    print("Locked:")
    for discussion in DATABASE.get_locked_discussions():
        print(discussion.uri, discussion.is_locked, sep=' - ')
    print("Count:", DATABASE.get_locked_discussions(query=True).count(DATABASE.database))


    print("\nSticky:")
    for discussion in DATABASE.get_sticky_discussions():
        print(discussion.uri, discussion.is_sticky, sep=' - ')
    print("Count:", DATABASE.get_sticky_discussions(query=True).count(DATABASE.database))
