from peewee import SqliteDatabase

from markdownify import markdownify

from pyflarum.database.session import FlarumDatabase


DATABASE = FlarumDatabase(database=SqliteDatabase('tests/database/database.db'))



if __name__ == "__main__":
    with DATABASE:
        for post in DATABASE.get_posts():
            if post.type == 'comment':
                print(markdownify(post.content), '\n')


        for access_token in DATABASE.get_access_tokens():
            print(access_token.token, access_token.last_activity_at, sep=' - ')
