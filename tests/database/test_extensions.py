from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.extensions.flarum.Flarum_Lock import DB_LockExtension


DATABASE = FlarumDatabase(create_engine('sqlite:///tests/database/database.db'), extensions=[DB_LockExtension])


# TODO: Is is possible to monkey-patch this?
if __name__ == "__main__":
    with DATABASE:
        for discussion in DATABASE.get_discussions(is_locked=True):
            print(discussion)
