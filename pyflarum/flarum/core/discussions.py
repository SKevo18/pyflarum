import typing as t

# Avoid my greatest enemy in Python: circular import:
if t.TYPE_CHECKING:
    from ...session import FlarumUser

from datetime import datetime

from ..core import BaseFlarumBulkObject, BaseFlarumIndividualObject
from ..core.users import UserFromBulk, UserFromNotification
from ...error_handler import FlarumError, parse_request
from ...datetime_conversions import flarum_to_datetime



class PreparedDiscussion(BaseFlarumIndividualObject):
    """
        A prepared discussion that can be sent to the API.
    """

    def __init__(self, user: 'FlarumUser', title: t.Optional[str]=None, content: t.Optional[str]=None):
        """
            ### Parameters:
            - `user` - the `pyflarum.session.FlarumUser` object that will create the discussion
            (see `PreparedDiscussion.post()`).
            - `title` - the discussion's title.
            - `content` - discussion's content. You can use the traditional Flarum's markdown syntax.
        """

        self.user = user
        self.title = title
        self.content = content

        self.as_json = self.to_dict
        super().__init__(user=self.user, _fetched_data=self.as_json)


    @property
    def to_dict(self) -> dict:
        """
            Converts the discussion to a `dict`, so that
            it can be sent to the API.

            An extension might add additional data during runtime. This is the
            most basic template that Flarum requires when creating a discussion.
        """

        data = {
            "data": {
                "type": "discussions",
                "attributes": {
                    "title": self.title,
                    "content": self.content
                }
            }
        }

        return data


    def post(self) -> 'Discussion':
        """
            Posts/creates the discussion. Raises `FlarumError` if it failed, otherwise the new `Discussion` is returned.
            This is the same as `PreparedDiscussion.create()`.
        """

        if not isinstance(self.title, str) or not isinstance(self.content, str):
            raise TypeError(f"Both `title` and `content` parameters must be a `str`.")

        raw = self.user.session.post(self.user.api_urls['discussions'], json=self.as_json)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)
    create = post



class Discussions(BaseFlarumBulkObject):
    """
        A data of multiple discussions fetched from `/api/discussions`.
    """

    def __init__(self, user: 'FlarumUser', _fetched_data: dict):
        return super().__init__(user=user, _fetched_data=_fetched_data, _listclass=DiscussionFromBulk, _required_type='discussions')


    if t.TYPE_CHECKING:
        def __getitem__(self, key: int) -> 'DiscussionFromBulk': ...
        def __iter__(self) -> t.Iterator['DiscussionFromBulk']: ...



class DiscussionFromNotification(BaseFlarumIndividualObject):
    """
        A discussion from `Notification`. Contains the least
        data from all of the discussion classes (see [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)).
    """


    def get_full_data(self) -> 'Discussion':
        """
            Makes an additional API call to fetch the full data of the discussion, e. g.
            the top-level discussion class (`Discussion`).

            Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).
        """

        raw = self.user.session.get(f"{self.user.api_urls['discussions']}/{self.id}")
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)


    @property
    def title(self) -> t.Optional[str]:
        """
            Returns the discussion's title.
        """

        return self.attributes.get("title", None)


    @property
    def slug(self) -> t.Optional[str]:
        """
            Returns the discussion's slug
            (consists of ID and dash separated words from discussion's title,
            e. g. `123-some-title`).
        """

        return self.attributes.get("slug", None)


    def __restore_or_hide(self, hide: bool) -> 'Discussion':
        """
            Either restores or hides the discussion.

            This function was made to prevent code repetition - please
            use `Discussion.hide()` and `Discussion.restore()` instead.
        """

        patch_data = {
            "data": {
                "type": "discussions",
                "id": self.id,
                "attributes": {
                    "isHidden": hide
                }
            }
        }

        raw = self.user.session.patch(f"{self.user.api_urls['discussions']}/{self.id}", json=patch_data)
        json = parse_request(raw)

        return Discussion(user=self.user, _fetched_data=json)


    def hide(self) -> 'Discussion':
        """
            Hides the discussion.
            Raises `FlarumError` if it failed, otherwise the new discussion is returned.
        """

        return self.__restore_or_hide(hide=True)


    def restore(self) -> 'Discussion':
        """
            Restores the discussion (unhides).
            Raises `FlarumError` if it failed, otherwise the new discussion is returned.

            `Discussion.unhide()` does the same thing.
        """

        return self.__restore_or_hide(hide=False)
    unhide = restore


    def delete(self) -> 'Discussion':
        """
            Deletes a discussion forever - this action is irreversible!
            Returns `True` on success, `FlarumError` otherwise.
        """

        raw = self.user.session.delete(f"{self.user.api_urls['discussions']}/{self.id}")
        parse_request(raw)

        return True



