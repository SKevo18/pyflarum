# -*- coding: utf-8 -*-
from typing import Union
from datetime import datetime

from pyflarum.date_conversions import flarum_to_datetime


class FlarumIncludedPostFromDiscussion(dict):
    """
        Represents a generic Flarum post in `FlarumDiscussion`. Not all properties
        are included in this post.
    """

    @property
    def data(self) -> dict:
        """A raw `dict` of this post's data."""
        return self.get("data", {})


    @property
    def type(self) -> str:
        """The type of the post. This should always be '`posts`'."""
        return self.data.get("type", "posts")


    @property
    def id(self) -> int:
        """The posts's unique identifier."""
        return self.data.get("id", 0)


    @property
    def attributes(self) -> dict:
        """A raw `dict` of this post's attributes."""
        return self.data.get("attributes", dict())


    @property
    def number(self) -> int:
        """The position/number of this post in its discussion."""
        return self.attributes.get("number", 0)


    @property
    def createdAt(self) -> datetime:
        """The `datetime` when was this discussion created."""
        raw = self.attributes.get("createdAt", None)
        return flarum_to_datetime(raw)


    @property
    def contentType(self) -> str:
        """Content type of this post (ex.: 'comment')."""
        return self.attributes.get("contentType", None)


    @property
    def content(self) -> Union[str, None]:
        """The post's content (can be HTML or other kind of data - notification
        that the discussion was pinned is treated as post too, for example)."""
        type = self.contentType

        if type == "comment":
            return self.attributes.get("contentHtml", None)
        else:
            return self.attributes.get("content", None)


    @property
    def isComment(self) -> bool:
        """(Non-Flarum) Whether or not this post contains HTML content."""
        if self.contentType == "comment":
            return True
        else:
            return False


    @property
    def canEdit(self) -> bool:
        """Whether or not you can edit this post."""
        return self.attributes.get("canEdit", False)


    @property
    def canDelete(self) -> bool:
        """Whether or not you can delete this post."""
        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        """Whether or not you can hide this post."""
        return self.attributes.get("canHide", False)


    @property
    def canFlag(self) -> bool:
        """Whether or not you can flag this post."""
        return self.attributes.get("canFlag", False)


    @property
    def canLike(self) -> bool:
        """Whether or not you can like this post."""
        return self.attributes.get("canLike", False)


    @property
    def canBanIP(self) -> bool:
        """Whether or not you can ban IP of this post's author."""
        return self.attributes.get("canBanIP", False)


    @property
    def isApproved(self) -> bool:
        """Whether or not this post is approved."""
        return self.attributes.get("isApproved", False)


    @property
    def canApprove(self) -> bool:
        """Whether or not you can approve this post."""
        return self.attributes.get("canApprove", False)


class FlarumPost(FlarumIncludedPostFromDiscussion, dict):
    """
        Represents a `FlarumPost` obtained directly from the API by post's ID.
        Inherits from `FlarumIncludedPostFromDiscussion`, since the properties
        from that are included there too.
    """

    def __init__(self, content: str=None, raw: dict=None):
        if raw != None:
            super().__init__(raw)

        else:
            if content is None:
                raise Exception("Post 'content' is required.")

            data = dict({
                "data": {
                    "type": "posts",
                    "attributes": {
                        "content": str(content)
                    },
                    "relationships": dict()
                }
            })

            super().__init__(data)
