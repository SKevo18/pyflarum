from typing import Union

from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
import requests

from pyflarum import FlarumUser

from pyflarum.flarum.core.notifications import Notification
from pyflarum.flarum.core.posts import PostFromNotification, PreparedPost

from pyflarum.extensions.watch import WatchFlarumUserMixin, WatchExtension
from pyflarum.extensions.commands import CommandsExtension, CommandsFlarumUserMixin


EXTENSIONS = [
    WatchExtension,
    CommandsExtension
]

user = FlarumUser(forum_url=os.environ['forum_url'], username="test", password=os.environ['account_password'], extensions=EXTENSIONS) # type: Union[WatchFlarumUserMixin, CommandsFlarumUserMixin]
api_key = os.environ['openweather_api_key']

weather_post = """**{city}**, `{country}` has **{weather}** and __{temperature} °C__"""

def on_notification(notification: Notification):
    subject = notification.get_subject()

    if isinstance(subject, PostFromNotification):
        if user.is_mentioned_in(subject.content):
            print("New mention!")
            command = user.parse_as_command(subject.content)

            if command[0].lower() == 'weather':
                if command[1]:
                    city = command[1].strip()
                    weather_data = requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric").json() # type: dict

                    reply_post = PreparedPost(user=user, content=weather_post.format(
                        city=city,
                        country=weather_data.get("sys", {}).get("country", "N/A"),
                        weather=weather_data.get("weather", [{}])[0].get("description", "unknown weather"),
                        temperature=weather_data.get("main", {}).get("temp", "N/A"))
                    )
        
                    subject.reply_to(reply_post)

                    print(f"Replied to post in discussion ID {subject.id} (weather)")

                else:
                    subject.reply_to(PreparedPost(user=user, content="Please, specify the city."))

                    print("No city specified for 'weather' command")

            else:
                print("Match not found for command data:", command)
            
            notification.mark_as_read()


if __name__ == "__main__":
    print(f"Watching notifications as user '{user.username}'...")
    user.watch_notifications(on_notification, auto_mark_as_read=False)
