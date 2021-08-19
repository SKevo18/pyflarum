URLS=[
"docs/index.html",
"docs/session.html",
"docs/flarum/core/discussions.html",
"docs/flarum/core/index.html",
"docs/datetime_conversions.html",
"docs/flarum/index.html",
"docs/flarum/core/users.html",
"docs/flarum/core/notifications.html",
"docs/flarum/core/forum.html",
"docs/flarum/core/filters.html",
"docs/flarum/core/groups.html",
"docs/flarum/core/posts.html",
"docs/custom_types.html",
"docs/error_handler.html",
"docs/extensions/index.html",
"docs/extensions/admin.html",
"docs/extensions/flarum/index.html",
"docs/extensions/flarum/Flarum_Approval.html",
"docs/extensions/flarum/FoF_Spamblock.html",
"docs/extensions/flarum/Blomstra_Realtime.html",
"docs/extensions/flarum/FoF_Byobu.html",
"docs/extensions/flarum/Flarum_Likes.html",
"docs/extensions/flarum/Flarum_Subscriptions.html",
"docs/extensions/flarum/FoF_Merge.html",
"docs/extensions/flarum/Flarum_Sticky.html",
"docs/extensions/flarum/FoF_PreventNecrobumping.html",
"docs/extensions/flarum/Flarum_Suspend.html",
"docs/extensions/flarum/Flarum_Markdown.html",
"docs/extensions/flarum/Flarum_Flags.html",
"docs/extensions/flarum/FoF_UserBio.html",
"docs/extensions/flarum/Askvortsov_ReplyTemplates.html",
"docs/extensions/flarum/FoF_Split.html",
"docs/extensions/flarum/Askvortsov_ModeratorWarnings.html",
"docs/extensions/flarum/Flarum_Lock.html",
"docs/extensions/flarum/FoF_UsernameRequest.html",
"docs/extensions/flarum/Malago_Achievements.html",
"docs/extensions/flarum/Flarum_Tags.html",
"docs/extensions/flarum/FoF_BestAnswer.html",
"docs/extensions/commands.html",
"docs/extensions/advanced_search.html",
"docs/extensions/absolutely_all.html",
"docs/extensions/watch.html"
];
INDEX=[
{
"ref":"pyflarum",
"url":0,
"doc":" \ud83d\udc0d pyFlarum ![GitHub issues](https: img.shields.io/github/issues/CWKevo/pyflarum?color=forestgreen&label=Issues) ![GitHub](https: img.shields.io/github/license/CWKevo/pyFlarum?color=yellow&label=License) Somewhere at the beginning of this year, I have started a concept to build a Python Flarum API client. The goal was to provide everyone an easy and extensible system to interact with Flarum's public API and perform user-related tasks. Later, I began to work on rebasing FreeFlarum's code, so this idea was left in the dust. But after that was done, I revisited this project and started over now that I had learned more about Python. Thus, I present to you my first (real) Python package - [pyFlarum](https: pypi.org/project/pyFlarum).  \ud83d\udd17 Useful links: - [\u2757 Changelog](https: github.com/CWKevo/pyflarum/releases) - [\ud83d\udde3 Discuss](https: discuss.flarum.org/d/28221) - [\ud83d\udcda Documentation](https: cwkevo.github.io/pyflarum/docs/) - [\ud83d\udc68\u200d\ud83d\udcbb GitHub repository](https: github.com/CWKevo/pyflarum) - [\ud83d\udc0d PyPi link](https: pypi.org/project/pyFlarum)  \ud83d\udc31\u200d\ud83c\udfcd Features: - Complete support for creating, retrieving, updating and deleting data. - (Almost) everything is object-oriented, with docstrings (still needs to be done) and examples to help you code faster. - Very extensible, thanks to custom extension & dependency system. The most common Flarum extensions are included out of the box, and more are still on the way. Read more about the extension system [here](https: cwkevo.github.io/pyflarum/docs/ extensions). - The data is fetched and stored as JSON, but the keys can be retrieved by using class properties, which also handles type conversions. - This means that instead of using  discussion['data']['attributes']['title'] , it is as simple as  discussion.title . - Flarum's JSON API works in saving mode. What I mean is that when you fetch a discussion from notification, not all of the discussion's data is present in the JSON. On the other hand, obtaining the discussion directly by it's ID results in a much detailed JSON. - To save you headaches, pyFlarum obviously handles this too and all of the objects have different hierarchy and inheritance. Example:  DiscussionFromNotification is parent for  DiscussionFromBulk and that's parent for  Discussion , where  Discussion object is discussion obtained directly from API, and therefore logically contains all properties of the previous objects (and JSON). This is all nicely rendered thanks to your editor's linting and type hints, so you won't make a mistake by accessing unexisting properties from parent objects. More about pyFlarum's inheritance system and it's flaws can be found [here](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).  \ud83d\ude80 Quickstart:  \ud83d\udcc0 Installation: This package requires Python 3.6+ and the [requests](https: pypi.org/project/requests) library to be installed. Yep, that's the only dependency. Should there be more over time, you can install them all at once by using this command (but I assume that you're already familiar with all of this, so feel free to skip this part):   pip install -r requirements.txt  or: python -m pip install -r requirements.txt   Installing is easy with:   pip install pyflarum -U  or: python -m pip install pyflarum -U   Updating:   python -m pip install pyflarum -U  upgrade  or: pip install pyflarum  upgrade -U   Uninstalling:   python -m pip uninstall pyflarum  or: pip uninstall pyflarum    \ud83d\udcdc Quickstart Example: How easy is it to fetch a specific discussion and print it's title? The answer - luckily, it's actually quite easy:   from pyflarum import FlarumUser  Here, we initialize our  FlarumUser object. You can't do anything without this first: USER = FlarumUser(forum_url=\"https: discuss.flarum.org\")   forum_url parameter mustn't end with a slash, or it chokes on API URLs!  Now, let's get the discussion: discussion = USER.get_discussion_by_id(28221) print(discussion.title)   That's just amazing 4 lines of code (without comments and newlines)!  \u27a1 What's next? Check the [documentation](https: cwkevo.github.io/pyflarum/docs/) to dive deep into the concepts of this project and learn more! I will now take a small break from maintaining this - I still want to do a bit more projects this summer now that I have some time. However, I am open for feature requests and bug reports at the [GitHub repository](https: github.com/CWKevo/pyflarum/issues). The documentation is still not finished yet, but that can wait for now until some people show some interest in this. My honest view is that I do not want to work on something that people will not enjoy, and I will likely require some motivation in order to keep this project alive. If no interest is shown, I will occassionaly push bugfixes and features for my personal use over time. I don't actually expect much people to use this, but I'd be surprised and happy if you would!  \ud83d\udcdc Examples: I'll show you some more examples before we dive deep into the details at the [documentation](https: cwkevo.github.io/pyflarum/docs/). All of the following snippets assume that you already have your  USER object initialized. Get all discussions from the front page ( /api/discussions ) and print the title & URL:   for discussion in USER.all_discussions(): print(discussion.title, discussion.url)   Obtain some user:   user = USER.get_user_by_id(1) for group in user.get_groups(): print(group.nameSingular)   You can find more examples in the sections below, or browse the [tests](https: github.com/CWKevo/pyflarum/tree/main/tests) directory of the source code for full examples of various tasks. These will be regularly updated, [should this stay maintained]( \u27a1-whats-next), to ensure that old stuff works and new features behave correctly too.  \ud83d\udce1 Parameters By default, pyFlarum works by just knowing the forum's URL. But there are more options to choose from. Let's go through the basic ones:  \ud83d\udd10 Authentication In order to perform user related actions, you must be logged in. This is easier done than said (pun unintended):   USER = FlarumUser(forum_url=\"https: discuss.flarum.org\", username=\"yourusername\", password=\" TopSecret123\")    .just like that! However, I  strongly recommend you to store your user's credentials in a  .env file and load it by using a library such as [python-dotenv](https: pypi.org/project/python-dotenv):  .env:   username=\"foo\" password=\"hahayouexpectedbarbutno\"    script.py:   import os from dotenv import load_dotenv load_dotenv() from pyflarum import FlarumUser USER = FlarumUser( forum_url=\"https: discuss.flarum.org\", username=os.environ[\"username\"], password=os.environ[\"password\"] )   > Don't forget to exclude  .env in your  .gitignore , if you're using Git (in other words, don't be like me once)!  \ud83d\udcda Cached sessions: By default, pyFlarum uses the standard  Session object from Python's [requests](https: pypi.org/project/requests). However, it is possible to pass your own  Session object. A practical use case would be to use [requests_cache's](https: pypi.org/projects/requests_cache)  CachedSession object instead:   from requests_cache import CachedSession from pyflarum import FlarumUser USER = FlarumUser( forum_url=\"https: discuss.flarum.org\", session_object=CachedSession() )   The cache really makes a difference and can speed requests by up to 10x! But I decided to make it optional, as it is not ideal for frequent API calls (e. g. watching for notifications/mentions to respond to user's commands - yes, that's possible with [the commands and watch extensions](https: github.com/CWKevo/pyflarum/blob/main/tests/watch_for_commands.py  \ud83e\udde9 Extensions Similarly to [Flarum](https: discuss.flarum.org/t/extensions), pyFlarum also works around the concept of [extensions](https: cwkevo.github.io/pyflarum/docs/extensions/index.html). These can be imported and included in your  FlarumUser object as a list of extension classes:   from pyflarum import FlarumUser from pyflarum.extensions.flarum.core import Flarum_Likes USER = FlarumUser( forum_url=\"https: discuss.flarum.org\" extensions=[ Flarum_Likes.LikesExtension ] )   .    \ud83d\udc32 Dealing with type hints I really tried to make this work, but I couldn't. In case you haven't head about them, read [this](https: docs.python.org/3/library/typing.html). Basically, they help you read your code before it's run. The thing is, extensions work on principe of [monkey-patching](https: stackoverflow.com/questions/5626193/what-is-monkey-patching). When you create a  FlarumUser object with extensions, the mixins (classes of properties and functions) of that extensions are copied to the main  FlarumUser class (or others). And there is no way for your editor to handle this (or at least, I haven't found a way around this - if you do, that would be amazing). The only option for now is to type hint the mixins directly, to make your editor recognize also the functions and properties from the extension: Example:   from pyflarum import FlarumUser from pyflarum.extensions.flarum.core import Flarum_Approval USER = FlarumUser( forum_url=\"https: discuss.flarum.org\" extensions=[ Flarum_Approval.ApprovalExtension ] ) discussion = USER.get_discussion_by_id(1) discussion.isApproved    Note: The  Flarum_Approval extension contains only one mixin for discussions:  Flarum_Approval.ApprovalDiscussionFromNotificationMixin . Since this is a parent of  Discussion because of the [inheritance]( \u2b06-class-inheritance), you can type-hint just that for it to work (no  Union from [typing](https: docs.python.org/3/library/typing.html) is required). You can check the [extensions documentation](https: cwkevo.github.io/pyflarum/docs/extensions) for list of available mixins and extensions, or the [source code](https: github.com/CWKevo/pyflarum/tree/main/pyflarum/extensions).  \u2b06 Class Inheritance pyFlarum's inhertitance needed to be wrapped around Flarum's API, so that these two can work together. To understand this system, we need to first understand how Flarum's API works: Normally, there is an API route for multiple (bulk) object's data. You can further specify the ID to obtain the specific object's data. Let's say we want to fetch all discussions from the front page. We could do that by visiting  /api/discussions of your favourite Flarum forum. Here, we see a bunch of JSON data of discussions. We can pick one, and then visit  /api/discussions/:discussion_id to fetch specific discussion's JSON. By comparing the data from the bulk route ( /api/discussions ) and specific route ( /api/discussions/:discussion_id ), we can see that the specific route contains more detailed JSON information of the discussion. Specifically, this means that discussion from bulk contains just data for the first post, whereas the specific route contains all posts (for example). Usually, Flarum inherits the more detailed data's properties from the previous less detailed ones. This means that discussion from bulk might contain ID, type and a few attributes, such as the title of the discussion. So, the specific discussion contains all the data that discussion from bulk contains (ID, type, title .) + all the posts (which too only get referenced when there are many of them). Luckily, I have put my best efforts to make pyFlarum handle this for you. That's why there are multiple objects for each of Flarum's thingies. Here's an example inheritance structure for posts:   (contains) (is parent for) Posts >> PostFromBulk -> Post   Or (more complicated) notifications:   (contains) (contains) (inherits from) Notifications >> Notification >> PostFromNotification  Post (is parent for) (is parent for)    \ud83d\udcdc Example: Fetch all discussions from the front page:   for discussion in USER.all_discussions(): print(type(discussion     Note how the type is  DiscussionFromBulk instead of  Discussion ? That's because  DiscussionFromBulk doesn't contain full data like  Discussion does. The data gets limited for Flarum's purposes. For example, you don't need all posts in order to render the discussions at the front page - so Flarum omits the posts from the data. You need to make additional API call to fetch the full data (with posts):    Wrong: for discussion in USER.all_discussions(): for posts in discussion.get_posts(): print(post.url)      Correct: for discussion in USER.all_discussions(): full_discussion = discussion.get_full_data()  makes an additional API call to fetch  /api/discussions/:discussion_id for posts in full_discussion.get_posts(): print(post.url)    \ud83d\udc40 Included data That was the easy part of the inheritance system. It gets more complicated with the  included things. Each API call might contain an  included section with more detailed data for referenced objects. Let's examine a wild JSON spotted in the real world:   { \"data\": [ { \"type\": \"discussions\", \"id\": \"1\", \"attributes\": { \"title\": \"An example title\" }, \"relationships\": { \"firstPost\": { \"data\": { \"type\": \"posts\", \"id\": \"1\" } } } } ], \"included\": [ { \"type\": \"posts\", \"id\": \"1\", \"attributes\": { \"content\": \"Bla bla bla\" } } ] }   This is a simplified syntax of how might a JSON for  /api/discussions look like. We can see a discussion with ID  1 , that has a special  pyflarum.flarum.core.discussions.DiscussionFromBulk.relationships array (or dictionary, if you're a Pythonista). This array contains a reference for  firstPost (unsurprisingly, that's the first post of the discussion). The full data is in the  pyflarum.flarum.core.discussions.Discussions.included section of the JSON, where we indeed can see a post object with the corresponding ID of  1 . Again, I put together what I could to make this work for you instead of you working for it. Whenever pyFlarum makes an API call to a top-level route such as  /api/discussions , obtaining a discussion from that will include the parent  pyflarum.flarum.core.discussions.Discussions.included in that discussion as well. So now, whenever you would like to obtain a post from that discussion, the reference for that post is found in the  relationships array and then it gets recursively matched to the resulting  pyflarum.flarum.core.posts.PostFromDiscussion in the  pyflarum.flarum.core.discussions.Discussions.included section. See [parent included](https: cwkevo.github.io/pyflarum/docs/ parent-included) below. From Flarum's side, this was done to eliminate frequent API calls and to save on the JSON's size. Including the full data would possibly make the JSON contain duplicates, if for example, all posts were made by the same user. This way, the user is included only once in the  pyflarum.flarum.core.discussions.Discussions.included section, and we saved some bytes to transfer. People using paid mobile networks will be grateful to save some cents. You might be asking, why keep tossing the parent  included into every object? Well, from pyFlarum's side this was done to save on the amount of requests and to speed the package up. Of course, instead of looking things in  included , you could make a direct API call to retrieve the full data of the object you want. But this would slow things down drastically, when you're operating with large amounts of data at the same time (e. g. fetching all discussions and posts - you'd need to make separate API call for every post in order to obtain the data - this way, everything's already in  included ). This is very complicated, and I can't explain things, so it might be worthy checking the source code, if you care to learn more about how pyFlarum handles this.  \ud83d\udcda Parent included It is a JSON data of the parent's included JSON data. > I put together what I could to make this work for you instead of you working for it. Whenever pyFlarum makes an API call to a top-level route such as  /api/discussions , obtaining a discussion from that will include the parent  pyflarum.flarum.core.discussions.Discussions.included in that discussion as well. So now, whenever you would like to obtain a post from that discussion, the reference for that post is found in the  relationships array and then it gets recursively matched to the resulting  pyflarum.flarum.core.posts.PostFromDiscussion in the  pyflarum.flarum.core.discussions.Discussions.included section.  Long explanation for nerds (I am not good at explaining): This is because of the way [Flarum's includes](https: cwkevo.github.io/pyflarum/docs/ included-data) work. When you run a function such as  pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author() , the data for the author is not directly in the  pyflarum.flarum.core.discussions.DiscussionFromBulk 's JSON. This means that pyFlarum would have to make a new API call everytime you run  pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author() , and you'd see 429 sooner than usual. Instead, the data is already in the parent's ( pyflarum.flarum.core.discussions.Discussions.included ) data. And since that gets passed to this object too, pyFlarum doesn't need to make any more API calls - instead, it just picks the right author from that data. You can think of this as a cache in a nutshell, if it's unclear for you. And if things are still confusing you, you just don't need to worry about this because pyFlarum handles everything for you in the background. Unless you are forging this object's JSON data by yourself, and you don't pass the parent's included - this would mean that all functions that rely on that will break. I have never spotted any weird stuff by normal usage of pyFlarum during testing, but there's perhaps a very tiny chance that this system can possibly bug out."
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
"doc":"Returns a list of  pyflarum.flarum.core.posts.PostFromBulk objects. It might seem strange why this doesn't return  pyflarum.flarum.core.posts.PostFromDiscussion instead, but these posts are in fact identical to  pyflarum.flarum.core.posts.PostFromBulk , that's why they are returned.",
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
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.Discussion.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.Discussion.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.Discussion.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.Discussion.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.Discussion.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.Discussion.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.Discussion.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.Discussion.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.Discussion.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.Discussion.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.Discussion.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.Discussion.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.Discussion.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.Discussion.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.Discussion.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.Discussion.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.Discussion.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.Discussion.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.Discussion.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.Discussion.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.Discussion.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.Discussion.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.Discussion.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.Discussion.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.Discussion.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.Filter",
"url":0,
"doc":"Represents a Flarum API filter as a  dict . It allows you to filter discussions without having to manually specify URL parameters."
},
{
"ref":"pyflarum.Filter.to_dict",
"url":0,
"doc":"Converts the filter to a  dict , so that it can be sent to the API. An extension might add additional data during runtime."
},
{
"ref":"pyflarum.session",
"url":1,
"doc":""
},
{
"ref":"pyflarum.session.FlarumSession",
"url":1,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the user isn't logged in. -  password - optional. The user's password. If  None , then the user isn't logged in. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  'pyflarum' . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example.  "
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
},
{
"ref":"pyflarum.datetime_conversions",
"url":4,
"doc":""
},
{
"ref":"pyflarum.datetime_conversions.flarum_to_datetime",
"url":4,
"doc":"Converts Flarum's datetime string to Python's datetime object. Doesn't convert if the parameter is already a datetime object. Flarum's datetime format is  %Y-%m-%dT%H:%M:%S%z ",
"func":1
},
{
"ref":"pyflarum.datetime_conversions.datetime_to_flarum",
"url":4,
"doc":"Converts Python's datetime object to Flarum's datetime string. Doesn't convert if the parameter is already a string. Flarum's datetime format is  %Y-%m-%dT%H:%M:%S%z ",
"func":1
},
{
"ref":"pyflarum.flarum",
"url":5,
"doc":""
},
{
"ref":"pyflarum.flarum.core",
"url":3,
"doc":""
},
{
"ref":"pyflarum.flarum.core.BaseFlarumObject",
"url":3,
"doc":"The base Flarum object - all API objects have properties of this object.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumObject.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject",
"url":3,
"doc":"The base object for Flarum \"bulk\" objects - all API objects that contain other objects have these properties. Examples of bulk objects: -  pyflarum.flarum.core.users.UserFromBulk -  pyflarum.flarum.core.discussions.DiscussionFromBulk -  pyflarum.flarum.core.posts.PostFromBulk  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumBulkObject.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject",
"url":3,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.BaseFlarumIndividualObject.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users",
"url":6,
"doc":""
},
{
"ref":"pyflarum.flarum.core.users.Users",
"url":6,
"doc":"A data of multiple users fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.Users.get_users",
"url":6,
"doc":"All users from the  Users object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.users.Users.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.users.Users.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.users.Users.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.users.Users.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification",
"url":6,
"doc":"An user from  BaseNotification  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromNotification.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk",
"url":6,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.UserFromBulk.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.User",
"url":6,
"doc":"An user that was fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.User.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.User.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.User.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.User.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.User.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.User.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.User.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.User.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.User.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.User.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.User.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.User.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.User.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.User.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.User.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.User.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.User.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.User.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.users.MyUser",
"url":6,
"doc":"Your user, contains fullest user data.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.markedAllAsReadAt",
"url":6,
"doc":"When did you mark all discussions as read."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.unreadNotificationCount",
"url":6,
"doc":"Amount of your unread notifications."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.newNotificationCount",
"url":6,
"doc":"Amount of your new notifications."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.preferences",
"url":6,
"doc":"A raw  dict of your preferences (for notifications)."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.users.MyUser.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.notifications",
"url":7,
"doc":""
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications",
"url":7,
"doc":"A data of multiple notifications fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.get_notifications",
"url":7,
"doc":"All notifications from the  Notifications object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.mark_all_as_read",
"url":7,
"doc":"Marks all notifications as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.notifications.Notifications.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification",
"url":7,
"doc":"Notification.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.contentType",
"url":7,
"doc":"The content type of the notification. Examples:  newPost ,  postLiked , etc ."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.content",
"url":7,
"doc":"The  dict of the notification's content."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.new_post_number",
"url":7,
"doc":"The new number of the potential post that triggered the notification."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.reply_number",
"url":7,
"doc":"The number of the reply post that possibly triggered the notification."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.createdAt",
"url":7,
"doc":"The  datetime of when was this notification triggered/created at."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.isRead",
"url":7,
"doc":"Whether or not the notification was read by you."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.from_user",
"url":7,
"doc":"From which user does the notification originate from? Returns  pyflarum.flarum.core.users.UserFromNotification .",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.get_subject",
"url":7,
"doc":"Returns the subject of the notification, either one of these: -  pyflarum.flarum.core.discussions.DiscussionFromNotification -  pyflarum.flarum.core.posts.PostFromNotification ",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.mark_as_read",
"url":7,
"doc":"Marks the notification as read. Returns  True when successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.notifications.Notification.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.forum",
"url":8,
"doc":""
},
{
"ref":"pyflarum.flarum.core.forum.Forum",
"url":8,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.title",
"url":8,
"doc":"The forum's title."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.description",
"url":8,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.showLanguageSelector",
"url":8,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.baseUrl",
"url":8,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.basePath",
"url":8,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.debug",
"url":8,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.apiUrl",
"url":8,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.welcomeTitle",
"url":8,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.welcomeMessage",
"url":8,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.themePrimaryColor",
"url":8,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.themeSecondaryColor",
"url":8,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.logoUrl",
"url":8,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.faviconUrl",
"url":8,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.headerHtml",
"url":8,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.footerHtml",
"url":8,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.allowSignUp",
"url":8,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.defaultRoute",
"url":8,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canViewForum",
"url":8,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canStartDiscussion",
"url":8,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.canSearchUsers",
"url":8,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.adminUrl",
"url":8,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.version",
"url":8,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.allowUsernameMentionFormat",
"url":8,
"doc":""
},
{
"ref":"pyflarum.flarum.core.forum.Forum.get_groups",
"url":8,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.flarum.core.forum.Forum.included",
"url":8,
"doc":"Raw  list[dict] of the forum's included objects."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.forum.Forum.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.filters",
"url":9,
"doc":""
},
{
"ref":"pyflarum.flarum.core.filters.Filter",
"url":9,
"doc":"Represents a Flarum API filter as a  dict . It allows you to filter discussions without having to manually specify URL parameters."
},
{
"ref":"pyflarum.flarum.core.filters.Filter.to_dict",
"url":9,
"doc":"Converts the filter to a  dict , so that it can be sent to the API. An extension might add additional data during runtime."
},
{
"ref":"pyflarum.flarum.core.discussions",
"url":2,
"doc":""
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion",
"url":2,
"doc":"A prepared discussion that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the discussion (see  PreparedDiscussion.post() ). -  title - the discussion's title. -  content - discussion's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.to_dict",
"url":2,
"doc":"Converts the discussion to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.post",
"url":2,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.create",
"url":2,
"doc":"Posts/creates the discussion. Raises  FlarumError if it failed, otherwise the new  Discussion is returned. This is the same as  PreparedDiscussion.create() .",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.PreparedDiscussion.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions",
"url":2,
"doc":"A data of multiple discussions fetched from  /api/discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.get_discussions",
"url":2,
"doc":"Obtains all discussions from the  Discussions object as a  list . Returns a  list of  DiscussionFromBulk .",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussions.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification",
"url":2,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.hide",
"url":2,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.restore",
"url":2,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.unhide",
"url":2,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.delete",
"url":2,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromNotification.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk",
"url":2,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.DiscussionFromBulk.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion",
"url":2,
"doc":"A Flarum discussion, obtained directly from the API by ID. This is the top-level discussion object that contains all the properties of a discussion, and inherits properties from all previous discussion-like objects. Learn more about inheritance [here](https: cwkevo.github.io/pyflarum/docs/ class-inheritance)  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.included",
"url":2,
"doc":"Returns raw list of JSON included data. Learn more about included data [here](https: cwkevo.github.io/pyflarum/docs/ included-data)"
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_author",
"url":2,
"doc":"Obtains the discussion's author, AKA. the author of the post with number 1 in a discussion.  mode allows you to specify the mode that is used to determine whether or not the post is the first post of the discussion. -  'first_number' - checks if the number of the post is 1 - if yes, it fetches that post's author. -  Any - if anything other than  'first_number' is passed (e. g.  'first_user , but this can be anything), then this returns the author of the first post in the JSON. I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_posts",
"url":2,
"doc":"Returns a list of  pyflarum.flarum.core.posts.PostFromBulk objects. It might seem strange why this doesn't return  pyflarum.flarum.core.posts.PostFromDiscussion instead, but these posts are in fact identical to  pyflarum.flarum.core.posts.PostFromBulk , that's why they are returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_first_post",
"url":2,
"doc":"The  Discussion object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this function was included in  Discussion , but it does not work!  Alternative:   discussion = user.get_discussion_by_id(1) first_post = discussion.get_posts()[0]  ",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.discussions.Discussion.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.groups",
"url":10,
"doc":""
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup",
"url":10,
"doc":"Base object for Flarum \"individual\" objects - all objects have these properties. Examples of \"individual\" objects: -  pyflarum.flarum.core.discussions.Discussion -  pyflarum.flarum.core.posts.Post -  pyflarum.flarum.core.PostFromDiscussion  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.to_dict",
"url":10,
"doc":"Converts the group to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a group."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.create",
"url":10,
"doc":"Creates the group. Returns the created  Group .",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.groups.PreparedGroup.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.groups.Groups",
"url":10,
"doc":"A data of multiple groups fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.get_groups",
"url":10,
"doc":"All groups from the  Groups object, as a  list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.Groups.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.groups.Groups.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.groups.Group",
"url":10,
"doc":"A Flarum group.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.groups.Group.nameSingular",
"url":10,
"doc":"Singular form of the group's name."
},
{
"ref":"pyflarum.flarum.core.groups.Group.namePlural",
"url":10,
"doc":"Plural form of the group's name."
},
{
"ref":"pyflarum.flarum.core.groups.Group.color",
"url":10,
"doc":"The color of the group."
},
{
"ref":"pyflarum.flarum.core.groups.Group.icon",
"url":10,
"doc":"[FontAwesome](https: fontawesome.com/v5.15/icons?d=gallery) icon of the group."
},
{
"ref":"pyflarum.flarum.core.groups.Group.isHidden",
"url":10,
"doc":"Whether or not the group is hidden on the forum."
},
{
"ref":"pyflarum.flarum.core.groups.Group.edit",
"url":10,
"doc":"Edits the group with new  PreparedGroup . Returns the edited  Group ",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.Group.delete",
"url":10,
"doc":"Removes the group forever. This is irreversible! Returns  True when the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.groups.Group.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.groups.Group.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.groups.Group.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.groups.Group.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.groups.Group.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts",
"url":11,
"doc":""
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost",
"url":11,
"doc":"A prepared post that can be sent to the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object that will create the post (see  PreparedPost.post() ). -  discussion - any discussion that the post belongs to. -  content - the post's content. You can use the traditional Flarum's markdown syntax."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.to_dict",
"url":11,
"doc":"Converts the post to a  dict , so that it can be sent to the API. An extension might add additional data during runtime. This is the most basic template that Flarum requires when creating a post."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.post",
"url":11,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.create",
"url":11,
"doc":"Posts/creates the post. Raises  FlarumError on error, otherwise it returns the created  Post .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PreparedPost.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.Posts",
"url":11,
"doc":"A data of multiple posts fetched from  /api/posts .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.get_posts",
"url":11,
"doc":"All posts from the  Posts object, as  list .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Posts.links",
"url":3,
"doc":"A raw  dict of the object's API links."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.first_link",
"url":3,
"doc":"First link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.previous_link",
"url":3,
"doc":"Previous link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.next_link",
"url":3,
"doc":"Next link in the API."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.included",
"url":3,
"doc":"Raw  dict of the object's included data."
},
{
"ref":"pyflarum.flarum.core.posts.Posts.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion",
"url":11,
"doc":"A post from  Discussion .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.number",
"url":11,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.createdAt",
"url":11,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.contentType",
"url":11,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.is_comment",
"url":11,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.contentHtml",
"url":11,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.hide",
"url":11,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.restore",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.unhide",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.delete",
"url":11,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.edit",
"url":11,
"doc":"Edits the post.  new_post has to be a  PreparedPost object. Returns the  Post after edit.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromDiscussion.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification",
"url":11,
"doc":"A post from  Notification .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.content",
"url":11,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.ipAddress",
"url":11,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.editedAt",
"url":11,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canEdit",
"url":11,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canDelete",
"url":11,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.canHide",
"url":11,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.url",
"url":11,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.get_discussion",
"url":11,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.reply_to",
"url":11,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.get_author",
"url":11,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.edit",
"url":11,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.number",
"url":11,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.createdAt",
"url":11,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.contentType",
"url":11,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.is_comment",
"url":11,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.contentHtml",
"url":11,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.hide",
"url":11,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.restore",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.unhide",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.delete",
"url":11,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromNotification.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk",
"url":11,
"doc":"A post from  Posts .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.content",
"url":11,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.ipAddress",
"url":11,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.editedAt",
"url":11,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canEdit",
"url":11,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canDelete",
"url":11,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.canHide",
"url":11,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.url",
"url":11,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.get_discussion",
"url":11,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.reply_to",
"url":11,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.get_author",
"url":11,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.edit",
"url":11,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.number",
"url":11,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.createdAt",
"url":11,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.contentType",
"url":11,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.is_comment",
"url":11,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.contentHtml",
"url":11,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.hide",
"url":11,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.restore",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.unhide",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.delete",
"url":11,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.PostFromBulk.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.flarum.core.posts.Post",
"url":11,
"doc":"A Flarum post.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.flarum.core.posts.Post.content",
"url":11,
"doc":"The post's content. Doesn't contain markdown, and is just plain-text."
},
{
"ref":"pyflarum.flarum.core.posts.Post.ipAddress",
"url":11,
"doc":"The post's IP address. Returns  None if you don't have the permissions to view IP address of the post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.editedAt",
"url":11,
"doc":"The  datetime when was this post edited at."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canEdit",
"url":11,
"doc":"Whether or not you are able to edit this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canDelete",
"url":11,
"doc":"Whether or not you are able to delete this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.canHide",
"url":11,
"doc":"Whether or not you are able to hide this post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.url",
"url":11,
"doc":"The post's URL."
},
{
"ref":"pyflarum.flarum.core.posts.Post.get_discussion",
"url":11,
"doc":"Obtains the discussion of the post. Returns  pyflarum.flarum.core.discussions.DiscussionFromNotification , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.reply_to",
"url":11,
"doc":"Replies to this  Post with another  PreparedPost .",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.get_author",
"url":11,
"doc":"Obtains the post's author. Returns  pyflarum.flarum.core.users.UserFromBulk , because its JSON data matches.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.edit",
"url":11,
"doc":"Edits the post. The new post should be a  PreparedPost object.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.number",
"url":11,
"doc":"The post's number/order in the discussion."
},
{
"ref":"pyflarum.flarum.core.posts.Post.createdAt",
"url":11,
"doc":"The  datetime of when was this post created."
},
{
"ref":"pyflarum.flarum.core.posts.Post.contentType",
"url":11,
"doc":"Post's content type. This is usually a  comment for user-made posts, but this can differ if it's actually a message that a post's tags changed, or the discussion got moved elsewhere (these messages are treated as posts too by Flarum)"
},
{
"ref":"pyflarum.flarum.core.posts.Post.is_comment",
"url":11,
"doc":"Whether or not the post is comment.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.contentHtml",
"url":11,
"doc":"The HTML content of the post."
},
{
"ref":"pyflarum.flarum.core.posts.Post.hide",
"url":11,
"doc":"Hides the post. Raises  FlarumError if it failed, otherwise the hidden  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.restore",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.unhide",
"url":11,
"doc":"Restores the post (unhides). Raises  FlarumError if it failed, otherwise the restored  Post is returned.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.delete",
"url":11,
"doc":"Removes the post forever. Returns  True if the deletion was successful.",
"func":1
},
{
"ref":"pyflarum.flarum.core.posts.Post.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.flarum.core.posts.Post.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.flarum.core.posts.Post.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.flarum.core.posts.Post.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.flarum.core.posts.Post.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.custom_types",
"url":12,
"doc":"Custom types for pyFlarum.  Types: -  AnyUser -  User |  UserFromBulk |  UserFromNotification -  AnyDiscussion -  Discussion |  DiscussionFromBulk |  DiscussionFromNotification -  AnyPost -  Post |  PostFromBulk |  PostFromNotification "
},
{
"ref":"pyflarum.error_handler",
"url":13,
"doc":""
},
{
"ref":"pyflarum.error_handler.FlarumError",
"url":13,
"doc":"Generic class for all Flarum related errors."
},
{
"ref":"pyflarum.error_handler.MissingExtensionError",
"url":13,
"doc":"Missing pyFlarum extension error."
},
{
"ref":"pyflarum.error_handler.MissingExtensionWarning",
"url":13,
"doc":"Missing pyFlarum extension warning."
},
{
"ref":"pyflarum.error_handler.parse_request",
"url":13,
"doc":"Parses the request as JSON, raises  FlarumError if something went wrong.",
"func":1
},
{
"ref":"pyflarum.error_handler.handle_errors",
"url":13,
"doc":"Handles Flarum & request related errors. Returns  FlarumError if an error was found,  True otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions",
"url":14,
"doc":""
},
{
"ref":"pyflarum.extensions.ExtensionMixin",
"url":14,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.ExtensionMixin.get_dependencies",
"url":14,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.ExtensionMixin.mixin",
"url":14,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.admin",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings",
"url":15,
"doc":"dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d = {} for k, v in iterable: d[k] = v dict( kwargs) -> new dictionary initialized with the name=value pairs in the keyword argument list. For example: dict(one=1, two=2)"
},
{
"ref":"pyflarum.extensions.admin.MailSettings.data",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.type",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.id",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.attributes",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.fields",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun_secret",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mailgun_domain",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.log",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.smtp",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_host",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_port",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_encryption",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_username",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.mail_password",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.sending",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.MailSettings.errors",
"url":15,
"doc":""
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin",
"url":15,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.enable_extension",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.disable_extension",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.clear_cache",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_forum_info",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.get_mail_settings",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_mail_settings",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.send_test_mail",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_appearance",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.upload_logo",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.remove_logo",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.upload_favicon",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.remove_favicon",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_header",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_footer",
"url":15,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminFlarumUserMixin.update_custom_css",
"url":15,
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
"url":15,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.get_dependencies",
"url":15,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.admin.AdminExtension.mixin",
"url":15,
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
"ref":"pyflarum.extensions.flarum",
"url":16,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval",
"url":17,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin",
"url":17,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin.isApproved",
"url":17,
"doc":"Whether or not the discussion is approved."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin",
"url":17,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.isApproved",
"url":17,
"doc":"Whether or not the post is approved."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.canApprove",
"url":17,
"doc":"Whether or not you are able to approve the post"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin.approve",
"url":17,
"doc":"Approve the post. Use  force to approve despite the post being approved already, and do not raise  FlarumError .",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension",
"url":17,
"doc":"https: packagist.org/packages/flarum/approval"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension.get_dependencies",
"url":17,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Approval.ApprovalExtension.mixin",
"url":17,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock",
"url":18,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin",
"url":18,
"doc":"An user from  BaseNotification  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.spamblock",
"url":18,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserFromNotificationMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin",
"url":18,
"doc":"An user that was fetched from the API.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canSpamblock",
"url":18,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockUserMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension",
"url":18,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension.get_dependencies",
"url":18,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Spamblock.SpamblockExtension.mixin",
"url":18,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime",
"url":19,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin",
"url":19,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin.canViewWhoTypes",
"url":19,
"doc":"Whether or not you can view who is typing in real time."
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension",
"url":19,
"doc":"https: extiverse.com/extension/blomstra/realtime"
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension.get_dependencies",
"url":19,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeExtension.mixin",
"url":19,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin",
"url":20,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditRecipients",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditUserRecipients",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canEditGroupRecipients",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin",
"url":20,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.blocksPd",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.cannotBeDirectlyMessaged",
"url":20,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuUserMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension",
"url":20,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension.get_dependencies",
"url":20,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Byobu.ByobuExtension.mixin",
"url":20,
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
"doc":""
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
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin",
"url":21,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin.canLike",
"url":21,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin",
"url":21,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin.get_liked_by",
"url":21,
"doc":"Obtain the list of users that liked the post.",
"func":1
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
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions",
"url":22,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin",
"url":22,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.follow",
"url":22,
"doc":"Follow the discussion and be notified of all new activity.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.unfollow",
"url":22,
"doc":"Unfollow the discussion, but be notified when someone mentions you.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin.ignore",
"url":22,
"doc":"Ignore the discussion, never be mentioned. Note that this will also hide the discussion from  Discussions . Currently, the only ways to access ignored Flarum discussions that I am aware of are: 1. Accessing the discussion directly (by ID). 2. Using  pyflarum.flarum.core.filters.Filter (e. g.  Filter(query=\"is:ignored\") ).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin",
"url":22,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.subscription",
"url":22,
"doc":"Get the current subscription state of the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.follow",
"url":22,
"doc":"Follow the discussion and be notified of all new activity.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.unfollow",
"url":22,
"doc":"Unfollow the discussion, but be notified when someone mentions you.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin.ignore",
"url":22,
"doc":"Ignore the discussion, never be mentioned. Note that this will also hide the discussion from  Discussions . Currently, the only ways to access ignored Flarum discussions that I am aware of are: 1. Accessing the discussion directly (by ID). 2. Using  pyflarum.flarum.core.filters.Filter (e. g.  Filter(query=\"is:ignored\") ).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension",
"url":22,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension.get_dependencies",
"url":22,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsExtension.mixin",
"url":22,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge",
"url":23,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin",
"url":23,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canMerge",
"url":23,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension",
"url":23,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension.get_dependencies",
"url":23,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Merge.MergeExtension.mixin",
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
"doc":""
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
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin",
"url":24,
"doc":""
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
"ref":"pyflarum.extensions.flarum.Flarum_Sticky.StickyExtension",
"url":24,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
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
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping",
"url":25,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin",
"url":25,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.fof_prevent_necrobumping",
"url":25,
"doc":"I have no idea what this does either, sorry."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension",
"url":25,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension.get_dependencies",
"url":25,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingExtension.mixin",
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
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendUserMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Suspend.SuspendExtension",
"url":26,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
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
"ref":"pyflarum.extensions.flarum.Flarum_Markdown",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin",
"url":27,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ForumMixin.markdown_mdarea",
"url":27,
"doc":"Whether or not the MDArea is enabled for markdown."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension",
"url":27,
"doc":"https: packagist.org/packages/flarum/markdown"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension.get_dependencies",
"url":27,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Markdown.ExampleExtension.mixin",
"url":27,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.canViewFlags",
"url":28,
"doc":"Whether or not you can view all the flags on the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.flagCount",
"url":28,
"doc":"The total flagged post/discussion count (forum-wide)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsForumMixin.guidelinesUrl",
"url":28,
"doc":"The URL of the forum's guidelines, if specified by the admin."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin.canFlag",
"url":28,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension",
"url":28,
"doc":"https: packagist.org/packages/flarum/flags"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension.get_dependencies",
"url":28,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Flags.FlagsExtension.mixin",
"url":28,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin",
"url":29,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.max_bio_length",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.title",
"url":8,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.description",
"url":8,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.showLanguageSelector",
"url":8,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.baseUrl",
"url":8,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.basePath",
"url":8,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.debug",
"url":8,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.apiUrl",
"url":8,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.welcomeTitle",
"url":8,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.welcomeMessage",
"url":8,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.themePrimaryColor",
"url":8,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.themeSecondaryColor",
"url":8,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.logoUrl",
"url":8,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.faviconUrl",
"url":8,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.headerHtml",
"url":8,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.footerHtml",
"url":8,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.allowSignUp",
"url":8,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.defaultRoute",
"url":8,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canViewForum",
"url":8,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canStartDiscussion",
"url":8,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.canSearchUsers",
"url":8,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.adminUrl",
"url":8,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.version",
"url":8,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.get_groups",
"url":8,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.included",
"url":8,
"doc":"Raw  list[dict] of the forum's included objects."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioForumMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin",
"url":29,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin.update_user_bio",
"url":29,
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
"url":29,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.bio",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canViewBio",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditBio",
"url":29,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioUserFromBulkMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension",
"url":29,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension.get_dependencies",
"url":29,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UserBio.UserBioExtension.mixin",
"url":29,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates",
"url":30,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin",
"url":30,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.replyTemplate",
"url":30,
"doc":"The reply template for the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin.canManageReplyTemplates",
"url":30,
"doc":"Whether or not you are able to manage the discussion's reply templates."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension",
"url":30,
"doc":"https: extiverse.com/extension/askvortsov/flarum-discussion-templates"
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension.get_dependencies",
"url":30,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesExtension.mixin",
"url":30,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split",
"url":31,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin",
"url":31,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canSplit",
"url":31,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension",
"url":31,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension.get_dependencies",
"url":31,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_Split.SplitExtension.mixin",
"url":31,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings",
"url":32,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin",
"url":32,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canViewWarnings",
"url":32,
"doc":"Whether or not you can view the warnings of the user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canManageWarnings",
"url":32,
"doc":"Whether or not you are able to manage the user's warnings."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.canDeleteWarnings",
"url":32,
"doc":"Whether or not you can delete the user's warnings."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsUserFromBulkMixin.visibleWarningCount",
"url":32,
"doc":"The amount of warnings that you can see that belong to the user."
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension",
"url":32,
"doc":"https: extiverse.com/extension/askvortsov/flarum-moderator-warnings"
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension.get_dependencies",
"url":32,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Askvortsov_ModeratorWarnings.ModeratorWarningsExtension.mixin",
"url":32,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock",
"url":33,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin",
"url":33,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.lock",
"url":33,
"doc":"Locks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin.unlock",
"url":33,
"doc":"Unlocks the discussion.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin",
"url":33,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.isLocked",
"url":33,
"doc":"Whether or not the discussion is locked."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin.canLock",
"url":33,
"doc":"Whether or not you are able to lock the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension",
"url":33,
"doc":"https: packagist.org/packages/flarum/lock"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension.get_dependencies",
"url":33,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Lock.LockExtension.mixin",
"url":33,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin",
"url":34,
"doc":"An user from  Users .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.usernameHistory",
"url":34,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.joinTime",
"url":6,
"doc":"The  datetime of when the user had joined this forum."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.discussionCount",
"url":6,
"doc":"The user's discussion count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.commentCount",
"url":6,
"doc":"The user's comment/post count."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEdit",
"url":6,
"doc":"Whether or not you are able to edit this user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEditCredentials",
"url":6,
"doc":"Whether or not you are able to edit this user's credentials."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canEditGroups",
"url":6,
"doc":"Whether or not you are able to edit this user's groups."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.canDelete",
"url":6,
"doc":"Whether or not you are able to scronch this user forever."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.username",
"url":6,
"doc":"The user's username."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.email",
"url":6,
"doc":"The user's E-mail, if you have permission to view it."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.isEmailConfirmed",
"url":6,
"doc":"Whether or not this user confirmed their E-mail address. You must have the permission to view the user's E-mail address in order to know this too in the first place."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.displayName",
"url":6,
"doc":"The display name/nickname of the user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.avatarUrl",
"url":6,
"doc":"The user's avatar URL."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.slug",
"url":6,
"doc":"The user's slug."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestUserMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension",
"url":34,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension.get_dependencies",
"url":34,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_UsernameRequest.UsernameRequestExtension.mixin",
"url":34,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement",
"url":35,
"doc":"An achievement (Malago's Achievements extension)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.data",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.type",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.attributes",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.name",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.description",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.computation",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.points",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.icon",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.rectangle",
"url":35,
"doc":"No, I have no idea what this is either."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.active",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.hidden",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.Achievement.new",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin",
"url":35,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.show_achievements_in_post_footer",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.show_achievements_in_user_card",
"url":35,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.title",
"url":8,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.description",
"url":8,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.showLanguageSelector",
"url":8,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.baseUrl",
"url":8,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.basePath",
"url":8,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.debug",
"url":8,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.apiUrl",
"url":8,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.welcomeTitle",
"url":8,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.welcomeMessage",
"url":8,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.themePrimaryColor",
"url":8,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.themeSecondaryColor",
"url":8,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.logoUrl",
"url":8,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.faviconUrl",
"url":8,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.headerHtml",
"url":8,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.footerHtml",
"url":8,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.allowSignUp",
"url":8,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.defaultRoute",
"url":8,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canViewForum",
"url":8,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canStartDiscussion",
"url":8,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.canSearchUsers",
"url":8,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.adminUrl",
"url":8,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.version",
"url":8,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.get_groups",
"url":8,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.included",
"url":8,
"doc":"Raw  list[dict] of the forum's included objects."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsForumMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin",
"url":35,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.update_settings",
"url":35,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.create_achievement",
"url":35,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsAdminFlarumUserMixin.get_all_achievements",
"url":35,
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
"url":35,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension.get_dependencies",
"url":35,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Malago_Achievements.AchievementsExtension.mixin",
"url":35,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag",
"url":36,
"doc":"A Flarum tag."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.data",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.type",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.id",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.attributes",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.name",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.description",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.slug",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.color",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.backgroundUrl",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.backgroundMode",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.icon",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.discussionCount",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.position",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.defaultSort",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.isChild",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.isHidden",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.lastPostedAt",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.canStartDiscussion",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.canAddToDiscussion",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.subscription",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.template",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.relationships",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.get_parent_tag",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.restrict_permissions",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.Tag.unrestrict_permissions",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin",
"url":36,
"doc":"Entire forum, lives under the main  /api route.  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canBypassTagCounts",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.minPrimaryTags",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.maxPrimaryTags",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.minSecondaryTags",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.maxSecondaryTags",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.title",
"url":8,
"doc":"The forum's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.description",
"url":8,
"doc":"The description of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.showLanguageSelector",
"url":8,
"doc":"Whether or not the language selector is available."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.baseUrl",
"url":8,
"doc":"Base URL of the forum/where the forum is located at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.basePath",
"url":8,
"doc":"Base path to the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.debug",
"url":8,
"doc":"Whether or not debug mode is enabled."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.apiUrl",
"url":8,
"doc":"The API URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.welcomeTitle",
"url":8,
"doc":"The title of the welcome message box of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.welcomeMessage",
"url":8,
"doc":"The welcome message of the forum (shown in the welcome box)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.themePrimaryColor",
"url":8,
"doc":"Forum's primary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.themeSecondaryColor",
"url":8,
"doc":"Forum's secondary color in HEX format."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.logoUrl",
"url":8,
"doc":"URL to forum's logo."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.faviconUrl",
"url":8,
"doc":"URL to forum's favicon."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.headerHtml",
"url":8,
"doc":"The header HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.footerHtml",
"url":8,
"doc":"The footer HTML of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.allowSignUp",
"url":8,
"doc":"Whether or not signup is allowed."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.defaultRoute",
"url":8,
"doc":"The homepage of the forum (default route)"
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canViewForum",
"url":8,
"doc":"Whether or not you are allowed to view the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canStartDiscussion",
"url":8,
"doc":"Whether or not you are allowed to start a discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.canSearchUsers",
"url":8,
"doc":"Whether or not you are able to search for users."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.adminUrl",
"url":8,
"doc":"The administration panel URL of the forum."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.version",
"url":8,
"doc":"The Flarum version this forum is running on."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.get_groups",
"url":8,
"doc":"Obtains the forum groups. Returns a list of  Group objects.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.included",
"url":8,
"doc":"Raw  list[dict] of the forum's included objects."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsForumMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin",
"url":36,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canTag",
"url":36,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_tags",
"url":36,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension",
"url":36,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension.get_dependencies",
"url":36,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.Flarum_Tags.TagsExtension.mixin",
"url":36,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer",
"url":37,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin",
"url":37,
"doc":"A discussion from  Notification . Contains the least data from all of the discussion classes (see [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.hasBestAnswer",
"url":37,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.bestAnswerSetAt",
"url":37,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.hide",
"url":2,
"doc":"Hides the discussion. Raises  FlarumError if it failed, otherwise the new discussion is returned.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides). Raises  FlarumError if it failed, otherwise the new discussion is returned.  Discussion.unhide() does the same thing.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.delete",
"url":2,
"doc":"Deletes a discussion forever - this action is irreversible! Returns  True on success,  FlarumError otherwise.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin",
"url":37,
"doc":"A discussion from  Discussions .  Parameters: -  user - the  pyflarum.session.FlarumUser object, required to make additional API calls. -  _fetched_data - the JSON data that was fetched from the API. I strongly discourage from forging objects this way, unless you are creating an extension."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canSelectBestAnswer",
"url":37,
"doc":""
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.url",
"url":2,
"doc":"Returns the discussion's URL (including slug, if it's available)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.commentCount",
"url":2,
"doc":"Obtains the comment count of the discussion. A comment is a post made by an user."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.participantCount",
"url":2,
"doc":"The participant count of the discussion. This is the number of all users that have participated in a discussion by posting."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.createdAt",
"url":2,
"doc":"The  datetime of when this discussion was created at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastPostedAt",
"url":2,
"doc":"The  datetime of when the last post in this discussion was made, e. g. when was this discussion last updated at."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastPostNumber",
"url":2,
"doc":"Returns the number of the newest post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastReadPostNumber",
"url":2,
"doc":"Number of a post that you've last read in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canReply",
"url":2,
"doc":"Whether or not you are able to create a post in the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canRename",
"url":2,
"doc":"Whether or not you are able to rename the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canDelete",
"url":2,
"doc":"Whether or not you are able to delete the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.canHide",
"url":2,
"doc":"Whether or not you are able to hide the discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.lastReadAt",
"url":2,
"doc":"The  datetime when you last read that discussion."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.isHidden",
"url":2,
"doc":"Whether or not the discussion is hidden. This happens when you delete the discussion for the first time."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_author",
"url":2,
"doc":"Obtains the author of the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_last_posted_user",
"url":2,
"doc":"Obtains the user that posted the latest post in the discussion. It returns  pyflarum.flarum.core.users.UserFromNotification because it's JSON data matches the data of user from notification. If no user is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_first_post",
"url":2,
"doc":"Obtains the first post of the discussion. If no post is found,  None is returned. This works by fetching it from the  _parent_included property.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.hide",
"url":2,
"doc":"Hides the discussion from the sight of other unprivileged users that are not worthy to view such thread.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.restore",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.unhide",
"url":2,
"doc":"Restores the discussion (unhides it), bringing it back to life.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.delete",
"url":2,
"doc":"Scronches the discussion forever. This cannot be reverted. Use  force=True to attempt to delete the discussion even if the API states that you can't.",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.get_full_data",
"url":2,
"doc":"Makes an additional API call to fetch the full data of the discussion, e. g. the top-level discussion class ( Discussion ). Learn more about [inheritance](https: cwkevo.github.io/pyflarum/docs/ class-inheritance).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.title",
"url":2,
"doc":"Returns the discussion's title."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.slug",
"url":2,
"doc":"Returns the discussion's slug (consists of ID and dash separated words from discussion's title, e. g.  123-some-title )."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.type",
"url":3,
"doc":"The type of the object. This should always be the plural form of Flarum's name of the object, e. g.  discussions ,  posts ,  users , etc ."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.id",
"url":3,
"doc":"The  int ID of the object. This should always be unique for the object's type."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.attributes",
"url":3,
"doc":"Raw  dict of the object's attributes."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.relationships",
"url":3,
"doc":"Raw  dict of the object's relationships with other objects. This contains references to objects in the included data. Read more about [included data](https: cwkevo.github.io/pyflarum/docs/ included-data)."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin.data",
"url":3,
"doc":"A raw  dict of the object's data."
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension",
"url":37,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)  "
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension.get_dependencies",
"url":37,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerExtension.mixin",
"url":37,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.commands",
"url":38,
"doc":""
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin",
"url":38,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.is_mentioned_in",
"url":38,
"doc":"",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsFlarumUserMixin.parse_as_command",
"url":38,
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
"url":38,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.get_dependencies",
"url":38,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.mixin",
"url":38,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.commands.CommandsExtension.parse_as_command",
"url":38,
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
"ref":"pyflarum.extensions.advanced_search",
"url":39,
"doc":""
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin",
"url":39,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin.get_user_by_username",
"url":39,
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
"url":39,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.get_dependencies",
"url":39,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.advanced_search.AdvancedSearchExtension.mixin",
"url":39,
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
"ref":"pyflarum.extensions.absolutely_all",
"url":40,
"doc":""
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin",
"url":40,
"doc":""
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_users",
"url":40,
"doc":"A generator that yields  Users from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_posts",
"url":40,
"doc":"A generator that yields  Posts from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_discussions",
"url":40,
"doc":"A generator that yields  Discussions from entire forum, until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin.absolutely_all_notifications",
"url":40,
"doc":"A generator that yields all of your  Notifications , until there are  None left.  Filter compatible.",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension",
"url":40,
"doc":"A pyFlarum extension. Allows you to fetch all specific data from a forum (e. g.: all discussions, all posts, etc.), until there are none left. Based on  Generator , that yields in a while loop, until no  next_link is present in the API."
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension.get_dependencies",
"url":40,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.absolutely_all.AbsolutelyAllExtension.mixin",
"url":40,
"doc":"A function to mix-in/merge properties, methods, functions, etc . of one class into another. This skips all functions and properties starting with  __ (double underscore), unless  skip_protected is False. This sets/overwrites attributes of  class_to_patch to attributes of  class_to_mix_in (monkey-patch).  Example:   extension.mixin(myclass, pyflarum_class)  ",
"func":1
},
{
"ref":"pyflarum.extensions.watch",
"url":41,
"doc":""
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin",
"url":41,
"doc":"The main object that carries the Flarum session.  Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.watch.WatchFlarumUserMixin.watch_notifications",
"url":41,
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
"url":41,
"doc":"A base class for mixing in custom classes (extensions) into another classes.  Example extension code:   from typing import Type from pyflarum.extensions import ExtensionMixin from pyflarum.extensions.admin import AdminExtension from pyflarum.session import FlarumUser  Lowecase: AUTHOR = \"yourname\" NAME = \"extensionname\" ID = f\"{AUTHOR}-{NAME}\"  List of dependencies: SOFT_DEPENDENCIES = [AdminExtension]  uses methods from this extension, but can run without it HARD_DEPENCENDIES = []  I recommend to use the following naming pattern:    Mixin  Example: class ExampleFlarumUserMixin: @property def example(self):  ' Calling  FlarumUser( ).example would return this.  ' return \"Example\" ExampleFlarumUserMixin: Type[FlarumUser]  mimick class inheritance, without inheriting at runtime, acts just as a type hint class ExampleExtension(ExtensionMixin): def get_dependencies(self): return { \"soft\": SOFT_DEPENDENCIES, \"hard\": HARD_DEPENCENDIES } def mixin(self): super().mixin(self, FlarumUser, ExampleFlarumUserMixin)    Parameters: -  forum_url - the forum URL that you want the bot to fetch/update data from. This mustn't end with trailing slash (e. g.: https: domain.tld/ - wrong; https: domain.tld - correct). -  username_or_email - optional. The username or E-mail address to log into. If  None , then the bot doesn't login. -  password - optional. The user's password. If  None , then the bot doesn't login. -  api_endpoint - the API endpoint of the forum, without slashes. This can be specified in Flarum's  config.php and normally forums don't need to change the default  'api' -  user_agent - the user agent that will be used to make all requests. Defaults to  pyflarum   . -  session_object - the  Session object to make requests with. You can pass any object that supports all operations from the [requests](https: pypi.org/project/requests/) library, check [requests_cache](https: pypi.org/project/requests-cache/) as an example. -  extensions - a list of  ExtensionMixin classes. These are monkey-patched on initialization. Learn more about [extensions](https: cwkevo.github.io/pyflarum/docs/ extensions).  "
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.get_dependencies",
"url":41,
"doc":"This should return the following  dict :   { \"hard\": [ ,  ,  .], \"soft\": [ ,  ,  .] }   A dependency is anything that you can pass into  FlarumUser(extensions=[ .]) (e. g. an extension class).  Hard-dependencies: - Will raise an error when they're not found in the initialized  FlarumUser object. It is impossible for the extension to function without these.  Soft-dependencies: - Will raise just a warning. It is possible for the extension to function without these, although with limitations (such that some functions might be unavailable).",
"func":1
},
{
"ref":"pyflarum.extensions.watch.WatchExtension.mixin",
"url":41,
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
}
]