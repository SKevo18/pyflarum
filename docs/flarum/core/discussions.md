Module pyflarum.flarum.core.discussions
=======================================

Classes
-------

`Discussion(user: FlarumUser, _fetched_data: dict)`
:   A Flarum discussion, obtained directly from the API by ID.
    
    This is the top-level discussion object that contains all the properties of a discussion, and
    inherits properties from all previous discussion-like objects.
    
    Learn more about inheritance [here](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.discussions.DiscussionFromBulk
    * pyflarum.flarum.core.discussions.DiscussionFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete the discussion.

    `canHide: bool`
    :   Whether or not you are able to hide the discussion.

    `canRename: bool`
    :   Whether or not you are able to rename the discussion.

    `canReply: bool`
    :   Whether or not you are able to create a post in the discussion.

    `commentCount: Optional[str]`
    :   Obtains the comment count of the discussion.
        
        A comment is a post made by an user.

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when this discussion was created at.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)

    `isHidden: bool`
    :   Whether or not the discussion is hidden. This happens when
        you delete the discussion for the first time.

    `lastPostNumber: Optional[int]`
    :   Returns the number of the newest post in the
        discussion.

    `lastPostedAt: Optional[datetime.datetime]`
    :   The `datetime` of when the last post in this
        discussion was made, e. g. when was this
        discussion last updated at.

    `lastReadAt: Optional[datetime.datetime]`
    :   The `datetime` when you last read that discussion.

    `lastReadPostNumber: Optional[int]`
    :   Number of a post that you've last read in the discussion.

    `participantCount: Optional[str]`
    :   The participant count of the discussion. This is
        the number of all users that have participated in a
        discussion by posting.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   Returns the discussion's slug
        (consists of ID and dash separated words from discussion's title,
        e. g. `123-some-title`).

    `title: Optional[str]`
    :   Returns the discussion's title.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   Returns the discussion's URL (including slug, if it's available).

    ### Methods

    `delete(self, force: bool = False) ‑> bool`
    :   Scronches the discussion forever. This cannot be reverted.
        
        Use `force=True` to attempt to delete the discussion even if the API states that you can't.

    `get_author(self, mode: Any | Literal["first_number"] = 'first_number') ‑> pyflarum.flarum.core.users.UserFromBulk`
    :   Obtains the discussion's author, AKA. the author
        of the post with number 1 in a discussion.
        
        `mode` allows you to specify the mode that is used to determine whether or not the post is the first post
        of the discussion.
        
        - `'first_number'` - checks if the number of the post is 1 - if yes, it fetches that post's author.
        - `Any` - if anything other than `'first_number'` is passed (e. g. `'first_user``, but this can be anything), then this
        returns the author of the first post in the JSON.
        I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's
        probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?

    `get_first_post(self) ‑> NoReturn`
    :   The `Discussion` object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this
        function was included in `Discussion`, but it does not work!
        
        ### Alternative:
        
        ```python
        discussion = user.get_discussion_by_id(1)
        first_post = discussion.get_posts()[0]
        ```

    `get_full_data(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Makes an additional API call to fetch the full data of the discussion, e. g.
        the top-level discussion class (`Discussion`).
        
        Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

    `get_last_posted_user(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   Obtains the user that posted the latest post in the discussion.
        
        It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
        data matches the data of user from notification. If no user is found, `None` is returned.
        
        This works by fetching it from the `_parent_included` property.

    `get_posts(self) ‑> list`
    :   Returns a list of `pyflarum.flarum.core.posts.PostFromBulk` objects.
        
        It might seem strange why this doesn't return `pyflarum.flarum.core.posts.PostFromDiscussion` instead,
        but these posts are in fact identical to `pyflarum.flarum.core.posts.PostFromBulk`, that's why they are returned.
        
        `pyflarum.flarum.core.posts.PostFromDiscussion` comes from `pyflarum.flarum.core.discussions.DiscussionFromBulk` instead.

    `hide(self, force: bool = False)`
    :   Hides the discussion from the sight of other unprivileged users
        that are not worthy to view such thread.

    `restore(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

    `unhide(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

`DiscussionFromBulk(user: FlarumUser, _fetched_data: dict)`
:   A discussion from `Discussions`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.discussions.DiscussionFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin
    * pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin
    * pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin
    * pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin
    * pyflarum.flarum.core.discussions.Discussion

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete the discussion.

    `canHide: bool`
    :   Whether or not you are able to hide the discussion.

    `canRename: bool`
    :   Whether or not you are able to rename the discussion.

    `canReply: bool`
    :   Whether or not you are able to create a post in the discussion.

    `commentCount: Optional[str]`
    :   Obtains the comment count of the discussion.
        
        A comment is a post made by an user.

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when this discussion was created at.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isHidden: bool`
    :   Whether or not the discussion is hidden. This happens when
        you delete the discussion for the first time.

    `lastPostNumber: Optional[int]`
    :   Returns the number of the newest post in the
        discussion.

    `lastPostedAt: Optional[datetime.datetime]`
    :   The `datetime` of when the last post in this
        discussion was made, e. g. when was this
        discussion last updated at.

    `lastReadAt: Optional[datetime.datetime]`
    :   The `datetime` when you last read that discussion.

    `lastReadPostNumber: Optional[int]`
    :   Number of a post that you've last read in the discussion.

    `participantCount: Optional[str]`
    :   The participant count of the discussion. This is
        the number of all users that have participated in a
        discussion by posting.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   Returns the discussion's slug
        (consists of ID and dash separated words from discussion's title,
        e. g. `123-some-title`).

    `title: Optional[str]`
    :   Returns the discussion's title.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   Returns the discussion's URL (including slug, if it's available).

    ### Methods

    `delete(self, force: bool = False) ‑> bool`
    :   Scronches the discussion forever. This cannot be reverted.
        
        Use `force=True` to attempt to delete the discussion even if the API states that you can't.

    `get_author(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   Obtains the author of the discussion.
        
        It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
        data matches the data of user from notification. If no user is found, `None` is
        returned.
        
        This works by fetching it from the `_parent_included` property.

    `get_first_post(self) ‑> Optional[pyflarum.flarum.core.posts.PostFromDiscussion]`
    :   Obtains the first post of the discussion. If no post is found,
        `None` is returned.
        
        This works by fetching it from the `_parent_included` property.

    `get_full_data(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Makes an additional API call to fetch the full data of the discussion, e. g.
        the top-level discussion class (`Discussion`).
        
        Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

    `get_last_posted_user(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   Obtains the user that posted the latest post in the discussion.
        
        It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
        data matches the data of user from notification. If no user is found, `None` is returned.
        
        This works by fetching it from the `_parent_included` property.

    `hide(self, force: bool = False)`
    :   Hides the discussion from the sight of other unprivileged users
        that are not worthy to view such thread.

    `restore(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

    `unhide(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

`DiscussionFromNotification(user: FlarumUser, _fetched_data: dict)`
:   A discussion from `Notification`. Contains the least
    data from all of the discussion classes (see [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)).
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin
    * pyflarum.flarum.core.discussions.DiscussionFromBulk

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   Returns the discussion's slug
        (consists of ID and dash separated words from discussion's title,
        e. g. `123-some-title`).

    `title: Optional[str]`
    :   Returns the discussion's title.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `delete(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Deletes a discussion forever - this action is irreversible!
        Returns `True` on success, `FlarumError` otherwise.

    `get_full_data(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Makes an additional API call to fetch the full data of the discussion, e. g.
        the top-level discussion class (`Discussion`).
        
        Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

    `hide(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Hides the discussion.
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.

    `restore(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Restores the discussion (unhides).
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.
        
        `Discussion.unhide()` does the same thing.

    `unhide(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Restores the discussion (unhides).
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.
        
        `Discussion.unhide()` does the same thing.

`Discussions(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple discussions fetched from `/api/discussions`.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumBulkObject
    * builtins.list

    ### Instance variables

    `first_link: Optional[str]`
    :   First link in the API.

    `next_link: Optional[str]`
    :   Next link in the API.

    `previous_link: Optional[str]`
    :   Previous link in the API.

`PreparedDiscussion(user: FlarumUser, title: Optional[str] = None, content: Optional[str] = None)`
:   A prepared discussion that can be sent to the API.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object that will create the discussion
    (see `PreparedDiscussion.post()`).
    - `title` - the discussion's title.
    - `content` - discussion's content. You can use the traditional Flarum's markdown syntax.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `to_dict: dict`
    :   Converts the discussion to a `dict`, so that
        it can be sent to the API.
        
        An extension might add additional data during runtime. This is the
        most basic template that Flarum requires when creating a discussion.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `create(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Posts/creates the discussion. Raises `FlarumError` if it failed, otherwise the new `Discussion` is returned.
        This is the same as `PreparedDiscussion.create()`.

    `post(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Posts/creates the discussion. Raises `FlarumError` if it failed, otherwise the new `Discussion` is returned.
        This is the same as `PreparedDiscussion.create()`.