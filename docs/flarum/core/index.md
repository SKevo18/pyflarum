Module pyflarum.flarum.core
===========================

Sub-modules
-----------
* pyflarum.flarum.core.discussions
* pyflarum.flarum.core.filters
* pyflarum.flarum.core.forum
* pyflarum.flarum.core.groups
* pyflarum.flarum.core.notifications
* pyflarum.flarum.core.posts
* pyflarum.flarum.core.users

Classes
-------

`BaseFlarumBulkObject(user: FlarumUser, _fetched_data: dict, _listclass: AnyFlarumClass, _required_type: str)`
:   The base object for Flarum "bulk" objects - all API objects
    that contain other objects have these properties.
    
    Examples of bulk objects:
    - `pyflarum.flarum.core.users.UserFromBulk`
    - `pyflarum.flarum.core.discussions.DiscussionFromBulk`
    - `pyflarum.flarum.core.posts.PostFromBulk`

    ### Ancestors (in MRO)

    * builtins.list

    ### Descendants

    * pyflarum.flarum.core.discussions.Discussions
    * pyflarum.flarum.core.groups.Groups
    * pyflarum.flarum.core.notifications.Notifications
    * pyflarum.flarum.core.posts.Posts
    * pyflarum.flarum.core.users.Users

    ### Instance variables

    `first_link: Optional[str]`
    :   First link in the API.

    `next_link: Optional[str]`
    :   Next link in the API.

    `previous_link: Optional[str]`
    :   Previous link in the API.

`BaseFlarumIndividualObject(user: FlarumUser, _fetched_data: dict)`
:   Base object for Flarum "individual" objects - all
    objects have these properties.
    
    Examples of "individual" objects:
    - `pyflarum.flarum.core.discussions.Discussion`
    - `pyflarum.flarum.core.posts.Post`
    - `pyflarum.flarum.core.PostFromDiscussion`
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.admin.MailSettings
    * pyflarum.extensions.flarum.Flarum_Tags.Tag
    * pyflarum.extensions.flarum.Malago_Achievements.Achievement
    * pyflarum.flarum.core.discussions.DiscussionFromNotification
    * pyflarum.flarum.core.discussions.PreparedDiscussion
    * pyflarum.flarum.core.forum.Forum
    * pyflarum.flarum.core.groups.Group
    * pyflarum.flarum.core.groups.PreparedGroup
    * pyflarum.flarum.core.notifications.Notification
    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.posts.PreparedPost
    * pyflarum.flarum.core.users.UserFromNotification

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

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

`BaseFlarumObject(user: FlarumUser, _fetched_data: dict)`
:   The base Flarum object - all API objects have properties of this object.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * builtins.dict

    ### Descendants

    * pyflarum.flarum.core.BaseFlarumIndividualObject

    ### Instance variables

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.