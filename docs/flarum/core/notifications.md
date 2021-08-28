Module pyflarum.flarum.core.notifications
=========================================

Classes
-------

`Notification(user: FlarumUser, _fetched_data: dict)`
:   Notification.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `content: Optional[dict]`
    :   The `dict` of the notification's content.

    `contentType: Optional[str]`
    :   The content type of the notification.
        
        Examples: `newPost`, `postLiked`, etc...

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this notification triggered/created at.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isRead: bool`
    :   Whether or not the notification was read by you.

    `new_post_number: Optional[int]`
    :   The new number of the potential post that triggered
        the notification.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `reply_number: Optional[int]`
    :   The number of the reply post that possibly triggered
        the notification.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `from_user(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   From which user does the notification originate from?
        
        Returns `pyflarum.flarum.core.users.UserFromNotification`.

    `get_subject(self) ‑> Optional[DiscussionFromNotification | PostFromNotification]`
    :   Returns the subject of the notification, either one of these:
        - `pyflarum.flarum.core.discussions.DiscussionFromNotification`
        - `pyflarum.flarum.core.posts.PostFromNotification`

    `mark_as_read(self) ‑> True`
    :   Marks the notification as read.
        
        Returns `True` when successful.

`Notifications(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple notifications fetched from the API.

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

    ### Methods

    `mark_all_as_read(self) ‑> True`
    :   Marks all notifications as read. Returns `True` when successful.