from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabase


DATABASE = FlarumDatabase(create_engine('sqlite:///tests/database/database.db'))



if __name__ == "__main__":
    with DATABASE:
        ...
