from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.flarum.core.users import DB_User


ENGINE = create_engine('sqlite:///tests/database/database.db')
DATABASE = FlarumDatabase(engine=ENGINE)



if __name__ == "__main__":
    with DATABASE:
        for user in DATABASE.generic_filter(DB_User, id=1).all():
            if user.discussions:
                print(user.username, ':', sep='')

                for discussion in user.discussions:
                    print('•', discussion.title)

            else:
                print(user.username, '(no discussions)')