# Circular:
from ...flarum.core.posts import PostFromDiscussion
class DiscussionFromBulk(DiscussionFromNotification):
    """
        A discussion from `Discussions`.
    """


    @property
    def url(self):
        """
            Returns the discussion's URL (including slug, if it's available).
        """

        slug = self.slug

        if slug:
            return f"{self.user.forum_url}/d/{slug}"

        else:
            return f"{self.user.forum_url}/d/{self.id}"


    @property
    def commentCount(self) -> t.Optional[str]:
        """
            Obtains the comment count of the discussion.

            A comment is a post made by an user.
        """

        return self.attributes.get("commentCount", None)


    @property
    def participantCount(self) -> t.Optional[str]:
        """
            The participant count of the discussion. This is
            the number of all users that have participated in a
            discussion by posting.
        """

        return self.attributes.get("participantCount", None)


    @property
    def createdAt(self) -> t.Optional[datetime]:
        """
            The `datetime` of when this discussion was created at.
        """

        raw = self.attributes.get("createdAt", None)

        return flarum_to_datetime(raw)


    @property
    def lastPostedAt(self) -> t.Optional[datetime]:
        """
            The `datetime` of when the last post in this
            discussion was made, e. g. when was this
            discussion last updated at.
        """

        raw = self.attributes.get("lastPostedAt", None)

        return flarum_to_datetime(raw)


    @property
    def lastPostNumber(self) -> t.Optional[int]:
        """
            Returns the number of the newest post in the
            discussion.
        """

        return self.attributes.get("lastPostNumber", None)


    @property
    def lastReadPostNumber(self) -> t.Optional[int]:
        """
            Number of a post that you've last read in the discussion.
        """

        return self.attributes.get("lastReadPostNumber", None)


    @property
    def canReply(self) -> bool:
        """
            Whether or not you are able to create a post in the discussion.
        """

        return self.attributes.get("canReply", False)


    @property
    def canRename(self) -> bool:
        """
            Whether or not you are able to rename the discussion.
        """

        return self.attributes.get("canRename", False)


    @property
    def canDelete(self) -> bool:
        """
            Whether or not you are able to delete the discussion.
        """

        return self.attributes.get("canDelete", False)


    @property
    def canHide(self) -> bool:
        """
            Whether or not you are able to hide the discussion.
        """

        return self.attributes.get("canHide", False)


    @property
    def lastReadAt(self) -> t.Optional[datetime]:
        """
            The `datetime` when you last read that discussion.
        """

        raw = self.attributes.get("lastReadAt", None)

        return flarum_to_datetime(raw)


    @property
    def isHidden(self) -> bool:
        """
            Whether or not the discussion is hidden. This happens when
            you delete the discussion for the first time.
        """

        return self.attributes.get("isHidden", False)


    def get_author(self) -> t.Optional[UserFromNotification]:
        """
            Obtains the author of the discussion.

            It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
            data matches the data of user from notification. If no user is found, `None` is
            returned.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("user", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_last_posted_user(self) -> t.Optional[UserFromNotification]:
        """
            Obtains the user that posted the latest post in the discussion.

            It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
            data matches the data of user from notification. If no user is found, `None` is returned.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("lastPostedUser", {}).get("data", {}).get("id", None)

        for raw_user in self._parent_included:
            if raw_user.get("id", None) == id and raw_user.get("type", None) == 'users':
                user = UserFromNotification(user=self.user, _fetched_data=dict(data=raw_user))

                return user

        return None


    def get_first_post(self) -> t.Optional[PostFromDiscussion]:
        """
            Obtains the first post of the discussion. If no post is found,
            `None` is returned.

            This works by fetching it from the `_parent_included` property.
        """

        id = self.relationships.get("firstPost", {}).get("data", {}).get("id", None)

        for raw_post in self._parent_included:
            if raw_post.get("id", None) == id and raw_post.get("type", None) == 'users':
                post = PostFromDiscussion(user=self.user, _fetched_data=dict(data=raw_post))

                return post

        return None


    def __restore_or_hide(self, hide: bool, force: bool=False):
        """
            Either restores or hides the post.

            This function was made to prevent repetitve code, and you should use
            `hide()` or `restore()` (`unhide()`) instead.
        """

        if hide:
            if self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already hidden. Use `force = True` to ignore this error.")

        else:
            if not self.isHidden and not force:
                raise FlarumError(f"Discussion {self.id} is already restored. Use `force = True` to ignore this error.")


        if not self.canHide and not force:
            raise FlarumError(f'You do not have permission to {"hide" if hide else "unhide"} this discussion ({self.id}). Use `force = True` to ignore this error.')

        return super().__restore_or_hide(hide=hide)


    def hide(self, force: bool=False):
        """
            Hides the discussion from the sight of other unprivileged users
            that are not worthy to view such thread.
        """

        return self.__restore_or_hide(hide=True, force=force)


    def restore(self, force: bool=False):
        """
            Restores the discussion (unhides it), bringing it back to life.
        """

        return self.__restore_or_hide(hide=False, force=force)
    unhide = restore


    def delete(self, force: bool=False) -> bool:
        """
            Scronches the discussion forever. This cannot be reverted.

            Use `force=True` to attempt to delete the discussion even if the API states that you can't.
        """

        if not self.canDelete and not force:
            raise FlarumError(f'You do not have permission to delete this discussion ({self.id})')

        else:
            return super().delete()


