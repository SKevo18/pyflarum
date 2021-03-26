from datetime import datetime
from typing import Generator

from pyflarum.functions import flarum_to_datetime


class FlarumNotification(dict):
    """
        This represents a Flarum notification.
    """

    def __init__(self, *args, **kwargs):
        """
            Initializes the notification data.
        """

        if args[0]['type'] == 'notifications':
            dict.__init__(self, *args, **kwargs)

        else:
            raise TypeError("This is not a Flarum notification.")


    # Main:
    @property
    def id(self) -> str:
        """The notification's ID"""

        try:
            return self['id']
        except KeyError:
            return None

    @property
    def type(self) -> str:
        """The type of the notification. This should be always `notifications`, otherwise a `TypeError` is raised."""

        try:
            return self['type']
        except KeyError:
            return None

    @property
    def attributes(self) -> dict:
        """A raw data `dict` of notification's attributes."""

        try:
            return self['attributes']
        except KeyError:
            return None

    @property
    def contentType(self) -> str:
        """Notification's content type. This varies with different notification types."""

        try:
            return self.attributes['contentType']
        except KeyError:
            return None

    @property
    def content(self) -> dict:
        """The notification's content. Currently, this is always `None`, except for new post notification."""

        try:
            return self.attributes['content']
        except KeyError:
            return None
    
    @property
    def createdAt(self) -> datetime:
        """The `datetime` when the notification was created."""

        try:
            return flarum_to_datetime(self.attributes['createdAt'])
        except KeyError:
            return None

    @property
    def isRead(self) -> bool:
        try:
            return self.attributes['isRead']
        except KeyError:
            return None
    
    @property
    def relationships(self) -> dict:
        """The raw `dict` data of notification's relationships."""

        try:
            return self['relationships']
        except KeyError:
            return None

    @property
    def from_type(self) -> int:
        """
            The user/something's(?) type that triggered the notification. At the moment, this is always `"users"`
            (because only users can trigger notifications), but I kept this here in case an update or extension
            changes this behavior, so you can check who/what triggered the notification.
        """

        try:
            return self.relationships['fromUser']['data']['type']
        except KeyError:
            return None

    @property
    def from_id(self) -> int:
        """The user/something's(?) ID that triggered the notification."""

        try:
            return self.relationships['fromUser']['data']['id']
        except KeyError:
            return None

    @property
    def subject_type(self) -> int:
        """The subject's type this notification was triggered in. This can be `"discussions"` or `"posts"`."""

        try:
            return self.relationships['subject']['data']['type']
        except KeyError:
            return None

    @property
    def subject_id(self) -> int:
        """
            The subject's ID this notification was triggered in. A subject can be a discussion or post. Check `subject_type`.
            So, in case the notification was triggered by a post, then this will be that post's ID.
        """

        try:
            return self.relationships['subject']['data']['id']
        except KeyError:
            return None


class FlarumNewPostNotification(FlarumNotification):
    """
        Represents the "new post" Flarum notification (when a new post is made in a discussion the user follows).
    """

    def __init__(self, *args, **kwargs):
        """
            Initializes the Flarum new post notification's data. If `contentType` is not `newPost`, a `TypeError` is raised.
        """

        if args[0]['attributes']['contentType'] == "newPost":
            FlarumNotification.__init__(self, *args, **kwargs)

        else:
            raise TypeError("This is not a new post notification.")

    @property
    def postNumber(self) -> str:
        """The post number in a discussion this notification was triggered in. This is NOT post's ID."""

        try:
            return self.content['postNumber']
        except KeyError:
            return None


class FlarumPostMentionedNotification(FlarumNotification):
    """
        Represents the "post mentioned" Flarum notification (when someone mentions your post by replying to it).
    """

    def __init__(self, *args, **kwargs):
        """
            Initializes the Flarum post mentioned notification's data. If `contentType` is not `postMentioned`, a `TypeError` is raised.
        """

        if args[0]['attributes']['contentType'] == "postMentioned":
            FlarumNotification.__init__(self, *args, **kwargs)

        else:
            raise TypeError("This is not a post mentioned notification.")

    @property
    def replyNumber(self) -> str:
        """The post number in a discussion this notification was triggered in. This is NOT post's ID."""

        try:
            return self.content['replyNumber']
        except KeyError:
            return None


class FlarumNotifications(dict):
    """
        A collection of bulk obtained notifications.
    """

    def __init__(self, *args, **kwargs):
        """
            Initializes the notifications' data.
        """

        dict.__init__(self, *args, **kwargs)


    @property
    def rawData(self) -> dict:
        """
            Raw JSON data of all notifications, as it came from the API.
        """

        try:
            return self
        except KeyError:
            return None

    @property
    def new_posts(self) -> Generator[FlarumNewPostNotification, None, None]:
        """
            Represents all notifications about new posts in a discussion you're following.
        """

        try:
            for data in self['data']:
                if data['attributes']['contentType'] == "newPost":
                    yield FlarumNewPostNotification(data)

        except KeyError:
            return None
    
    @property
    def post_mentions(self) -> Generator[FlarumPostMentionedNotification, None, None]:
        """
            Represents all notifications about replies on your post/when
            someone mentions your post (by replying to it).
        """

        try:
            for data in self['data']:
                if data['attributes']['contentType'] == "postMentioned":
                    yield FlarumPostMentionedNotification(data)

        except KeyError:
            return None
    
    @property
    def user_mentions(self) -> Generator[FlarumNotification, None, None]:
        """
            Represents all notifications about your mentions (when someone mentions you).
        """

        try:
            for data in self['data']:
                if data['attributes']['contentType'] == "userMentioned":
                    yield FlarumNotification(data)

        except KeyError:
            return None
    
    @property
    def liked_posts(self) -> Generator[FlarumNotification, None, None]:
        """
            Represents all notifications about liked posts (when someone likes one of your posts).
        """

        try:
            for data in self['data']:
                if data['attributes']['contentType'] == "postLiked":
                    yield FlarumNotification(data)

        except KeyError:
            return None
