from datetime import datetime

from pyflarum.functions import flarum_to_datetime

class FlarumPost(dict):
    def __init__(self, *args):
        dict.__init__(self, *args)
    

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


    # Attributes:
    @property
    def number(self) -> int:
        try:
            return self['attributes']['number']
        except KeyError:
            return None

    @property
    def content_type(self) -> str:
        try:
            return self['attributes']['contentType']
        except KeyError:
            return None
    
    @property
    def content_html(self) -> str:
        try:
            if self.content_type == "comment":
                return self['attributes']['contentHtml']
        except KeyError:
            return None
    
    @property
    def content(self) -> str:
        try:
            if self.content_type == "comment":
                return self['attributes']['content']
        except KeyError:
            return None
    
    @property
    def editedAt(self) -> datetime:
        try:
            return flarum_to_datetime(self['attributes']['editedAt'])
        except KeyError:
            return None
    
    # Permissions:
    @property
    def canEdit(self) -> bool:
        try:
            return self['attributes']['canEdit']
        except KeyError:
            return None

    @property
    def canDelete(self) -> bool:
        try:
            return self['attributes']['canDelete']
        except KeyError:
            return None

    @property
    def canHide(self) -> bool:
        try:
            return self['attributes']['canHide']
        except KeyError:
            return None
    
    @property
    def isApproved(self) -> bool:
        try:
            return self['attributes']['isApproved']
        except KeyError:
            return None
    
    @property
    def canApprove(self) -> bool:
        try:
            return self['attributes']['canApprove']
        except KeyError:
            return None
    
    @property
    def canFlag(self) -> bool:
        try:
            return self['attributes']['canFlag']
        except KeyError:
            return None
    
    @property
    def canLike(self) -> bool:
        try:
            return self['attributes']['canLike']
        except KeyError:
            return None

    @property
    def canBanIP(self) -> bool:
        try:
            return self['attributes']['canBanIP']
        except KeyError:
            return None
    
    # Relationships:
    @property
    def relationships(self) -> dict:
        try:
            return self['relationships']
        except KeyError:
            return None

    @property
    def author(self) -> dict:
        try:
            return self.relationships['user']['data']
        except KeyError:
            return None

    @property
    def author_id(self) -> dict:
        try:
            return self.author['id']
        except KeyError:
            return None

    @property
    def discussion(self) -> dict:
        try:
            return self.relationships['discussion']['data']
        except KeyError:
            return None

    @property
    def discussion_id(self) -> dict:
        try:
            return self.discussion['id']
        except KeyError:
            return None
    
    @property
    def likes(self) -> dict:
        try:
            return self.relationships['likes']['data']
        except KeyError:
            return None

    @property
    def mentioned_by(self) -> dict:
        try:
            return self.relationships['mentionedBy']['data']
        except KeyError:
            return None
