from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.flarum.core.users import DB_User


DATABASE = FlarumDatabase(create_engine('sqlite:///tests/database/database.db'))



if __name__ == "__main__":
    with DATABASE:
        DATABASE.create_user(username='test_wfkeoge', password=b'test', email='test@testtest.org')
        saved = DATABASE.generic_filter(DB_User, username='test_wfkeoge').first()
        print(saved)
