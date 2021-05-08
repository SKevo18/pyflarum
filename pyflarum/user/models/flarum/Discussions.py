# -*- coding: utf-8 -*-
from typing import Dict, Generator, List, Union
from datetime import datetime

from pyflarum.date_conversions import flarum_to_datetime
from pyflarum.user.models.flarum.Posts import FlarumIncludedPostFromDiscussion


class FlarumDiscussionFromBulk(dict):
    """
        Represents `FlarumDiscussion` in `FlarumDiscussions` - when obtaining discussions in bulk,
        there are not all properties as if the discussion was obtained directly by ID. This is a
        limitation of Flarum itself, and it is in order to prevent database stress and
        to simplify the API.
    """


    @property
    def data(self) -> dict:
        """A raw `dict` of this discussion's data."""
        return self.get("data", {})


    @property
    def type(self) -> str:
        """The type of the discussion. This should always be '`discussions`'."""
        return self.data.get("type", "discussions")


    @property
    def id(self) -> int:
        """The discussion's unique identifier."""
        return self.data.get("id", 0)


    @property
    def attributes(self) -> dict:
        """A raw `dict` of this discussion's attributes."""
        return self.data.get("attributes", dict())


    @property
    def title(self) -> str:
        """The discussion's title."""
        return self.attributes.get("title", None)


    @property
    def slug(self) -> str:
        """The slug of the discussion (can be seen in the URL)."""
        return self.attributes.get("slug", None)


    @property
    def commentCount(self) -> int:
        """The comment/post count of this discussion, including the first post."""
        return self.attributes.get("commentCount", 0)


    @property
    def participantCount(self) -> int:
        """How many users have participated in this discussion."""
        return self.attributes.get("participantCount", 0)


    @property
    def createdAt(self) -> datetime:
        """The `datetime` when was this post last created at."""
        raw = self.attributes.get("createdAt", None)
        return flarum_to_datetime(raw)


    @property
    def lastPostedAt(self) -> datetime:
        """The `datetime` when was a post last posted in this discussion."""
        raw = self.attributes.get("lastPostedAt", None)
        return flarum_to_datetime(raw)


    @property
    def lastPostNumber(self) -> int:
        """The number/position of the last post. This is not the post's ID."""
        return self.attributes.get("lastPostNumber", 0)


    @property
    def canReply(self) -> bool:
        """Whether or not you can reply to this discussion."""
        return self.attributes.get("canReply", False)


    @property
    def canRename(self) -> bool:
        """Whether or not you can rename this discussion."""
        return self.attributes.get("canRename", False)


    @property
    def canDelete(self) -> bool:
        """Whether or not you can delete this discussion."""
        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        """Whether or not you are allowed to hide this discussion."""
        return self.attributes.get("canHide", False)


    @property
    def lastReadAt(self) -> datetime:
        """The `datetime` when was this discussion last viewed/read at."""
        raw = self.attributes.get("lastReadAt", None)
        return flarum_to_datetime(raw)


    @property
    def lastReadPostNumber(self) -> int:
        """The number of the last read post (by you). This is not the post's ID."""
        return self.attributes.get("lastReadPostNumber", 0)


    @property
    def isApproved(self) -> bool:
        """Whether or not the discussion is approved by moderators."""
        return self.attributes.get("isApproved", False)


    @property
    def subscription(self) -> bool:
        # TODO: wat is dis
        return self.attributes.get("subscription", False)


    @property
    def canTag(self) -> bool:
        """Whether or not you can tag/change tags in this discussion."""
        return self.attributes.get("canTag", False)


    @property
    def canMerge(self) -> bool:
        """Whether or not you can merge this discussion."""
        return self.attributes.get("canMerge", False)


    @property
    def canSplit(self) -> bool:
        """Whether or not you can split posts in this discussion."""
        return self.attributes.get("canSplit", False)


    @property
    def fof_prevent_necrobumping(self):
        # TODO: wat is dis
        return self.attributes.get("fof-prevent-necrobumping")


    @property
    def hasBestAnswer(self) -> bool:
        """Whether or not this discussion has a best answer set."""
        return self.attributes.get("hasBestAnswer", False)


    @property
    def canSelectBestAnswer(self) -> bool:
        """Whether or not you can set a best answer for this discussion."""
        return self.attributes.get("canSelectBestAnswer", False)


    @property
    def bestAnswerSetAt(self) -> bool:
        """When was the best answer set for this discussion."""
        raw = self.attributes.get("bestAnswerSetAt", None)
        return flarum_to_datetime(raw)


    @property
    def replyTemplate(self) -> str:
        """The reply template for this discussion."""
        return self.attributes.get("replyTemplate", "")


    @property
    def canManageReplyTemplates(self) -> bool:
        """Whether or not you can manage reply templates for this discussion."""
        return self.attributes.get("canManageReplyTemplates", False)


    @property
    def isSticky(self) -> bool:
        """Whether or not this discussion is sticky."""
        return self.attributes.get("isSticky", False)


    @property
    def canSticky(self) -> bool:
        """Whether or not you can stick this discussion."""
        return self.attributes.get("canSticky", False)


    @property
    def isLocked(self) -> bool:
        """Whether or not this discussion is locked."""
        return self.attributes.get("isLocked", False)


    @property
    def canLock(self) -> bool:
        """Whether or not you can lock this discussion."""
        return self.attributes.get("canLock", False)


