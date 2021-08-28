Module pyflarum.extensions.flarum.Flarum_Flags
==============================================

Classes
-------

`FlagsExtension()`
:   https://packagist.org/packages/flarum/flags

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

`FlagsForumMixin(user: FlarumUser, _fetched_data: dict)`
:   Entire forum, lives under the main `/api` route.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.forum.Forum
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `adminUrl: Optional[str]`
    :   The administration panel URL of the forum.

    `allowSignUp: bool`
    :   Whether or not signup is allowed.

    `apiUrl: Optional[str]`
    :   The API URL of the forum.

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `basePath: Optional[str]`
    :   Base path to the forum.

    `baseUrl: Optional[str]`
    :   Base URL of the forum/where the forum is located at.

    `canSearchUsers: bool`
    :   Whether or not you are able to search for users.

    `canStartDiscussion: bool`
    :   Whether or not you are allowed to start a discussion.

    `canViewFlags: bool`
    :   Whether or not you can view all the flags on the forum.

    `canViewForum: bool`
    :   Whether or not you are allowed to view the forum.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `debug: bool`
    :   Whether or not debug mode is enabled.

    `defaultRoute: Optional[str]`
    :   The homepage of the forum (default route)

    `description: Optional[str]`
    :   The description of the forum.

    `faviconUrl: Optional[str]`
    :   URL to forum's favicon.

    `flagCount: Optional[int]`
    :   The total flagged post/discussion count (forum-wide).

    `footerHtml: Optional[str]`
    :   The footer HTML of the forum.

    `guidelinesUrl: Optional[str]`
    :   The URL of the forum's guidelines, if specified by the admin.

    `headerHtml: Optional[str]`
    :   The header HTML of the forum.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)

    `logoUrl: Optional[str]`
    :   URL to forum's logo.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `showLanguageSelector: bool`
    :   Whether or not the language selector is available.

    `themePrimaryColor: Optional[str]`
    :   Forum's primary color in HEX format.

    `themeSecondaryColor: Optional[str]`
    :   Forum's secondary color in HEX format.

    `title: Optional[str]`
    :   The forum's title.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `version: Optional[str]`
    :   The Flarum version this forum is running on.

    `welcomeMessage: Optional[str]`
    :   The welcome message of the forum (shown in the welcome box).

    `welcomeTitle: Optional[str]`
    :   The title of the welcome message box of the forum.

    ### Methods

    `get_groups(self) ‑> list`
    :   Obtains the forum groups.
        
        Returns a list of `Group` objects.

`FlagsPostFromNotificationMixin(user: FlarumUser, _fetched_data: dict)`
:   A post from `Notification`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.posts.PostFromNotification
    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

    `canFlag: bool`
    :

    `canHide: bool`
    :   Whether or not you are able to hide this post.

    `content: Optional[str]`
    :   The post's content. Doesn't contain markdown, and is just plain-text.
        
        Only available in `pyflarum.flarum.core.posts.PostFromNotification`.

    `contentHtml: Optional[str]`
    :   The HTML content of the post.

    `contentType: Optional[str]`
    :   Post's content type. This is usually a `comment` for user-made posts,
        but this can differ if it's actually a message that a post's tags changed, or
        the discussion got moved elsewhere (these messages are treated as posts too by Flarum)

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this post created.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `editedAt: Optional[datetime.datetime]`
    :   The `datetime` when was this post edited at.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `ipAddress: Optional[str]`
    :   The post's IP address.
        
        Returns `None` if you don't have the permissions to view IP address
        of the post.

    `number: Optional[int]`
    :   The post's number/order in the discussion.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    `url`
    :   The post's URL.

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_data: pyflarum.flarum.core.posts.PreparedPost)`
    :   Edits the post. The new post should be a `PreparedPost` object.

    `get_author(self)`
    :   Obtains the post's author.
        
        Returns `pyflarum.flarum.core.users.UserFromBulk`, because its
        JSON data is the same.

    `get_discussion(self)`
    :   Obtains the discussion of the post.
        
        Returns `pyflarum.flarum.core.discussions.DiscussionFromNotification`, because its
        JSON data matches.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `reply_to(self, post: pyflarum.flarum.core.posts.PreparedPost)`
    :   Replies to this `Post` with another `PreparedPost`.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.