from sqlmodel import create_engine, Session

from pyflarum.database.session import FlarumDatabase


ENGINE = create_engine('sqlite:///tests/database/database.db')
DATABASE = FlarumDatabase(engine=ENGINE)



if __name__ == "__main__":
    # TODO: Handle session better, so it doesn't stay open. Use __enter__ and __exit__ in FlarumDatabaseSession class.

    with Session(ENGINE) as session:
        for user in DATABASE.get_users(session):
            if user.discussions:
                print(user.username, ':', sep='')

                for discussion in user.discussions:
                    print('•', discussion.title)

            else:
                print(user.username, '(no discussions)')