class FlarumDiscussion(FlarumDiscussionFromBulk, dict):
    """
        Represents a `FlarumDiscussion` obtained directly from the API.
        Inherits from `FlarumDiscussionFromBulk`, since the properties
        from that are included there too.
    """

    def __init__(self, title: str=None, content: str=None, raw: dict=None):
        if raw != None:
            super().__init__(raw)

        else:
            if title is None or content is None:
                raise Exception("Discussion 'title' and 'content' is required.")

            data = dict({
                "data": {
                    "type": "discussions",
                    "attributes": {
                        "title": str(title),
                        "content": str(content)
                    },
                    "relationships": dict()
                }
            })

            super().__init__(data)


    @property
    def included(self) -> List[dict]:
        """Raw data included in the discussion (such as posts, users...)"""
        return self.get("included", list())


    @property
    def posts(self) -> Generator[FlarumIncludedPostFromDiscussion, None, None]:
        for raw in self.included:
            if raw.get("attributes", {}).get("contentType", None) == "comment":
                post = FlarumIncludedPostFromDiscussion(data=raw)

                yield post

            else:
                continue


class FlarumDiscussions(dict):
    @property
    def links(self) -> Dict[str, str]:
        return self.get("links", {})


    @property
    def first_link(self) -> str:
        """Link to the first API page."""
        return self.links.get("first", None)


    @property
    def next_link(self) -> str:
        """Link to the next API page."""
        return self.links.get("next", None)


    @property
    def previous_link(self) -> str:
        """Link to the previous API page."""
        return self.links.get("prev", None)


    @property
    def data(self) -> List[FlarumDiscussionFromBulk]:
        """A raw `list` of this discussion list's discussions."""
        return self.get("data", list())


    @property
    def discussions(self) -> Generator[FlarumDiscussionFromBulk, None, None]:
        """A `generator` of this discussion list's discussions."""
        for r in self.data:
            if r.get("type", None) == "discussions":
                raw = dict(data=r)

                yield FlarumDiscussionFromBulk(raw)


    def included(self) -> Generator[Union[dict, FlarumDiscussion, list], None, None]:
        included = self.get("included", []) # type: List[dict]

        for include in included: # TODO: IncludedUser, IncludedDiscussion...
            if include.get("type", None) == "users":
                yield dict(include)
            
            elif include.get("type", None) == "discussions":
                yield FlarumDiscussion(raw=include)
            
            else:
                yield list(included)


    def __iter__(self) -> Generator[FlarumDiscussion, None, None]:
        return self.discussions
