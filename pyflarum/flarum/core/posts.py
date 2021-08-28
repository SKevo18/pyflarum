from typing import TYPE_CHECKING, Iterator, Optional

if TYPE_CHECKING:
    from ...session import FlarumUser
    from ...custom_types import AnyDiscussion


from datetime import datetime

from ..core import BaseFlarumBulkObject, BaseFlarumIndividualObject
from ..core.discussions import DiscussionFromNotification
from ..core.users import UserFromBulk
from ...error_handler import parse_request
from ...datetime_conversions import flarum_to_datetime


__all__ = ['PreparedPost', 'Posts', 'Post', 'PostFromBulk', 'PostFromNotification', 'PostFromDiscussion']



class PreparedPost(BaseFlarumIndividualObject):
    """
        A prepared post that can be sent to the API.
    """

    def __init__(self, user: 'FlarumUser', discussion: Optional['AnyDiscussion']=None, content: Optional[str]=None):
        """
            ### Parameters:
            - `user` - the `pyflarum.session.FlarumUser` object that will create the post
            (see `PreparedPost.post()`).
            - `discussion` - any discussion that the post belongs to.
            - `content` - the post's content. You can use the traditional Flarum's markdown syntax.
        """

        self.user = user
        self.discussion = discussion
        self.content = content

        self.as_json = self.to_dict
        super().__init__(user=self.user, _fetched_data=self.as_json)


    @property
    def to_dict(self) -> dict:
        """
            Converts the post to a `dict`, so that
            it can be sent to the API.

            An extension might add additional data during runtime. This is the
            most basic template that Flarum requires when creating a post.
        """

        data = {
            "data": {
                "type": "posts",
                "attributes": {
                    "content": self.content
                },
                "relationships": {
                    "discussion": {
                        "data": {
                            "type": "discussions",
                            "id": self.discussion.id if self.discussion else 0
                        }
                    }
                }
            }
        }

        return data


    def post(self):
        """
            Posts/creates the post. Raises `FlarumError` on error, otherwise it returns the created `Post`.
        """

        raw = self.user.session.post(self.user.api_urls['posts'], json=self.as_json)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)
    create = post



