Module pyflarum.extensions.absolutely_all
=========================================

Classes
-------

`AbsolutelyAllExtension()`
:   A pyFlarum extension. Allows you to fetch all specific data from a forum (e. g.: all discussions, all posts, etc.), until there are none left.
    
    Based on `Generator`, that yields in a while loop, until no `next_link` is present in the API.

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

`AbsolutelyAllFlarumUserMixin(extensions: Optional[list] = None, **kwargs)`
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

    * pyflarum.session.FlarumUser
    * pyflarum.session.FlarumSession
    * builtins.dict

    ### Instance variables

    `api_urls: dict`
    :   Simple, hardcoded `'key: value'` `dict` of Flarum's API routes for quick access.
        
        API routes reference (old):
        https://github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md

    ### Methods

    `absolutely_all_discussions(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> Generator[Discussions, None, None]`
    :   A generator that yields `Discussions` from entire forum, until there are `None` left. `Filter` compatible.

    `absolutely_all_notifications(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> Generator[Notifications, None, None]`
    :   A generator that yields all of your `Notifications`, until there are `None` left. `Filter` compatible.

    `absolutely_all_posts(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> Generator[Posts, None, None]`
    :   A generator that yields `Posts` from entire forum, until there are `None` left. `Filter` compatible.

    `absolutely_all_users(self, filter: Optional[pyflarum.flarum.core.filters.Filter] = None) ‑> Generator[Users, None, None]`
    :   A generator that yields `Users` from entire forum, until there are `None` left. `Filter` compatible.

    `authenticate(self, username_or_email: Optional[str] = None, password: Optional[str] = None) ‑> None`
    :   Authenticates your user. This can be run after `FlarumUser` was initialized, to switch to a different user. You can even change
        `FlarumUser.forum_url` to login to another forum.
        
        ### Parameters:
        - `username_or_email` - optional. The username or E-mail address to log into. If `None`, then the user isn't logged in.
        - `password` - optional. The user's password. If `None`, then the user isn't logged in.

    `change_email(self, new_email: str, password_confirmation: str, user: Optional[ForwardRef('AnyUser')] = None) ‑> FlarumUser | User`
    :   Changes your E-mail. If `user` is specified, then that user's E-mail is changed.
        
        If you are changing the E-mail of another user, you do not need to specify their password.

    `get_all_posts_from_discussion(self, discussion: pyflarum.flarum.core.discussions.Discussion, at_once: int = 50, force: bool = False) ‑> Generator[Posts, None, None]`
    :   This fetches all posts from a long discussion where only post IDs are present.
        
        First, a list of all IDs is created from the API response. Then, IDs are broken into chunks of size `at_once` and
        yielded as `Posts`.
        
        Use `force=True` to bypass `at_once` being capped at 50, if more than 50.

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