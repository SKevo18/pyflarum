Module pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings
==============================================================

Classes
-------

`ModeratorWarningsExtension()`
:   https://extiverse.com/extension/askvortsov/flarum-moderator-warnings

    ### Ancestors (in MRO)

    * pyflarum.extensions.ExtensionMixin

    ### Methods

    `get_dependencies(self)`
    :   This should return the following `dict`:
        ```python
        {
            "hard": [<class>, <class>, ...],
            "soft": [<class>, <class>, ...]
        }
        ```
        
        A dependency is anything that you can pass into `FlarumUser(extensions=[...])` (e. g. an extension class).
        
        #### Hard-dependencies:
        - Will raise an error when they're not found in the initialized `FlarumUser` object. It is impossible for the extension
        to function without these.
        
        #### Soft-dependencies:
        - Will raise just a warning. It is possible for the extension to function without these, although with limitations
        (such that some functions might be unavailable).

    `mixin(self)`
    :   A function to mix-in/merge properties, methods, functions, etc... of one class into another.
        
        This skips all functions and properties starting with `__` (double underscore), unless `skip_protected` is False.
        
        This sets/overwrites attributes of `class_to_patch` to attributes of
        `class_to_mix_in` (monkey-patch).
        
        ### Example:
        ```python
        extension.mixin(myclass, pyflarum_class)
        ```

`ModeratorWarningsUserFromBulkMixin(user: FlarumUser, _fetched_data: dict)`
:   An user from `Users`.
    
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

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `avatarUrl: Optional[str]`
    :   The user's avatar URL.

    `canDelete: bool`
    :   Whether or not you are able to scronch this user forever.

    `canDeleteWarnings: bool`
    :   Whether or not you can delete the user's warnings.

    `canEdit: bool`
    :   Whether or not you are able to edit this user.

    `canEditCredentials: bool`
    :   Whether or not you are able to edit this user's credentials.

    `canEditGroups: bool`
    :   Whether or not you are able to edit this user's groups.

    `canManageWarnings: bool`
    :   Whether or not you are able to manage the user's warnings.

    `canViewWarnings: bool`
    :   Whether or not you can view the warnings of the user.

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

    `visibleWarningCount: int`
    :   The amount of warnings that you can see that belong to the user.