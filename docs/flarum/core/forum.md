Module pyflarum.flarum.core.forum
=================================

Classes
-------

`Forum(user: FlarumUser, _fetched_data: dict)`
:   Entire forum, lives under the main `/api` route.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin
    * pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin
    * pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin
    * pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin
    * pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin

    ### Instance variables

    `adminUrl: Optional[str]`
    :   The administration panel URL of the forum.

    `allowSignUp: bool`
    :   Whether or not signup is allowed.

    `allowUsernameMentionFormat: bool`
    :

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