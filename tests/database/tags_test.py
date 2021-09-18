from peewee import SqliteDatabase

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.extensions.flarum import Flarum_Tags


DATABASE = FlarumDatabase(database=SqliteDatabase('tests/database/database.db'), extensions=[Flarum_Tags.DB_TagsExtension]) # type: Flarum_Tags.DB_TagsFlarumDatabaseMixin



if __name__ == "__main__":
    for tag in DATABASE.get_tags():
        print(
            tag.name,
            tag.last_posted_user.username if tag.last_posted_user else '[deleted]',
            tag.last_posted_discussion.title if tag.last_posted_discussion else '[unknown]',
            sep=', '
        )

        if tag.last_posted_discussion:
            for post in tag.last_posted_discussion.posts:
                print(post.content)
        
        break
