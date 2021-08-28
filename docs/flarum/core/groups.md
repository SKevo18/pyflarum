Module pyflarum.flarum.core.groups
==================================

Classes
-------

`Group(user: FlarumUser, _fetched_data: dict)`
:   A Flarum group.
    
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

    `color: Optional[str]`
    :   The color of the group.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `icon: Optional[str]`
    :   [FontAwesome](https://fontawesome.com/v5.15/icons?d=gallery) icon of the group.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isHidden: bool`
    :   Whether or not the group is hidden on the forum.

    `namePlural: Optional[str]`
    :   Plural form of the group's name.

    `nameSingular: Optional[str]`
    :   Singular form of the group's name.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `delete(self) ‑> True`
    :   Removes the group forever. This is irreversible!
        
        Returns `True` when the deletion was successful.

    `edit(self, new_data: pyflarum.flarum.core.groups.PreparedGroup) ‑> pyflarum.flarum.core.groups.Group`
    :   Edits the group with new `PreparedGroup`.
        
        Returns the edited `Group`

`Groups(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple groups fetched from the API.

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

`PreparedGroup(user: FlarumUser, nameSingular: str, namePlural: Optional[str] = None, color: Optional[str] = None, icon: Optional[str] = None, isHidden: bool = False)`
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
    :   Converts the group to a `dict`, so that
        it can be sent to the API.
        
        An extension might add additional data during runtime. This is the
        most basic template that Flarum requires when creating a group.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `create(self) ‑> pyflarum.flarum.core.groups.Group`
    :   Creates the group. Returns the created `Group`.