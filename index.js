URLS=[
"docs/index.html",
"docs/session.html",
"docs/flarum/core/index.html",
"docs/flarum/core/discussions.html",
"docs/flarum/core/posts.html",
"docs/flarum/core/users.html",
"docs/custom_types.html",
"docs/datetime_conversions.html",
"docs/error_handler.html",
"docs/extensions/index.html",
"docs/extensions/absolutely_all.html",
"docs/extensions/admin.html",
"docs/extensions/advanced_search.html",
"docs/extensions/commands.html",
"docs/extensions/flarum/index.html",
"docs/extensions/flarum/Askvortsov_ModeratorWarnings.html",
"docs/extensions/flarum/Askvortsov_ReplyTemplates.html",
"docs/extensions/flarum/Blomstra_Realtime.html",
"docs/extensions/flarum/Flarum_Approval.html",
"docs/extensions/flarum/Flarum_Flags.html",
"docs/flarum/core/forum.html",
"docs/extensions/flarum/Flarum_Likes.html",
"docs/extensions/flarum/Flarum_Lock.html",
"docs/extensions/flarum/Flarum_Markdown.html",
"docs/extensions/flarum/Flarum_Sticky.html",
"docs/extensions/flarum/Flarum_Subscriptions.html",
"docs/extensions/flarum/Flarum_Suspend.html",
"docs/extensions/flarum/Flarum_Tags.html",
"docs/extensions/flarum/FoF_BestAnswer.html",
"docs/extensions/flarum/FoF_Byobu.html",
"docs/extensions/flarum/FoF_Merge.html",
"docs/extensions/flarum/FoF_PreventNecrobumping.html",
"docs/extensions/flarum/FoF_Spamblock.html",
"docs/extensions/flarum/FoF_Split.html",
"docs/extensions/flarum/FoF_UserBio.html",
"docs/extensions/flarum/FoF_UsernameRequest.html",
"docs/extensions/flarum/Malago_Achievements.html",
"docs/extensions/watch.html",
"docs/flarum/index.html",
"docs/flarum/core/filters.html",
"docs/flarum/core/groups.html",
"docs/flarum/core/notifications.html"
];
INDEX=[
{
"ref":"pyflarum",
"url":0,
"doc":""
},
{
"ref":"pyflarum.FlarumUser",
"url":0,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.FlarumUser.get_forum_data",
"url":0,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_user_by_id",
"url":0,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_discussion_by_id",
"url":0,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_post_by_id",
"url":0,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_discussions",
"url":0,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_posts",
"url":0,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_users",
"url":0,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_notifications",
"url":0,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.FlarumUser.mark_all_discussions_as_read",
"url":0,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.FlarumUser.mark_all_notifications_as_read",
"url":0,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.get_groups",
"url":0,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.FlarumUser.update_user_info",
"url":0,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.send_password_reset_email",
"url":0,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.update_preferences",
"url":0,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.change_email",
"url":0,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.upload_user_avatar",
"url":0,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.remove_user_avatar",
"url":0,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.FlarumUser.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.FlarumError",
"url":0,
"doc":"Generic class for all Flarum related errors."
},
{
"ref":"pyflarum.PreparedDiscussion",
"url":0,
"doc":"A prepared discussion that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the discussion (see  PreparedDiscussion.post() ). -  title - the discussion's title. -  content - discussion's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.PreparedDiscussion.to_dict",
"url":0,
"doc":"Converts the discussion to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a discussion."
},
{
"ref":"pyflarum.PreparedDiscussion.post",
"url":0,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.PreparedDiscussion.create",
"url":0,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.PreparedDiscussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PreparedDiscussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PreparedDiscussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PreparedDiscussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PreparedDiscussion.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PreparedDiscussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Discussions",
"url":0,
"doc":"A data of multiple discussions fetched from  /api/discussions ."
},
{
"ref":"pyflarum.Discussions.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.Discussions.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.Discussions.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.Discussion",
"url":0,
"doc":"A Flarum discussion, obtained directly from the API by ID. This is the top-level discussion object that contains all the properties of a discussion, and inherits properties from all previous discussion-like objects. Learn more about inheritance [here](https: cwkevo.github.io/pyflarum/docs/ class-inheritance)  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.Discussion.included",
"url":0,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.Discussion.get_author",
"url":0,
"doc":"Obtains the discussion's author, AKA. the author of the post with number 1 in a discussion.  mode allows you to specify the mode that is used to determine whether or not the post is the first post of the discussion. -  'first_number' - checks if the number of the post is 1 - if yes, it fetches that post's author. -  Any - if anything other than  'first_number' is passed (e. g.  'first_user , but this can be anything), then this returns the author of the first post in the JSON. I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?",
"func":1
},
{
"ref":"pyflarum.Discussion.get_posts",
"url":0,
"doc":"Returns a list of  pyflarum.flarum.core.posts.PostFromBulk objects. It might seem strange why this doesn't return  pyflarum.flarum.core.posts.PostFromDiscussion instead, but these posts are in fact identical to  pyflarum.flarum.core.posts.PostFromBulk , that's why they are returned.  pyflarum.flarum.core.posts.PostFromDiscussion comes from  pyflarum.flarum.core.discussions.DiscussionFromBulk instead.",
"func":1
},
{
"ref":"pyflarum.Discussion.get_first_post",
"url":0,
"doc":"The  Discussion object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this function was included in  Discussion , but it does not work!  Alternative:   discussion = user.get_discussion_by_id(1) first_post = discussion.get_posts()[0]  ",
"func":1
},
{
"ref":"pyflarum.Discussion.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.Discussion.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.Discussion.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.Discussion.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.Discussion.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.Discussion.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.Discussion.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.Discussion.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.Discussion.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.Discussion.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.Discussion.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.Discussion.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.Discussion.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.Discussion.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.Discussion.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.Discussion.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.Discussion.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.Discussion.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.Discussion.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.Discussion.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.Discussion.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.Discussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Discussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Discussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Discussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Discussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.DiscussionFromBulk",
"url":0,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.DiscussionFromBulk.url",
"url":0,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.DiscussionFromBulk.commentCount",
"url":0,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.DiscussionFromBulk.participantCount",
"url":0,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.DiscussionFromBulk.createdAt",
"url":0,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.DiscussionFromBulk.lastPostedAt",
"url":0,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.DiscussionFromBulk.lastPostNumber",
"url":0,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.lastReadPostNumber",
"url":0,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.canReply",
"url":0,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.canRename",
"url":0,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.canDelete",
"url":0,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.canHide",
"url":0,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.lastReadAt",
"url":0,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.DiscussionFromBulk.isHidden",
"url":0,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.DiscussionFromBulk.get_author",
"url":0,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.get_last_posted_user",
"url":0,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.get_first_post",
"url":0,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.hide",
"url":0,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.restore",
"url":0,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.unhide",
"url":0,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.delete",
"url":0,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.DiscussionFromBulk.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.DiscussionFromBulk.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.DiscussionFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.DiscussionFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.DiscussionFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.DiscussionFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.DiscussionFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.DiscussionFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.DiscussionFromNotification",
"url":0,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.DiscussionFromNotification.get_full_data",
"url":0,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.DiscussionFromNotification.title",
"url":0,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.DiscussionFromNotification.slug",
"url":0,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.DiscussionFromNotification.hide",
"url":0,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromNotification.restore",
"url":0,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromNotification.unhide",
"url":0,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromNotification.delete",
"url":0,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.DiscussionFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.DiscussionFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.DiscussionFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.DiscussionFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.DiscussionFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.DiscussionFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.PreparedPost",
"url":0,
"doc":"A prepared post that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the post (see  PreparedPost.post() ). -  discussion - any discussion that the post belongs to. -  content - the post's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.PreparedPost.to_dict",
"url":0,
"doc":"Converts the post to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a post."
},
{
"ref":"pyflarum.PreparedPost.post",
"url":0,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.PreparedPost.create",
"url":0,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.PreparedPost.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PreparedPost.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PreparedPost.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PreparedPost.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PreparedPost.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PreparedPost.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Posts",
"url":0,
"doc":"A data of multiple posts fetched from  /api/posts ."
},
{
"ref":"pyflarum.Posts.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.Posts.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.Posts.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.Post",
"url":0,
"doc":"A Flarum post.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.Post.get_author",
"url":0,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.Post.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.Post.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.Post.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.Post.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.Post.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.Post.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.Post.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.Post.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.Post.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.Post.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.Post.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.Post.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.Post.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.Post.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.Post.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.Post.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.Post.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.Post.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.Post.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.Post.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Post.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Post.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Post.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Post.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.Post.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.PostFromBulk",
"url":0,
"doc":"A post from  Posts .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.PostFromBulk.content",
"url":0,
"doc":"This property is only available for  pyflarum.flarum.core.posts.PostFromNotification , but was included here due to class inheritance. Using this will just raise  NotImplementedError , so please do not use this."
},
{
"ref":"pyflarum.PostFromBulk.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.PostFromBulk.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.PostFromBulk.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.PostFromBulk.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.PostFromBulk.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.PostFromBulk.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.PostFromBulk.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.PostFromBulk.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.PostFromBulk.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.PostFromBulk.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.PostFromBulk.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.PostFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PostFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PostFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PostFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PostFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PostFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.PostFromNotification",
"url":0,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.PostFromNotification.content",
"url":0,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.PostFromNotification.ipAddress",
"url":0,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.PostFromNotification.editedAt",
"url":0,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.PostFromNotification.canEdit",
"url":0,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.PostFromNotification.canDelete",
"url":0,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.PostFromNotification.canHide",
"url":0,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.PostFromNotification.url",
"url":0,
"doc":"The post's URL."
},
{
"ref":"pyflarum.PostFromNotification.get_discussion",
"url":0,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.reply_to",
"url":0,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.get_author",
"url":0,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.edit",
"url":0,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.PostFromNotification.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.PostFromNotification.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.PostFromNotification.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.PostFromNotification.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.PostFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PostFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PostFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PostFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PostFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PostFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.PostFromDiscussion",
"url":0,
"doc":"A post from  Discussion .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.PostFromDiscussion.number",
"url":0,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.PostFromDiscussion.createdAt",
"url":0,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.PostFromDiscussion.contentType",
"url":0,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.PostFromDiscussion.is_comment",
"url":0,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.contentHtml",
"url":0,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.PostFromDiscussion.hide",
"url":0,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.restore",
"url":0,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.unhide",
"url":0,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.delete",
"url":0,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.edit",
"url":0,
"doc":"Edits the post.  new_post has to be a  PreparedPost object. Returns the  Post after edit.",
"func":1
},
{
"ref":"pyflarum.PostFromDiscussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PostFromDiscussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PostFromDiscussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PostFromDiscussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PostFromDiscussion.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PostFromDiscussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Users",
"url":0,
"doc":"A data of multiple users fetched from the API."
},
{
"ref":"pyflarum.Users.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.Users.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.Users.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.User",
"url":0,
"doc":"An user that was fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.User.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.User.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.User.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.User.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.User.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.User.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.User.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.User.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.User.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.User.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.User.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.User.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.User.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.User.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.User.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.User.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.User.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.User.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.User.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.UserFromBulk",
"url":0,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.UserFromBulk.joinTime",
"url":0,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.UserFromBulk.discussionCount",
"url":0,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.UserFromBulk.commentCount",
"url":0,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.UserFromBulk.canEdit",
"url":0,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.UserFromBulk.canEditCredentials",
"url":0,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.UserFromBulk.canEditGroups",
"url":0,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.UserFromBulk.canDelete",
"url":0,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.UserFromBulk.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.UserFromBulk.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.UserFromBulk.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.UserFromBulk.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.UserFromBulk.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.UserFromBulk.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.UserFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.UserFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.UserFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.UserFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.UserFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.UserFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.UserFromNotification",
"url":0,
"doc":"An user from  BaseNotification  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.UserFromNotification.username",
"url":0,
"doc":"The user's username."
},
{
"ref":"pyflarum.UserFromNotification.email",
"url":0,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.UserFromNotification.isEmailConfirmed",
"url":0,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.UserFromNotification.displayName",
"url":0,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.UserFromNotification.avatarUrl",
"url":0,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.UserFromNotification.slug",
"url":0,
"doc":"The user's slug."
},
{
"ref":"pyflarum.UserFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.UserFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.UserFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.UserFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.UserFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.UserFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.MyUser",
"url":0,
"doc":"Your user, contains fullest user data.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.MyUser.markedAllAsReadAt",
"url":0,
"doc":"When did you mark all discussions as read."
},
{
"ref":"pyflarum.MyUser.unreadNotificationCount",
"url":0,
"doc":"Amount of your unread notifications."
},
{
"ref":"pyflarum.MyUser.newNotificationCount",
"url":0,
"doc":"Amount of your new notifications."
},
{
"ref":"pyflarum.MyUser.preferences",
"url":0,
"doc":"A raw  dict of your preferences (for notifications)."
},
{
"ref":"pyflarum.MyUser.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.MyUser.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.MyUser.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.MyUser.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.MyUser.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.MyUser.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.MyUser.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.MyUser.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.MyUser.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.MyUser.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.MyUser.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.MyUser.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.MyUser.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.MyUser.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.MyUser.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.MyUser.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.MyUser.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.MyUser.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.MyUser.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.PreparedGroup",
"url":0,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.PreparedGroup.to_dict",
"url":0,
"doc":"Converts the group to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a group."
},
{
"ref":"pyflarum.PreparedGroup.create",
"url":0,
"doc":"Creates the group. Returns the created  Group .",
"func":1
},
{
"ref":"pyflarum.PreparedGroup.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.PreparedGroup.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.PreparedGroup.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.PreparedGroup.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.PreparedGroup.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.PreparedGroup.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Groups",
"url":0,
"doc":"A data of multiple groups fetched from the API."
},
{
"ref":"pyflarum.Groups.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.Groups.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.Groups.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.Group",
"url":0,
"doc":"A Flarum group.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.Group.nameSingular",
"url":0,
"doc":"Singular form of the group's name."
},
{
"ref":"pyflarum.Group.namePlural",
"url":0,
"doc":"Plural form of the group's name."
},
{
"ref":"pyflarum.Group.color",
"url":0,
"doc":"The color of the group."
},
{
"ref":"pyflarum.Group.icon",
"url":0,
"doc":"[FontAwesome](https: fontawesome.com/v5.15/icons?d=gallery) icon of the group."
},
{
"ref":"pyflarum.Group.isHidden",
"url":0,
"doc":"Whether or not the group is hidden on the forum."
},
{
"ref":"pyflarum.Group.edit",
"url":0,
"doc":"Edits the group with new  PreparedGroup . Returns the edited  Group ",
"func":1
},
{
"ref":"pyflarum.Group.delete",
"url":0,
"doc":"Removes the group forever. This is irreversible! Returns  True when the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.Group.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Group.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Group.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Group.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Group.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.Group.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Filter",
"url":0,
"doc":"Represents a Flarum API filter as a  dict . It allows you to filter discussions without having to manually specify URL parameters. -  order_by - gets passed into  ?sort= parameter. Common values are  commentCount ,  createdAt and their reverse/negated values (prefixed with  - ) -  query - the search query, passed into  ?filter[q]= . This can be a string. Flarum search bar uses this. Gambits such as  author:username are supported. -  ids - fetches entries with specific ids, passed into  ?filter[id]= . This is a list, that is then converted into comma separated string. -  limit - limit of entires to fetch. Flarum (by default) allows a max. of 50 entries to be fetched at once. Passed into  ?page[limit]= -  page - fetch a specific page of entires. This is actually an offset - which is determined by multiplying  page with  limit (see above). -  include - include specific entries. See [included data](https: cwkevo.github.io/pyflarum/docs/ included-data). You will likely never use this. -  additional_data - this is a  dict ( parameter: value ) of additional search parameters that you might want to use. This can be used to overwrite previous filters."
},
{
"ref":"pyflarum.Filter.to_dict",
"url":0,
"doc":"Converts the filter to a  dict , so that it can be sent to the API ( requests module, see [\"Passing parameters in URLs\"](https: docs.python-requests.org/en/master/user/quickstart/ passing-parameters-in-urls . An extension might add additional filter data after the filter was initialized (for example:  absolutely_all needs to update page number to continuously yield results)."
},
{
"ref":"pyflarum.Notifications",
"url":0,
"doc":"A data of multiple notifications fetched from the API."
},
{
"ref":"pyflarum.Notifications.mark_all_as_read",
"url":0,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.Notifications.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.Notifications.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.Notifications.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.Notification",
"url":0,
"doc":"Notification.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.Notification.contentType",
"url":0,
"doc":"The content type of the notification. Examples:  newPost ,  postLiked , etc ."
},
{
"ref":"pyflarum.Notification.content",
"url":0,
"doc":"The  dict of the notification's content."
},
{
"ref":"pyflarum.Notification.new_post_number",
"url":0,
"doc":"The new number of the potential post that triggered the notification."
},
{
"ref":"pyflarum.Notification.reply_number",
"url":0,
"doc":"The number of the reply post that possibly triggered the notification."
},
{
"ref":"pyflarum.Notification.createdAt",
"url":0,
"doc":"The  datetime of when was this notification triggered/created at."
},
{
"ref":"pyflarum.Notification.isRead",
"url":0,
"doc":"Whether or not the notification was read by you."
},
{
"ref":"pyflarum.Notification.from_user",
"url":0,
"doc":"From which user does the notification originate from? Returns  pyflarum.flarum.core.users.UserFromNotification .",
"func":1
},
{
"ref":"pyflarum.Notification.get_subject",
"url":0,
"doc":"Returns the subject of the notification, either one of these: -  pyflarum.flarum.core.discussions.DiscussionFromNotification -  pyflarum.flarum.core.posts.PostFromNotification ",
"func":1
},
{
"ref":"pyflarum.Notification.mark_as_read",
"url":0,
"doc":"Marks the notification as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.Notification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Notification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Notification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Notification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Notification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.Notification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Forum",
"url":0,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.Forum.title",
"url":0,
"doc":"The forum's title."
},
{
"ref":"pyflarum.Forum.description",
"url":0,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.Forum.showLanguageSelector",
"url":0,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.Forum.baseUrl",
"url":0,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.Forum.basePath",
"url":0,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.Forum.debug",
"url":0,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.Forum.apiUrl",
"url":0,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.Forum.welcomeTitle",
"url":0,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.Forum.welcomeMessage",
"url":0,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.Forum.themePrimaryColor",
"url":0,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.Forum.themeSecondaryColor",
"url":0,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.Forum.logoUrl",
"url":0,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.Forum.faviconUrl",
"url":0,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.Forum.headerHtml",
"url":0,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.Forum.footerHtml",
"url":0,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.Forum.allowSignUp",
"url":0,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.Forum.defaultRoute",
"url":0,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.Forum.canViewForum",
"url":0,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.Forum.canStartDiscussion",
"url":0,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.Forum.canSearchUsers",
"url":0,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.Forum.adminUrl",
"url":0,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.Forum.version",
"url":0,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.Forum.allowUsernameMentionFormat",
"url":0,
"doc":""
},
{
"ref":"pyflarum.Forum.get_groups",
"url":0,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.Forum.included",
"url":0,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.Forum.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Forum.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Forum.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Forum.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Forum.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.custom_types",
"url":6,
"doc":"Custom types for pyFlarum.  Types: -  AnyUser -  User |  UserFromBulk |  UserFromNotification -  AnyDiscussion -  Discussion |  DiscussionFromBulk |  DiscussionFromNotification -  AnyPost -  Post |  PostFromBulk |  PostFromNotification "
},
{
"ref":"pyflarum.datetime_conversions",
"url":7,
"doc":""
},
{
"ref":"pyflarum.datetime_conversions.flarum_to_datetime",
"url":7,
"doc":"Converts Flarum's datetime string to Python's datetime object. Doesn't convert if the parameter is already a datetime object. Flarum's datetime format is  %Y-%m-%dT%H:%M:%S%z ",
"func":1
},
{
"ref":"pyflarum.datetime_conversions.datetime_to_flarum",
"url":7,
"doc":"Converts Python's datetime object to Flarum's datetime string. Doesn't convert if the parameter is already a string. Flarum's datetime format is  %Y-%m-%dT%H:%M:%S%z ",
"func":1
},
{
"ref":"pyflarum.error_handler",
"url":8,
"doc":""
},
{
"ref":"pyflarum.error_handler.FlarumError",
"url":8,
"doc":"Generic class for all Flarum related errors."
},
{
"ref":"pyflarum.error_handler.MissingExtensionError",
"url":8,
"doc":"Missing pyFlarum extension error."
},
{
"ref":"pyflarum.error_handler.MissingExtensionWarning",
"url":8,
"doc":"Missing pyFlarum extension warning."
},
{
"ref":"pyflarum.error_handler.parse_request",
"url":8,
"doc":"Parses the request as JSON, raises  FlarumError if something went wrong.",
"func":1
},
{
"ref":"pyflarum.error_handler.handle_errors",
"url":8,
"doc":"Handles Flarum & request related errors. Returns  FlarumError if an error was found,  True otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions",
"url":9,
"doc":""
},
{
"ref":"pyflarum.extensions.ExtensionMixin",
"url":9,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.ExtensionMixin.get_dependencies",
"url":9,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.ExtensionMixin.mixin",
"url":9,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all",
"url":10,
"doc":""
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin",
"url":10,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_users",
"url":10,
"doc":"A generator that yields  Users from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_posts",
"url":10,
"doc":"A generator that yields  Posts from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_discussions",
"url":10,
"doc":"A generator that yields  Discussions from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_notifications",
"url":10,
"doc":"A generator that yields all of your  Notifications , until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_all_posts_from_discussion",
"url":10,
"doc":"This fetches all posts from a long discussion where only post IDs are present. First, a list of all IDs is created from the API response. Then, IDs are broken into chunks of size  at_once and yielded as  Posts . Use  force=True to bypass  at_once being capped at 50, if more than 50.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension",
"url":10,
"doc":"A pyFlarum extension. Allows you to fetch all specific data from a forum (e. g.: all discussions, all posts, etc.), until there are none left. Based on  Generator , that yields in a while loop, until no  next_link is present in the API."
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension.get_dependencies",
"url":10,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension.mixin",
"url":10,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.admin",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings",
"url":11,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.fields",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun_secret",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun_domain",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.log",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.smtp",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_host",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_port",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_encryption",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_username",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_password",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.sending",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.errors",
"url":11,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.admin.MailSettings.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin",
"url":11,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.enable_extension",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.disable_extension",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.clear_cache",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_forum_info",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_mail_settings",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_mail_settings",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.send_test_mail",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_appearance",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.upload_logo",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.remove_logo",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.upload_favicon",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.remove_favicon",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_header",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_footer",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_css",
"url":11,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.admin.AdminExtension",
"url":11,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_dependencies",
"url":11,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.mixin",
"url":11,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.advanced_search",
"url":12,
"doc":""
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin",
"url":12,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_user_by_username",
"url":12,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension",
"url":12,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_dependencies",
"url":12,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.mixin",
"url":12,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.commands",
"url":13,
"doc":""
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin",
"url":13,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.is_mentioned_in",
"url":13,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.parse_as_command",
"url":13,
"doc":"Parses a command from a string (e. g.: post's content). The result is list of arguments.  Example:   user.parse_command()  ",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension",
"url":13,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_dependencies",
"url":13,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.mixin",
"url":13,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.parse_as_command",
"url":13,
"doc":"Parses a command from a string (e. g.: post's content). The result is list of arguments.  Example:   user.parse_command()  ",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.flarum",
"url":14,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin",
"url":15,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canViewWarnings",
"url":15,
"doc":"Whether or not you can view the warnings of the user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canManageWarnings",
"url":15,
"doc":"Whether or not you are able to manage the user's warnings."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canDeleteWarnings",
"url":15,
"doc":"Whether or not you can delete the user's warnings."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.visibleWarningCount",
"url":15,
"doc":"The amount of warnings that you can see that belong to the user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension",
"url":15,
"doc":"https: extiverse.com/extension/askvortsov/flarum-moderator-warnings"
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension.get_dependencies",
"url":15,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension.mixin",
"url":15,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates",
"url":16,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin",
"url":16,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.replyTemplate",
"url":16,
"doc":"The reply template for the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canManageReplyTemplates",
"url":16,
"doc":"Whether or not you are able to manage the discussion's reply templates."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension",
"url":16,
"doc":"https: extiverse.com/extension/askvortsov/flarum-discussion-templates"
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension.get_dependencies",
"url":16,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension.mixin",
"url":16,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime",
"url":17,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin",
"url":17,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canViewWhoTypes",
"url":17,
"doc":"Whether or not you can view who is typing in real time."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension",
"url":17,
"doc":"https: extiverse.com/extension/blomstra/realtime"
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension.get_dependencies",
"url":17,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension.mixin",
"url":17,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval",
"url":18,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin",
"url":18,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.isApproved",
"url":18,
"doc":"Whether or not the discussion is approved."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin",
"url":18,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.isApproved",
"url":18,
"doc":"Whether or not the post is approved."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.canApprove",
"url":18,
"doc":"Whether or not you are able to approve the post"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.approve",
"url":18,
"doc":"Approve the post. Use  force to approve despite the post being approved already, and do not raise  FlarumError .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension",
"url":18,
"doc":"https: packagist.org/packages/flarum/approval"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension.get_dependencies",
"url":18,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension.mixin",
"url":18,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags",
"url":19,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin",
"url":19,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.canViewFlags",
"url":19,
"doc":"Whether or not you can view all the flags on the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.flagCount",
"url":19,
"doc":"The total flagged post/discussion count (forum-wide)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.guidelinesUrl",
"url":19,
"doc":"The URL of the forum's guidelines, if specified by the admin."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin",
"url":19,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.canFlag",
"url":19,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension",
"url":19,
"doc":"https: packagist.org/packages/flarum/flags"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension.get_dependencies",
"url":19,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension.mixin",
"url":19,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes",
"url":21,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin",
"url":21,
"doc":"A post from  Discussion .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.like",
"url":21,
"doc":"Likes a post.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.unlike",
"url":21,
"doc":"Unlikes liked post.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.edit",
"url":4,
"doc":"Edits the post.  new_post has to be a  PreparedPost object. Returns the  Post after edit.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin",
"url":21,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.canLike",
"url":21,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.like",
"url":21,
"doc":"Likes a post.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.unlike",
"url":21,
"doc":"Unlikes liked post.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin",
"url":21,
"doc":"A post from  Posts .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.get_liked_by",
"url":21,
"doc":"Obtain the list of users that liked the post.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.content",
"url":4,
"doc":"This property is only available for  pyflarum.flarum.core.posts.PostFromNotification , but was included here due to class inheritance. Using this will just raise  NotImplementedError , so please do not use this."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesExtension",
"url":21,
"doc":"https: packagist.org/packages/flarum/likes"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesExtension.get_dependencies",
"url":21,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesExtension.mixin",
"url":21,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock",
"url":22,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin",
"url":22,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.lock",
"url":22,
"doc":"Locks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.unlock",
"url":22,
"doc":"Unlocks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin",
"url":22,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.isLocked",
"url":22,
"doc":"Whether or not the discussion is locked."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canLock",
"url":22,
"doc":"Whether or not you are able to lock the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.lock",
"url":22,
"doc":"Locks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.unlock",
"url":22,
"doc":"Unlocks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension",
"url":22,
"doc":"https: packagist.org/packages/flarum/lock"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension.get_dependencies",
"url":22,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension.mixin",
"url":22,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown",
"url":23,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin",
"url":23,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.markdown_mdarea",
"url":23,
"doc":"Whether or not the MDArea is enabled for markdown."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension",
"url":23,
"doc":"https: packagist.org/packages/flarum/markdown"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension.get_dependencies",
"url":23,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension.mixin",
"url":23,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky",
"url":24,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin",
"url":24,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.stick",
"url":24,
"doc":"Stickies a discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.unstick",
"url":24,
"doc":"Unstickies a discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin",
"url":24,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.isSticky",
"url":24,
"doc":"Whether or not the discussion is stickied."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.canSticky",
"url":24,
"doc":"Whether or not you are able to stick this discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyExtension",
"url":24,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyExtension.get_dependencies",
"url":24,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyExtension.mixin",
"url":24,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions",
"url":25,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin",
"url":25,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.follow",
"url":25,
"doc":"Follow the discussion and be notified of all new activity.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.unfollow",
"url":25,
"doc":"Unfollow the discussion, but be notified when someone mentions you.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.ignore",
"url":25,
"doc":"Ignore the discussion, never be mentioned. Note that this will also hide the discussion from  Discussions . Currently, the only ways to access ignored Flarum discussions that I am aware of are: 1. Accessing the discussion directly (by ID). 2. Using  pyflarum.flarum.core.filters.Filter (e. g.  Filter(query=\"is:ignored\") ).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin",
"url":25,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.subscription",
"url":25,
"doc":"Get the current subscription state of the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.follow",
"url":25,
"doc":"Follow the discussion and be notified of all new activity.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.unfollow",
"url":25,
"doc":"Unfollow the discussion, but be notified when someone mentions you.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.ignore",
"url":25,
"doc":"Ignore the discussion, never be mentioned. Note that this will also hide the discussion from  Discussions . Currently, the only ways to access ignored Flarum discussions that I am aware of are: 1. Accessing the discussion directly (by ID). 2. Using  pyflarum.flarum.core.filters.Filter (e. g.  Filter(query=\"is:ignored\") ).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension",
"url":25,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension.get_dependencies",
"url":25,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension.mixin",
"url":25,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend",
"url":26,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin",
"url":26,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canSuspend",
"url":26,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.suspendedUntil",
"url":26,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.suspend",
"url":26,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendExtension",
"url":26,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendExtension.get_dependencies",
"url":26,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendExtension.mixin",
"url":26,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag",
"url":27,
"doc":"A Flarum tag.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.name",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.description",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.slug",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.color",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.backgroundUrl",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.backgroundMode",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.icon",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.discussionCount",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.position",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.defaultSort",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.isChild",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.isHidden",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.lastPostedAt",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.canStartDiscussion",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.canAddToDiscussion",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.subscription",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.template",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.relationships",
"url":27,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.get_parent_tag",
"url":27,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.restrict_permissions",
"url":27,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.unrestrict_permissions",
"url":27,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin",
"url":27,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canBypassTagCounts",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.minPrimaryTags",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.maxPrimaryTags",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.minSecondaryTags",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.maxSecondaryTags",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin",
"url":27,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canTag",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_tags",
"url":27,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension",
"url":27,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension.get_dependencies",
"url":27,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension.mixin",
"url":27,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin",
"url":28,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.hasBestAnswer",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.bestAnswerSetAt",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin",
"url":28,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canSelectBestAnswer",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension",
"url":28,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension.get_dependencies",
"url":28,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension.mixin",
"url":28,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin",
"url":29,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditRecipients",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditUserRecipients",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditGroupRecipients",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin",
"url":29,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.blocksPd",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.cannotBeDirectlyMessaged",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension",
"url":29,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension.get_dependencies",
"url":29,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension.mixin",
"url":29,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge",
"url":30,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin",
"url":30,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canMerge",
"url":30,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension",
"url":30,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension.get_dependencies",
"url":30,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension.mixin",
"url":30,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping",
"url":31,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin",
"url":31,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.fof_prevent_necrobumping",
"url":31,
"doc":"I have no idea what this does either, sorry."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension",
"url":31,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension.get_dependencies",
"url":31,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension.mixin",
"url":31,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock",
"url":32,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin",
"url":32,
"doc":"An user from  BaseNotification  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.spamblock",
"url":32,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin",
"url":32,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canSpamblock",
"url":32,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension",
"url":32,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension.get_dependencies",
"url":32,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension.mixin",
"url":32,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split",
"url":33,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin",
"url":33,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canSplit",
"url":33,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension",
"url":33,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension.get_dependencies",
"url":33,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension.mixin",
"url":33,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin",
"url":34,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.max_bio_length",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin",
"url":34,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.update_user_bio",
"url":34,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin",
"url":34,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.bio",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canViewBio",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditBio",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension",
"url":34,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension.get_dependencies",
"url":34,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension.mixin",
"url":34,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin",
"url":35,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.usernameHistory",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension",
"url":35,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension.get_dependencies",
"url":35,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension.mixin",
"url":35,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement",
"url":36,
"doc":"An achievement (Malago's Achievements extension).  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.name",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.description",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.computation",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.points",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.icon",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.rectangle",
"url":36,
"doc":"No, I have no idea what this is either."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.active",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.hidden",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.new",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin",
"url":36,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.show_achievements_in_post_footer",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.show_achievements_in_user_card",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin",
"url":36,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.update_settings",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.create_achievement",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_all_achievements",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension",
"url":36,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension.get_dependencies",
"url":36,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension.mixin",
"url":36,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.watch",
"url":37,
"doc":""
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin",
"url":37,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.watch_notifications",
"url":37,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.extensions.watch.WatchExtension",
"url":37,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin(FlarumUser): @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_dependencies",
"url":37,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.mixin",
"url":37,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.flarum",
"url":38,
"doc":""
},
{
"ref":"pyflarum.flarum.core",
"url":2,
"doc":""
},
{
"ref":"pyflarum.flarum.core.BaseFlarumObject",
"url":2,
"doc":"The base Flarum object - all API objects have properties of this object.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumObject.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject",
"url":2,
"doc":"The base object for Flarum \"bulk\" objects - all API objects that contain other objects have these properties. Examples of bulk objects: -  pyflarum.flarum.core.users.UserFromBulk -  pyflarum.flarum.core.discussions.DiscussionFromBulk -  pyflarum.flarum.core.posts.PostFromBulk "
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject",
"url":2,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions",
"url":3,
"doc":""
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion",
"url":3,
"doc":"A prepared discussion that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the discussion (see  PreparedDiscussion.post() ). -  title - the discussion's title. -  content - discussion's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.to_dict",
"url":3,
"doc":"Converts the discussion to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.post",
"url":3,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.create",
"url":3,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions",
"url":3,
"doc":"A data of multiple discussions fetched from  /api/discussions ."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion",
"url":3,
"doc":"A Flarum discussion, obtained directly from the API by ID. This is the top-level discussion object that contains all the properties of a discussion, and inherits properties from all previous discussion-like objects. Learn more about inheritance [here](https: cwkevo.github.io/pyflarum/docs/ class-inheritance)  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.included",
"url":3,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_author",
"url":3,
"doc":"Obtains the discussion's author, AKA. the author of the post with number 1 in a discussion.  mode allows you to specify the mode that is used to determine whether or not the post is the first post of the discussion. -  'first_number' - checks if the number of the post is 1 - if yes, it fetches that post's author. -  Any - if anything other than  'first_number' is passed (e. g.  'first_user , but this can be anything), then this returns the author of the first post in the JSON. I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_posts",
"url":3,
"doc":"Returns a list of  pyflarum.flarum.core.posts.PostFromBulk objects. It might seem strange why this doesn't return  pyflarum.flarum.core.posts.PostFromDiscussion instead, but these posts are in fact identical to  pyflarum.flarum.core.posts.PostFromBulk , that's why they are returned.  pyflarum.flarum.core.posts.PostFromDiscussion comes from  pyflarum.flarum.core.discussions.DiscussionFromBulk instead.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_first_post",
"url":3,
"doc":"The  Discussion object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this function was included in  Discussion , but it does not work!  Alternative:   discussion = user.get_discussion_by_id(1) first_post = discussion.get_posts()[0]  ",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk",
"url":3,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.url",
"url":3,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.commentCount",
"url":3,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.participantCount",
"url":3,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.createdAt",
"url":3,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastPostedAt",
"url":3,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastPostNumber",
"url":3,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastReadPostNumber",
"url":3,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canReply",
"url":3,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canRename",
"url":3,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canDelete",
"url":3,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canHide",
"url":3,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastReadAt",
"url":3,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.isHidden",
"url":3,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author",
"url":3,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_last_posted_user",
"url":3,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_first_post",
"url":3,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.hide",
"url":3,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.restore",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.unhide",
"url":3,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.delete",
"url":3,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification",
"url":3,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.get_full_data",
"url":3,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.title",
"url":3,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.slug",
"url":3,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.hide",
"url":3,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.restore",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.unhide",
"url":3,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.delete",
"url":3,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.filters",
"url":39,
"doc":""
},
{
"ref":"pyflarum.flarum.core.filters.Filter",
"url":39,
"doc":"Represents a Flarum API filter as a  dict . It allows you to filter discussions without having to manually specify URL parameters. -  order_by - gets passed into  ?sort= parameter. Common values are  commentCount ,  createdAt and their reverse/negated values (prefixed with  - ) -  query - the search query, passed into  ?filter[q]= . This can be a string. Flarum search bar uses this. Gambits such as  author:username are supported. -  ids - fetches entries with specific ids, passed into  ?filter[id]= . This is a list, that is then converted into comma separated string. -  limit - limit of entires to fetch. Flarum (by default) allows a max. of 50 entries to be fetched at once. Passed into  ?page[limit]= -  page - fetch a specific page of entires. This is actually an offset - which is determined by multiplying  page with  limit (see above). -  include - include specific entries. See [included data](https: cwkevo.github.io/pyflarum/docs/ included-data). You will likely never use this. -  additional_data - this is a  dict ( parameter: value ) of additional search parameters that you might want to use. This can be used to overwrite previous filters."
},
{
"ref":"pyflarum.flarum.core.filters.Filter.to_dict",
"url":39,
"doc":"Converts the filter to a  dict , so that it can be sent to the API ( requests module, see [\"Passing parameters in URLs\"](https: docs.python-requests.org/en/master/user/quickstart/ passing-parameters-in-urls . An extension might add additional filter data after the filter was initialized (for example:  absolutely_all needs to update page number to continuously yield results)."
},
{
"ref":"pyflarum.flarum.core.forum",
"url":20,
"doc":""
},
{
"ref":"pyflarum.flarum.core.forum.Forum",
"url":20,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.title",
"url":20,
"doc":"The forum's title."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.description",
"url":20,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.showLanguageSelector",
"url":20,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.baseUrl",
"url":20,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.basePath",
"url":20,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.debug",
"url":20,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.apiUrl",
"url":20,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.welcomeTitle",
"url":20,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.welcomeMessage",
"url":20,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.themePrimaryColor",
"url":20,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.themeSecondaryColor",
"url":20,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.logoUrl",
"url":20,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.faviconUrl",
"url":20,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.headerHtml",
"url":20,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.footerHtml",
"url":20,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.allowSignUp",
"url":20,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.defaultRoute",
"url":20,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canViewForum",
"url":20,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canStartDiscussion",
"url":20,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canSearchUsers",
"url":20,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.adminUrl",
"url":20,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.version",
"url":20,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.allowUsernameMentionFormat",
"url":20,
"doc":""
},
{
"ref":"pyflarum.flarum.core.forum.Forum.get_groups",
"url":20,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.flarum.core.forum.Forum.included",
"url":20,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.flarum.core.forum.Forum.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.groups",
"url":40,
"doc":""
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup",
"url":40,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.to_dict",
"url":40,
"doc":"Converts the group to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a group."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.create",
"url":40,
"doc":"Creates the group. Returns the created  Group .",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.groups.Groups",
"url":40,
"doc":"A data of multiple groups fetched from the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Group",
"url":40,
"doc":"A Flarum group.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.groups.Group.nameSingular",
"url":40,
"doc":"Singular form of the group's name."
},
{
"ref":"pyflarum.flarum.core.groups.Group.namePlural",
"url":40,
"doc":"Plural form of the group's name."
},
{
"ref":"pyflarum.flarum.core.groups.Group.color",
"url":40,
"doc":"The color of the group."
},
{
"ref":"pyflarum.flarum.core.groups.Group.icon",
"url":40,
"doc":"[FontAwesome](https: fontawesome.com/v5.15/icons?d=gallery) icon of the group."
},
{
"ref":"pyflarum.flarum.core.groups.Group.isHidden",
"url":40,
"doc":"Whether or not the group is hidden on the forum."
},
{
"ref":"pyflarum.flarum.core.groups.Group.edit",
"url":40,
"doc":"Edits the group with new  PreparedGroup . Returns the edited  Group ",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.Group.delete",
"url":40,
"doc":"Removes the group forever. This is irreversible! Returns  True when the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.Group.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.groups.Group.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.groups.Group.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.groups.Group.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.groups.Group.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.groups.Group.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.notifications",
"url":41,
"doc":""
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications",
"url":41,
"doc":"A data of multiple notifications fetched from the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.mark_all_as_read",
"url":41,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification",
"url":41,
"doc":"Notification.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.contentType",
"url":41,
"doc":"The content type of the notification. Examples:  newPost ,  postLiked , etc ."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.content",
"url":41,
"doc":"The  dict of the notification's content."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.new_post_number",
"url":41,
"doc":"The new number of the potential post that triggered the notification."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.reply_number",
"url":41,
"doc":"The number of the reply post that possibly triggered the notification."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.createdAt",
"url":41,
"doc":"The  datetime of when was this notification triggered/created at."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.isRead",
"url":41,
"doc":"Whether or not the notification was read by you."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.from_user",
"url":41,
"doc":"From which user does the notification originate from? Returns  pyflarum.flarum.core.users.UserFromNotification .",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.get_subject",
"url":41,
"doc":"Returns the subject of the notification, either one of these: -  pyflarum.flarum.core.discussions.DiscussionFromNotification -  pyflarum.flarum.core.posts.PostFromNotification ",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.mark_as_read",
"url":41,
"doc":"Marks the notification as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts",
"url":4,
"doc":""
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost",
"url":4,
"doc":"A prepared post that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the post (see  PreparedPost.post() ). -  discussion - any discussion that the post belongs to. -  content - the post's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.to_dict",
"url":4,
"doc":"Converts the post to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a post."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.post",
"url":4,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.create",
"url":4,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.Posts",
"url":4,
"doc":"A data of multiple posts fetched from  /api/posts ."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Post",
"url":4,
"doc":"A Flarum post.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.Post.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.flarum.core.posts.Post.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.Post.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.Post.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.Post.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.Post.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.Post.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.Post.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.Post.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.Post.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.posts.Post.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk",
"url":4,
"doc":"A post from  Posts .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.content",
"url":4,
"doc":"This property is only available for  pyflarum.flarum.core.posts.PostFromNotification , but was included here due to class inheritance. Using this will just raise  NotImplementedError , so please do not use this."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification",
"url":4,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.content",
"url":4,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text. Only available in  pyflarum.flarum.core.posts.PostFromNotification ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.ipAddress",
"url":4,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.editedAt",
"url":4,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canEdit",
"url":4,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canDelete",
"url":4,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canHide",
"url":4,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.url",
"url":4,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.get_discussion",
"url":4,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.reply_to",
"url":4,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.get_author",
"url":4,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data is the same.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.edit",
"url":4,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion",
"url":4,
"doc":"A post from  Discussion .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.number",
"url":4,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.createdAt",
"url":4,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.contentType",
"url":4,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.is_comment",
"url":4,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.contentHtml",
"url":4,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.hide",
"url":4,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.restore",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.unhide",
"url":4,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.delete",
"url":4,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.edit",
"url":4,
"doc":"Edits the post.  new_post has to be a  PreparedPost object. Returns the  Post after edit.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users",
"url":5,
"doc":""
},
{
"ref":"pyflarum.flarum.core.users.Users",
"url":5,
"doc":"A data of multiple users fetched from the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.first_link",
"url":2,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.previous_link",
"url":2,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.next_link",
"url":2,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.users.User",
"url":5,
"doc":"An user that was fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.User.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.User.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.User.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.User.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.User.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.User.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.User.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.User.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.User.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.User.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.User.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.User.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.User.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.User.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.User.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.User.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.User.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.User.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.users.User.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk",
"url":5,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification",
"url":5,
"doc":"An user from  BaseNotification  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.MyUser",
"url":5,
"doc":"Your user, contains fullest user data.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.markedAllAsReadAt",
"url":5,
"doc":"When did you mark all discussions as read."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.unreadNotificationCount",
"url":5,
"doc":"Amount of your unread notifications."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.newNotificationCount",
"url":5,
"doc":"Amount of your new notifications."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.preferences",
"url":5,
"doc":"A raw  dict of your preferences (for notifications)."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.joinTime",
"url":5,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.discussionCount",
"url":5,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.commentCount",
"url":5,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEdit",
"url":5,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEditCredentials",
"url":5,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEditGroups",
"url":5,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canDelete",
"url":5,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.username",
"url":5,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.email",
"url":5,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.isEmailConfirmed",
"url":5,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.displayName",
"url":5,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.avatarUrl",
"url":5,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.slug",
"url":5,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.type",
"url":2,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.id",
"url":2,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.attributes",
"url":2,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.relationships",
"url":2,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data). Note: Not all \"individual\" objects have this property, usually the low-level ones (such as  PostFromX ,  DiscussionFromX , etc .)."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.data",
"url":2,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.session",
"url":1,
"doc":""
},
{
"ref":"pyflarum.session.FlarumSession",
"url":1,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  'pyflarum' . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example.  "
},
{
"ref":"pyflarum.session.FlarumSession.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.session.FlarumSession.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
},
{
"ref":"pyflarum.session.FlarumUser",
"url":1,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.session.FlarumUser.get_forum_data",
"url":1,
"doc":"Obtains the forum data, returns  Forum object.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_user_by_id",
"url":1,
"doc":"Obtains a user by specific ID.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_discussion_by_id",
"url":1,
"doc":"Obtains a discussion by specific ID.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_post_by_id",
"url":1,
"doc":"Obtains a post by specific ID.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_discussions",
"url":1,
"doc":"Obtains all discussions from  /api/discussions , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_posts",
"url":1,
"doc":"Obtains all posts from  /api/posts , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_users",
"url":1,
"doc":"Obtains all users from  /api/users , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_notifications",
"url":1,
"doc":"Obtains all of your notifications from  /api/notifications , optionally filtering results by using  filter .",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.mark_all_discussions_as_read",
"url":1,
"doc":"Marks all discussions as read. Specify  at to mark discussions as read at a specific date (strange how this is allowed, might be because of timezones).",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.mark_all_notifications_as_read",
"url":1,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.get_groups",
"url":1,
"doc":"Obtains all groups of a forum from  /api/groups .",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.update_user_info",
"url":1,
"doc":"Updates the info of a user (this can be your user or someone else). If you are updating yourself, then  FlarumUser is returned (with the new data). If you are updating someone else, then the updated  User is returned.  Parameters: -  user - the user to update. -  new_username - the user's new username. -  groups - new groups of the user. This can either be a list of  pyflarum.flarum.core.groups.Group objects, or just one  pyflarum.flarum.core.groups.Groups , or a list of  str or  int representing the group IDs.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.send_password_reset_email",
"url":1,
"doc":"Allows you to send yourself a password reset E-mail.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.update_preferences",
"url":1,
"doc":"Updates an user's preferences. If no user is specified, then your user is updated.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.change_email",
"url":1,
"doc":"Changes your E-mail. If  user is specified, then that user's E-mail is changed. If you are changing the E-mail of another user, you do not need to specify their password.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.upload_user_avatar",
"url":1,
"doc":"Uploads an avatar for yourself. If  user is specified, then avatar of that user is changed.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.remove_user_avatar",
"url":1,
"doc":"Removes your user's avatar. If  user is specified, then avatar of that user is removed.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.authenticate",
"url":1,
"doc":"Authenticates your user. This can be run after  FlarumUser was initialized, to switch to a different user. You can even change  FlarumUser.forum_url to login to another forum.  Parameters: -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in.",
"func":1
},
{
"ref":"pyflarum.session.FlarumUser.api_urls",
"url":1,
"doc":"Simple, hardcoded  'key: value'  dict of Flarum's API routes for quick access. API routes reference (old): https: github.com/flarum/flarum.github.io/blob/20322c0e6011e4f304ae7e95f41594a0b086bc27/_docs/api.md"
}
]