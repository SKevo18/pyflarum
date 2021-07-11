from typing import Union

from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os

from pyflarum import FlarumUser

from pyflarum.flarum.core.notifications import Notification
from pyflarum.flarum.core.posts import PostFromNotification, PreparedPost

from pyflarum.extensions.watch import WatchFlarumUserMixin, WatchNotificationsExtension
from pyflarum.extensions.commands import CommandsExtension, CommandsFlarumUserMixin


EXTENSIONS = [
    WatchNotificationsExtension,
    CommandsExtension
]

user = FlarumUser(forum_url=os.environ['forum_url'], username="test", password=os.environ['account_password'], extensions=EXTENSIONS) # type: Union[WatchFlarumUserMixin, CommandsFlarumUserMixin]

def on_notification(notification: Notification):
    subject = notification.get_subject()

    if isinstance(subject, PostFromNotification):
        print(subject.content)
        if user.is_mentioned_in(subject.content):
            print("New mention!")
            command = user.parse_as_command(subject.content)

            if command[0].lower() == 'hi':
                reply_post = PreparedPost(user=user, content="Hi!")
                subject.reply_to(reply_post)
                print(f"Replied to post in discussion ID {subject.id}")

            else:
                print("Match not found for command data:", command)
            
            notification.mark_as_read()


user.watch_notifications(on_notification, auto_mark_as_read=False)
