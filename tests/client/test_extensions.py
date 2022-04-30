from dotenv import load_dotenv
load_dotenv()

import os
from datetime import datetime

from pyflarum.client import FlarumUser
from pyflarum.client.extensions import admin
from pyflarum.client.extensions.flarum import Malago_Achievements



def test_extensions():
    USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email='test', password=os.environ['account_password'], extensions=[Malago_Achievements.AchievementsExtension, admin.AdminExtension]) # type: admin.AdminFlarumUserMixin | Malago_Achievements.AchievementsAdminFlarumUserMixin

    # Update forum info:
    USER.update_forum_info(
        forum_description="Peppa Pig",
        forum_title="Hi, I am Peppa Pig *oink*",
        welcome_title="This is my little brother George",
        welcome_message="This is Mommy Pig",
        user_slug_driver="And this is Daddy Pig", # surprisingly, this can be anything, even Daddy Pig
        default_route="/d/12"
    )

    # Clear custom header:
    USER.update_custom_header()

    # Dynamic example: updating custom header to current time
    USER.update_custom_footer(f'<div style="text-align: center; padding: 20px 0;">Extension test was last run at {datetime.now()}</div>')

    # Validation test: raise FlarumError on invalid CSS:
    USER.update_custom_css('I am invalid.')


    # Enable achievements extension:
    USER.enable_extension(Malago_Achievements.AchievementsExtension.ID)
    all_achievements = USER.get_all_achievements()

    name = "test achievement"

    # Prevent double-creation:
    can_create = True
    for achievement in all_achievements:
        print(achievement.name)

        if achievement.name == name:
            can_create = False
            break

    # Create an achievement
    if can_create:
        USER.create_achievement(name="test achievements", description="owo", computation="year:1", points=100, image_url_or_fa_icon="fas fa-magic")



if __name__ == "__main__":
    test_extensions()
