from peewee import SqliteDatabase

from markdownify import markdownify

from pyflarum.database.session import FlarumDatabase


DATABASE = FlarumDatabase(database=SqliteDatabase('tests/database/database.db'))



if __name__ == "__main__":
    for access_token in DATABASE.get_access_tokens():
        print(access_token.user_id.username, access_token.last_activity_at, access_token.last_ip_address, sep=' | ')
