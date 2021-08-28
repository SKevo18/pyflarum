Module pyflarum.extensions.flarum.Flarum_Tags
=============================================

Classes
-------

`Tag(user: FlarumUser, _fetched_data: dict)`
:   A Flarum tag.
    
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

    `backgroundMode: Optional[str]`
    :

    `backgroundUrl: Optional[str]`
    :

    `canAddToDiscussion: bool`
    :

    `canStartDiscussion: bool`
    :

    `color: str`
    :

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `defaultSort: Optional[str]`
    :

    `description: Optional[str]`
    :

    `discussionCount: Optional[int]`
    :

    `icon: Optional[str]`
    :

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isChild: bool`
    :

    `isHidden: bool`
    :

    `lastPostedAt: Optional[datetime.datetime]`
    :

    `name: Optional[str]`
    :

    `position: Optional[int]`
    :

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `slug: Optional[str]`
    :

    `subscription: Optional[str]`
    :

    `template: str`
    :

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `get_parent_tag(self, force: bool = False)`
    :

    `restrict_permissions(self)`
    :

    `unrestrict_permissions(self)`
    :

`TagsDiscussionMixin(user: FlarumUser, _fetched_data: dict)`
:   A discussion from `Discussions`.
    
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

    `canTag: bool`
    :

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

    `get_tags(self) ‑> list`
    :

    `hide(self, force: bool = False)`
    :   Hides the discussion from the sight of other unprivileged users
        that are not worthy to view such thread.

    `restore(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

    `unhide(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

`TagsExtension()`
:   A base class for mixing in custom classes (extensions) into another classes.
    
    ### Example extension code:
    ```python
    
    from pyflarum.extensions import ExtensionMixin
    from pyflarum.extensions.admin import AdminExtension
    from pyflarum.session import FlarumUser
    
    
    # Lowecase:
    AUTHOR = "yourname"
    NAME = "extensionname"
    ID = f"{AUTHOR}-{NAME}"
    
    # List of dependencies:
    SOFT_DEPENDENCIES = [AdminExtension] # uses methods from this extension, but can run without it
    HARD_DEPENCENDIES = []
    
    
    
    # I recommend to use the following naming pattern: `<YourExtensionName><ClassToMixin>Mixin`
    # Example:
    class ExampleFlarumUserMixin(FlarumUser):
        @property
        def example(self):
            '''
                Calling `FlarumUser(<...>).example` would return this.
            '''
    
            return "Example"
    
    
    class ExampleExtension(ExtensionMixin):
        def get_dependencies(self):
            return {
                "soft": SOFT_DEPENDENCIES,
                "hard": HARD_DEPENCENDIES
            }
    
    
        def mixin(self):
            super().mixin(self, FlarumUser, ExampleFlarumUserMixin)
    
    ```

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

`TagsForumMixin(user: FlarumUser, _fetched_data: dict)`
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

    `canBypassTagCounts: bool`
    :

    `canSearchUsers: bool`
    :   Whether or not you are able to search for users.

    `canStartDiscussion: bool`
    :   Whether or not you are allowed to start a discussion.

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

    `footerHtml: Optional[str]`
    :   The footer HTML of the forum.

    `headerHtml: Optional[str]`
    :   The header HTML of the forum.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)

    `logoUrl: Optional[str]`
    :   URL to forum's logo.

    `maxPrimaryTags: Optional[int]`
    :

    `maxSecondaryTags: Optional[int]`
    :

    `minPrimaryTags: Optional[int]`
    :

    `minSecondaryTags: Optional[int]`
    :

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