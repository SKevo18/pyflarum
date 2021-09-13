from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum.client import FlarumUser

from pyflarum.client.flarum.core.notifications import Notification
from pyflarum.client.flarum.core.posts import PostFromNotification, PreparedPost

from pyflarum.client.extensions import watch
from pyflarum.client.extensions import commands
from pyflarum.client.extensions.flarum import Flarum_Likes


EXTENSIONS = [
    watch.WatchExtension,
    commands.CommandsExtension,
    Flarum_Likes.LikesExtension
]

USER = FlarumUser(forum_url=os.environ['forum_url'], username_or_email="test", password=os.environ['account_password'], extensions=EXTENSIONS) # type: watch.WatchFlarumUserMixin | commands.CommandsFlarumUserMixin
API_KEY = os.environ['openweather_api_key']

WEATHER_POST_TEMPLATE = """**{city}**, `{country}` has **{weather}** and __{temperature} °C__"""



def on_notification(notification: Notification):
    subject = notification.get_subject()

    if isinstance(subject, PostFromNotification):
        subject: Flarum_Likes.LikesPostFromNotificationMixin

        if USER.is_mentioned_in(subject.content):
            print("New mention!")
            command = USER.parse_as_command(subject.content)

            if command[0].lower() == 'weather':
                if command[1]:
                    city = command[1].strip()
                    weather_data = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric").json() # type: dict

                    reply_post = PreparedPost(user=USER, content=WEATHER_POST_TEMPLATE.format(
                        city=city,
                        country=weather_data.get("sys", {}).get("country", "N/A"),
                        weather=weather_data.get("weather", [{}])[0].get("description", "unknown weather"),
                        temperature=weather_data.get("main", {}).get("temp", "N/A"))
                    )
        
                    subject.reply_to(reply_post)

                    print(f"Replied to post in discussion ID {subject.id} (weather)")

                else:
                    subject.reply_to(PreparedPost(user=USER, content="Please, specify the city."))

                    print("No city specified for 'weather' command")
            
            elif command[0].lower() == "like":
                liked = subject.like()
                print(f"Successfuly liked post {liked.id} ({liked.url})")

            else:
                print("Match not found for command data:", command)
            
            notification.mark_as_read()



if __name__ == "__main__":
    print(f"Watching notifications as user '{USER.username}'...")
    USER.watch_notifications(on_notification, auto_mark_as_read=False)
