Module pyflarum.extensions.flarum.Malago_Achievements
=====================================================

Classes
-------

`Achievement(user: FlarumUser, _fetched_data: dict)`
:   An achievement (Malago's Achievements extension).
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Instance variables

    `active: Optional[bool]`
    :

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `computation: Optional[str]`
    :

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `description: Optional[str]`
    :

    `hidden: Optional[bool]`
    :

    `icon: Optional[str]`
    :

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `name: Optional[str]`
    :

    `new: Optional[str]`
    :

    `points`
    :

    `rectangle: Optional[str]`
    :   No, I have no idea what this is either.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

`AchievementsAdminFlarumUserMixin(extensions: Optional[list] = None, **kwargs)`
:   The main object that carries the Flarum session.
    
    ### Parameters:
    - `forum_url` - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https://domain.tld/ - wrong; https://domain.tld - correct).
    - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the bot doesn't login.
    - `password` - optional. The user's password. If `None`, then the bot doesn't login.
    - `api_endpoint` - the API endpoint of the forum, without slashes. This can be specified in Flarum's `config.php` and normally forums don't need to change the default `'api'`
    - `user_agent` - the user agent that will be used to make all requests. Defaults to `pyflarum <version>`.
    - `session_object` - the `Session` object to make requests with. You can pass any object that supports all operations from the [requests](https://pypi.org/project/requests/) library, check [requests_cache](https://pypi.org/project/requests-cache/) as an example.
    - `extensions` - a list of `ExtensionMixin` classes. These are monkey-patched on initialization. Learn more about [extensions](https://cwkevo.github.io/pyflarum/docs/#extensions).
    ```

    ### Ancestors (in MRO)

    * pyflarum.extensions.admin.AdminFlarumUserMixin
    * pyflarum.session.FlarumUser
    * pyflarum.session.FlarumSession
    * builtins.dict

    ### Instance variables

    `api_urls: dict`
    :   Simple, hardcoded `'key: value'` `dict` of Flarum's API routes for quick access.
        
        API routes reference (old):
        https://github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md

    ### Methods

    `authenticate(self, username_or_email: Optional[str] = None, password: Optional[str] = None) ‑> None`
    :   Authenticates your user. This can be run after `FlarumUser` was initialized, to switch to a different user. You can even change
        `FlarumUser.forum_url` to login to another forum.
        
        ### Parameters:
        - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the user isn't logged in.
        - `password` - optional. The user's password. If `None`, then the user isn't logged in.

    `change_email(self, new_email: str, password_confirmation: str, user: Optional[ForwardRef('AnyUser')] = None) ‑> FlarumUser | User`
    :   Changes your E-mail. If `user` is specified, then that user's E-mail is changed.
        
        If you are changing the E-mail of another user, you do not need to specify their password.

    `create_achievement(self, name: str, description: str, computation: str, points: int, image_url_or_fa_icon: str, active: bool | int = 1, hidden: bool | int = 0) ‑> pyflarum.extensions.flarum.Malago_Achievements.Achievement`
    :

    `get_all_achievements(self) ‑> list`
    :

    `get_discussion_by_id(self, id: int) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Obtains a discussion by specific ID.

    `get_discussions(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> pyflarum.flarum.core.discussions.Discussions`
    :   Obtains all discussions from `/api/discussions`, optionally filtering results by using `filter`.

    `get_forum_data(self) ‑> pyflarum.flarum.core.forum.Forum`
    :   Obtains the forum data, returns `Forum` object.

    `get_groups(self) ‑> pyflarum.flarum.core.groups.Groups`
    :   Obtains all groups of a forum from `/api/groups`.

    `get_notifications(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> pyflarum.flarum.core.notifications.Notifications`
    :   Obtains all of your notifications from `/api/notifications`, optionally filtering results by using `filter`.

    `get_post_by_id(self, id: int) ‑> pyflarum.flarum.core.posts.Post`
    :   Obtains a post by specific ID.

    `get_posts(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None)`
    :   Obtains all posts from `/api/posts`, optionally filtering results by using `filter`.

    `get_user_by_id(self, id: int) ‑> pyflarum.flarum.core.users.User`
    :   Obtains a user by specific ID.

    `get_users(self, filter: pyflarum.flarum.core.filters.Filter = None) ‑> pyflarum.flarum.core.users.Users`
    :   Obtains all users from `/api/users`, optionally filtering results by using `filter`.

    `mark_all_discussions_as_read(self, at: datetime.datetime = datetime.datetime(2021, 8, 28, 12, 25, 25, 499916)) ‑> Literal[True]`
    :   Marks all discussions as read.
        
        Specify `at` to mark discussions as read at a specific date (strange how this is allowed, might be
        because of timezones).

    `mark_all_notifications_as_read(self) ‑> Literal[True]`
    :   Marks all notifications as read. Returns `True` when successful.

    `remove_user_avatar(self, user: Optional[ForwardRef('AnyUser')] = None) ‑> FlarumUser | User`
    :   Removes your user's avatar. If `user` is specified, then avatar of that user is removed.

    `send_password_reset_email(self) ‑> FlarumUser | User`
    :   Allows you to send yourself a password reset E-mail.

    `update_preferences(self, preferences: Iterable[tuple[str, Any]], user: Optional[ForwardRef('AnyUser')] = None) ‑> FlarumUser | User`
    :   Updates an user's preferences.
        
        If no user is specified, then your user is updated.

    `update_settings(self, show_achievement_list_in_each_post_footer: Optional[bool] = None, show_achievement_list_in_user_badge: Optional[bool] = None) ‑> True`
    :

    `update_user_info(self, user: Optional[ForwardRef('AnyUser')] = None, new_username: Optional[str] = None, groups: Optional[ForwardRef('list[str | int] | list[Group] | Groups')] = None) ‑> FlarumUser | User`
    :   Updates the info of a user (this can be your user or someone else).
        
        If you are updating yourself, then `FlarumUser` is returned (with the new data).
        If you are updating someone else, then the updated `User` is returned.
        
        ### Parameters:
        - `user` - the user to update.
        - `new_username` - the user's new username.
        - `groups` - new groups of the user. This can either be a list of `pyflarum.flarum.core.groups.Group` objects,
        or just one `pyflarum.flarum.core.groups.Groups`, or a list of `str` or `int` representing the group IDs.

    `upload_user_avatar(self, file: <class 'BinaryIO'>, user: Optional[ForwardRef('AnyUser')] = None, file_name: str = 'avatar', file_type: Literal['image/png', 'image/jpeg', 'image/gif'] = 'image/png') ‑> FlarumUser | User`
    :   Uploads an avatar for yourself. If `user` is specified, then avatar of that user is changed.

`AchievementsExtension()`
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

`AchievementsForumMixin(user: FlarumUser, _fetched_data: dict)`
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

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `showLanguageSelector: bool`
    :   Whether or not the language selector is available.

    `show_achievements_in_post_footer: bool`
    :

    `show_achievements_in_user_card: bool`
    :

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