from sqlmodel import create_engine

from pyflarum.database.session import FlarumDatabase


ENGINE = create_engine('sqlite:///tests/database/database.db')
DATABASE = FlarumDatabase(engine=ENGINE)



if __name__ == "__main__":
    with DATABASE:
        for user in DATABASE.get_users():
            if user.discussions:
                print(user.username, ':', sep='')

                for discussion in user.discussions:
                    print('•', discussion.title)

            else:
                print(user.username, '(no discussions)')