class Posts(BaseFlarumBulkObject):
    """
        A data of multiple posts fetched from `/api/posts`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        return super().__init__(user=user, _fetched_data=_fetched_data, _listclass=PostFromBulk, _required_type='posts')


    if TYPE_CHECKING:
        def __getitem__(self, key: int) -> 'PostFromBulk': ...
        def __iter__(self) -> Iterator['PostFromBulk']: ...



class PostFromDiscussion(BaseFlarumIndividualObject):
    """
        A post from `Discussion`.
    """

    @property
    def number(self) -> Optional[int]:
        """
            The post's number/order in the discussion.
        """

        return self.attributes.get("number", None)


    @property
    def createdAt(self) -> Optional[datetime]:
        """
            The `datetime` of when was this post created.
        """

        raw = self.attributes.get("createdAt", None)

        return flarum_to_datetime(raw)


    @property
    def contentType(self) -> Optional[str]:
        """
            Post's content type. This is usually a `comment` for user-made posts,
            but this can differ if it's actually a message that a post's tags changed, or
            the discussion got moved elsewhere (these messages are treated as posts too by Flarum)
        """

        return self.attributes.get("contentType", None)


    def is_comment(self) -> bool:
        """
            Whether or not the post is comment.
        """

        return self.contentType == 'comment'


    @property
    def contentHtml(self) -> Optional[str]:
        """
            The HTML content of the post.
        """

        return self.attributes.get("contentHtml", None)


    def __restore_or_hide(self, hide: bool) -> 'Post':
        """
            Either restores or hides the post.

            This function was made to prevent code repetition - please
            use `Post.hide()` and `Post.restore()` instead.
        """

        patch_data = {
            "data": {
                "type": "posts",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)


    def hide(self) -> 'Post':
        """
            Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.
        """

        return self.__restore_or_hide(hide=True)


    def restore(self) -> 'Post':
        """
            Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.
        """

        return self.__restore_or_hide(hide=False)
    unhide = restore


    def delete(self) -> True:
        """
            Removes the post forever.

            Returns `True` if the deletion was successful.
        """

        raw = self.user.session.delete(f"{self.user.api_urls['posts']}/{self.id}")
        parse_request(raw)

        return True


    def edit(self, new_post: PreparedPost) -> 'Post':
        """
            Edits the post.

            `new_post` has to be a `PreparedPost` object. Returns the `Post` after edit.
        """

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=new_post.to_dict)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)



class PostFromNotification(PostFromDiscussion):
    """
        A post from `Notification`.
    """

    @property
    def content(self) -> Optional[str]:
        """
            The post's content. Doesn't contain markdown, and is just plain-text.

            Only available in `pyflarum.flarum.core.posts.PostFromNotification`.
        """

        return self.attributes.get("content", None)


    @property
    def ipAddress(self) -> Optional[str]:
        """
            The post's IP address.

            Returns `None` if you don't have the permissions to view IP address
            of the post.
        """

        return self.attributes.get("ipAddress", None)


    @property
    def editedAt(self) -> Optional[datetime]:
        """
            The `datetime` when was this post edited at.
        """

        raw = self.attributes.get("editedAt", None)

        return flarum_to_datetime(raw)


    @property
    def canEdit(self) -> bool:
        """
            Whether or not you are able to edit this post.
        """

        return self.attributes.get("canEdit", False)


    @property
    def canDelete(self) -> bool:
        """
            Whether or not you are able to delete this post.
        """

        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        """
            Whether or not you are able to hide this post.
        """

        return self.attributes.get("canHide", False)


    @property
    def url(self):
        """
            The post's URL.
        """

        discussion_id = self.relationships.get("discussion", {}).get("data", {}).get("id", None)

        if discussion_id:
            return f"{self.user.forum_url}/d/{discussion_id}/{self.number}"


    def get_discussion(self):
        """
            Obtains the discussion of the post.

            Returns `pyflarum.flarum.core.discussions.DiscussionFromNotification`, because its
            JSON data matches.
        """

        id_to_find = self.relationships.get("discussion", {}).get("data", {}).get("id", None)

        for possible_discussion in self._parent_included:
            if (possible_discussion.get("type", None) == "discussions") and (possible_discussion.get("id", None) == id_to_find):
                discussion = DiscussionFromNotification(user=self.user, _fetched_data=dict(data=possible_discussion, _parent_included=self._parent_included))

                return discussion

        return None


    def reply_to(self, post: PreparedPost):
        """
            Replies to this `Post` with another `PreparedPost`.
        """

        post.discussion = self.get_discussion()
        post.as_json = post.to_dict

        return post.post()


    def get_author(self):
        """
            Obtains the post's author.

            Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
            JSON data is the same.
        """

        id = self.relationships.get("user", {}).get("data", {}).get("id", None)
        
        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromBulk(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def edit(self, new_data: PreparedPost):
        """
            Edits the post. The new post should be a `PreparedPost` object.
        """

        raw = self.user.session.patch(f"{self.user.api_urls['posts']}/{self.id}", json=new_data.to_dict)
        json = parse_request(raw)

        return Post(user=self.user, _fetched_data=json)



class PostFromBulk(PostFromNotification):
    """
        A post from `Posts`.
    """

    @property
    def content(self) -> NotImplemented:
        """
            This property is only available for `pyflarum.flarum.core.posts.PostFromNotification`, but
            was included here due to class inheritance.
            
            Using this will just raise `NotImplementedError`, so please do not use this.
        """

        raise NotImplementedError('The `content` property is only available for `PostFromNotification`.')



class Post(PostFromNotification):
    """
        A Flarum post.
    """

    def get_author(self):
        """
            Obtains the post's author.

            Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
            JSON data is the same.
        """

        id = self.relationships.get("user", {}).get("data", {}).get("id", None)
        
        for raw_user in self.included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromBulk(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None
