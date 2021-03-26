from datetime import datetime
from typing import Generator

from pyflarum.classes.extensions.FriendsOfFlarum_Polls import FoF_Poll
from pyflarum.classes.flarum.FlarumPosts import FlarumPost

from pyflarum.functions import flarum_to_datetime
from pyflarum.classes.extensions.Flarum_Tags import FlarumPostDiscussionTagsData

from pyflarum.exceptions import FlarumError


class FlarumDiscussion(dict):
    def __init__(self,
                 title: str=None,
                 content: str=None,
                 tags: FlarumPostDiscussionTagsData=None,
                 poll: FoF_Poll=None,
                 raw: dict=None):
        """
            Initializes the discussion's data.
        """

        if raw is None:
            if title is None or content is None or type(title) == dict:
                raise FlarumError("Discussion title and content is required.")

            template = {
                "data": {
                    "type": "discussions",
                    "attributes": {
                        "title": title,
                        "content": content
                    },
                    "relationships": {}
                }
            }

            if poll is not None:
                if type(poll) == FoF_Poll:
                    template['attributes']['poll'] = poll
                else:
                    raise FlarumError('The poll must be a "FoF_Poll" object.')

            if tags is not None:
                if type(tags) == FlarumPostDiscussionTagsData:
                    template['relationships']['tags'] = tags
                else:
                    raise FlarumError("Tag IDs must be a list.")

            dict.__init__(self, template)

        else:
            if type(raw) == dict:
                dict.__init__(self, raw)
            
            else:
                raise FlarumError("This is not a Flarum discussion.")


    # Main:
    @property
    def id(self) -> str:
        try:
            return self['id']
        except KeyError:
            return None

    @property
    def type(self) -> str:
        try:
            return self['type']
        except KeyError:
            return None

    @property
    def slug(self) -> str:
        try:
            return self['attributes']['slug']
        except KeyError:
            return None

    # Attributes:
    @property
    def title(self) -> str:
        try:
            return self['attributes']['title']
        except KeyError:
            return None
    
    @property
    def commentCount(self) -> int:
        try:
            return self['attributes']['commentCount']
        except KeyError:
            return None
    
    @property
    def participantCount(self) -> int:
        try:
            return self['attributes']['participantCount']
        except KeyError:
            return None
    
    @property
    def createdAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['createdAt'])
        except KeyError:
            return None

    # Included:
    @property
    def posts(self) -> Generator[FlarumPost, None, None]:
        try:
            for post in self['included']:
                if post['type'] == 'posts':
                    yield FlarumPost(post)
                else:
                    continue

        except KeyError:
            return None

    @property
    def poll(self) -> FoF_Poll:
        poll_data = FoF_Poll()

        try:
            for included in self['included']:

                if included['type'] == "polls":
                    poll_data.update(included)
                    continue

                if included['type'] == "poll_options":
                    poll_data['_options'] = []
                    poll_data['_options'].append(included)
                    continue

        except KeyError:
            raise

        return poll_data


class FlarumDiscussions(dict):
    def __init__(self, *args, **kwargs):
        dict.__init__(self, *args, **kwargs)


    @property
    def firstLink(self) -> str:
        try:
            return self['links']['first']
        except KeyError:
            return None
    
    @property
    def nextLink(self) -> str:
        try:
            return self['links']['next']
        except KeyError:
            return None
    
    @property
    def all_discussions(self) -> Generator[FlarumDiscussion, None, None]:
        try:
            for data in self['data']:
                discussion = FlarumDiscussion(raw=data)
                yield discussion

        except KeyError:
            return None