# Circular:
from ...flarum.core.posts import PostFromBulk
class Discussion(DiscussionFromBulk):
    """
        A Flarum discussion, obtained directly from the API by ID.
        
        This is the top-level discussion object that contains all the properties of a discussion, and
        inherits properties from all previous discussion-like objects.

        Learn more about inheritance [here](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)
    """


    @property
    def included(self) -> t.List[dict]:
        """
            Returns raw list of JSON included data.

            Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)
        """

        return self.get("included", [{}])


    def get_author(self, mode: t.Union[t.Any, 't.Literal["first_number"]']='first_number') -> UserFromBulk:
        """
            Obtains the discussion's author, AKA. the author
            of the post with number 1 in a discussion.

            `mode` allows you to specify the mode that is used to determine whether or not the post is the first post
            of the discussion.

            - `'first_number'` - checks if the number of the post is 1 - if yes, it fetches that post's author.
            - `Any` - if anything other than `'first_number'` is passed (e. g. `'first_user``, but this can be anything), then this
            returns the author of the first post in the JSON.
            I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's
            probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?
        """

        for post in self.get_posts():
            if mode == 'first_number':
                if post.number == 1:
                    author = post.get_author()

                    return author

            else:
                author = post.get_author()
                return author

        return None


    def get_posts(self) -> t.List[PostFromBulk]:
        """
            Returns a list of `pyflarum.flarum.core.posts.PostFromBulk` objects.

            It might seem strange why this doesn't return `pyflarum.flarum.core.posts.PostFromDiscussion` instead,
            but these posts are in fact identical to `pyflarum.flarum.core.posts.PostFromBulk`, that's why they are returned.

            `pyflarum.flarum.core.posts.PostFromDiscussion` comes from `pyflarum.flarum.core.discussions.DiscussionFromBulk` instead.
        """

        all_posts = list()
        raw_posts = self.relationships.get("posts", {}).get("data", [{}]) # type: t.List[dict]

        for raw_post in raw_posts:
            if raw_post.get("type", None) == 'posts':
                id_to_find = raw_post.get("id", None)

                if id_to_find:
                    for possible_raw_post in self.included:
                        if (possible_raw_post.get("type", None) == 'posts') and (possible_raw_post.get("id", None) == id_to_find):
                            post = PostFromBulk(user=self.user, _fetched_data=dict(data=possible_raw_post, _parent_included=self.included))

                            all_posts.append(post)

        return all_posts


    def get_first_post(self) -> t.NoReturn:
        """
            The `Discussion` object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this
            function was included in `Discussion`, but it does not work!

            ### Alternative:

            ```python
            discussion = user.get_discussion_by_id(1)
            first_post = discussion.get_posts()[0]
            ```
        """

        raise NotImplementedError("`Discussion` does not have the first post data to fetch. Please, use the snippet in this function's docstring instead to obtain the first post.")
