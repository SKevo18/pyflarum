from peewee import SqliteDatabase

from pyflarum.database.session import FlarumDatabase
from pyflarum.database.extensions.flarum import Malago_Achievements

EXTENSIONS = [
    Malago_Achievements.DB_AchievementsExtension
]

DATABASE = FlarumDatabase(extensions=EXTENSIONS, database=SqliteDatabase('tests/database/database.db')) # type: Malago_Achievements.DB_AchievementsFlarumDatabaseMixin



if __name__ == "__main__":
    for achievement in DATABASE.get_achievements():
        print(f'Name: {achievement.name}, {achievement.points} points.')
