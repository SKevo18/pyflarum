Module pyflarum.flarum.core.users
=================================

Classes
-------

`MyUser(user: FlarumUser, _fetched_data: dict)`
:   Your user, contains fullest user data.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.users.User
    * pyflarum.flarum.core.users.UserFromBulk
    * pyflarum.flarum.core.users.UserFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `avatarUrl: Optional[str]`
    :   The user's avatar URL.

    `canDelete: bool`
    :   Whether or not you are able to scronch this user forever.

    `canEdit: bool`
    :   Whether or not you are able to edit this user.

    `canEditCredentials: bool`
    :   Whether or not you are able to edit this user's credentials.

    `canEditGroups: bool`
    :   Whether or not you are able to edit this user's groups.

    `commentCount: Optional[int]`
    :   The user's comment/post count.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `discussionCount: Optional[int]`
    :   The user's discussion count.

    `displayName: Optional[str]`
    :   The display name/nickname of the user.

    `email: Optional[str]`
    :   The user's E-mail, if you have permission to view it.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isEmailConfirmed: bool`
    :   Whether or not this user confirmed their E-mail address.
        
        You must have the permission to view the user's E-mail address
        in order to know this too in the first place.

    `joinTime: Optional[datetime.datetime]`
    :   The `datetime` of when the user had joined this forum.

    `markedAllAsReadAt: Optional[datetime.datetime]`
    :   When did you mark all discussions as read.

    `newNotificationCount: Optional[int]`
    :   Amount of your new notifications.

    `preferences: dict`
    :   A raw `dict` of your preferences (for notifications).

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   The user's slug.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `unreadNotificationCount: Optional[int]`
    :   Amount of your unread notifications.

    `username: Optional[str]`
    :   The user's username.

`User(user: FlarumUser, _fetched_data: dict)`
:   An user that was fetched from the API.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.users.UserFromBulk
    * pyflarum.flarum.core.users.UserFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.flarum.core.users.MyUser

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `avatarUrl: Optional[str]`
    :   The user's avatar URL.

    `canDelete: bool`
    :   Whether or not you are able to scronch this user forever.

    `canEdit: bool`
    :   Whether or not you are able to edit this user.

    `canEditCredentials: bool`
    :   Whether or not you are able to edit this user's credentials.

    `canEditGroups: bool`
    :   Whether or not you are able to edit this user's groups.

    `commentCount: Optional[int]`
    :   The user's comment/post count.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `discussionCount: Optional[int]`
    :   The user's discussion count.

    `displayName: Optional[str]`
    :   The display name/nickname of the user.

    `email: Optional[str]`
    :   The user's E-mail, if you have permission to view it.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isEmailConfirmed: bool`
    :   Whether or not this user confirmed their E-mail address.
        
        You must have the permission to view the user's E-mail address
        in order to know this too in the first place.

    `joinTime: Optional[datetime.datetime]`
    :   The `datetime` of when the user had joined this forum.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   The user's slug.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `username: Optional[str]`
    :   The user's username.

`UserFromBulk(user: FlarumUser, _fetched_data: dict)`
:   An user from `Users`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.users.UserFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin
    * pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin
    * pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin
    * pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin
    * pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin
    * pyflarum.flarum.core.users.User

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `avatarUrl: Optional[str]`
    :   The user's avatar URL.

    `canDelete: bool`
    :   Whether or not you are able to scronch this user forever.

    `canEdit: bool`
    :   Whether or not you are able to edit this user.

    `canEditCredentials: bool`
    :   Whether or not you are able to edit this user's credentials.

    `canEditGroups: bool`
    :   Whether or not you are able to edit this user's groups.

    `commentCount: Optional[int]`
    :   The user's comment/post count.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `discussionCount: Optional[int]`
    :   The user's discussion count.

    `displayName: Optional[str]`
    :   The display name/nickname of the user.

    `email: Optional[str]`
    :   The user's E-mail, if you have permission to view it.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isEmailConfirmed: bool`
    :   Whether or not this user confirmed their E-mail address.
        
        You must have the permission to view the user's E-mail address
        in order to know this too in the first place.

    `joinTime: Optional[datetime.datetime]`
    :   The `datetime` of when the user had joined this forum.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   The user's slug.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `username: Optional[str]`
    :   The user's username.

`UserFromNotification(user: FlarumUser, _fetched_data: dict)`
:   An user from `BaseNotification`
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin
    * pyflarum.flarum.core.users.UserFromBulk

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `avatarUrl: Optional[str]`
    :   The user's avatar URL.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `displayName: Optional[str]`
    :   The display name/nickname of the user.

    `email: Optional[str]`
    :   The user's E-mail, if you have permission to view it.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isEmailConfirmed: bool`
    :   Whether or not this user confirmed their E-mail address.
        
        You must have the permission to view the user's E-mail address
        in order to know this too in the first place.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :   The user's slug.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `username: Optional[str]`
    :   The user's username.

`Users(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple users fetched from the API.

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