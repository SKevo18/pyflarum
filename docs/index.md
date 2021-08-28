Module pyflarum
===============
# 🐍 pyFlarum

![PyPI version](https://badge.fury.io/py/pyFlarum.svg) ![GitHub issues](https://img.shields.io/github/issues/CWKevo/pyflarum?color=forestgreen&label=Issues) ![GitHub](https://img.shields.io/github/license/CWKevo/pyFlarum?color=yellow&label=License)

Somewhere at the beginning of this year, I have started a concept to build a Python Flarum API client. The goal was to provide everyone an easy and extensible system to interact with Flarum's public API and perform user-related tasks.

Later, I began to work on rebasing FreeFlarum's code, so this idea was left in the dust. But after that was done, I revisited this project and started over now that I had learned more about Python.

Thus, I present to you my first (real) Python package - [pyFlarum](https://pypi.org/project/pyFlarum).

## 🔗 Useful links:
  - [❗ Changelog](https://github.com/CWKevo/pyflarum/releases)
  - [🗣 Discuss](https://discuss.flarum.org/d/28221)
  - [📚 Documentation](https://cwkevo.github.io/pyflarum/docs/)
  - [👨‍💻 GitHub repository](https://github.com/CWKevo/pyflarum)
  - [🐍 PyPi link](https://pypi.org/project/pyFlarum)

### 🐱‍🏍 Features:
- Complete support for creating, retrieving, updating and deleting data.
- (Almost) everything is object-oriented, with docstrings (still needs to be done) and examples to help you code faster.
- Very extensible, thanks to custom extension & dependency system. The most common Flarum extensions are included out of the box, and more are still on the way. Read more about the extension system [here](https://cwkevo.github.io/pyflarum/docs/#extensions).
- The data is fetched and stored as JSON, but the keys can be retrieved by using class properties, which also handles type conversions.
  - This means that instead of using `discussion['data']['attributes']['title']`, it is as simple as `discussion.title`.
- Flarum's JSON API works in saving mode. What I mean is that when you fetch a discussion from notification, not all of the discussion's data is present in the JSON. On the other hand, obtaining the discussion directly by it's ID results in a much detailed JSON.
  - To save you headaches, pyFlarum obviously handles this too and all of the objects have different hierarchy and inheritance. Example: `DiscussionFromNotification` is parent for `DiscussionFromBulk` and that's parent for `Discussion`, where `Discussion` object is discussion obtained directly from API, and therefore logically contains all properties of the previous objects (and JSON). This is all nicely rendered thanks to your editor's linting and type hints, so you won't make a mistake by accessing unexisting properties from parent objects. More about pyFlarum's inheritance system and it's flaws can be found [here](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

## 🚀 Quickstart:

### 📀 Installation:
This package requires Python 3.6+ and the [requests](https://pypi.org/project/requests) library to be installed. Yep, that's the only dependency. Should there be more over time, you can install them all at once by using this command (but I assume that you're already familiar with all of this, so feel free to skip this part):

```shell
pip install -r requirements.txt
# or:
python -m pip install -r requirements.txt
```

Installing is easy with:
```shell
pip install pyflarum -U
# or:
python -m pip install pyflarum -U
```

Updating:
```shell
python -m pip install pyflarum -U --upgrade
# or:
pip install pyflarum --upgrade -U
```

Uninstalling:
```shell
python -m pip uninstall pyflarum
# or:
pip uninstall pyflarum
```

### 📜 Quickstart Example:
How easy is it to fetch a specific discussion and print it's title?

The answer - luckily, it's actually quite easy:

```python
from pyflarum import FlarumUser

# Here, we initialize our `FlarumUser` object. You can't do anything without this first:
USER = FlarumUser(forum_url="https://discuss.flarum.org/")

# Now, let's get the discussion:
discussion = USER.get_discussion_by_id(28221)
print(discussion.title)
```

That's just amazing 4 lines of code (without comments and newlines)!

### ➡ What's next?
Check the [documentation](https://cwkevo.github.io/pyflarum/docs/) to dive deep into the concepts of this project and learn more! 

I will now take a small break from maintaining this - I still want to do a bit more projects this summer now that I have some time. However, I am open for feature requests and bug reports at the [GitHub repository](https://github.com/CWKevo/pyflarum/issues).

The documentation is still not finished yet, but that can wait for now until some people show some interest in this. My honest view is that I do not want to work on something that people will not enjoy, and I will likely require some motivation in order to keep this project alive. If no interest is shown, I will occassionaly push bugfixes and features for my personal use over time. I don't actually expect much people to use this, but I'd be surprised and happy if you would!

## 📜 Examples:
I'll show you some more examples before we dive deep into the details at the [documentation](https://cwkevo.github.io/pyflarum/docs/). All of the following snippets assume that you already have your `USER` object initialized.

Get all discussions from the front page (`/api/discussions`) and print the title & URL:
```python
for discussion in USER.all_discussions():
    print(discussion.title, discussion.url)
```

Obtain some user:
```python
user = USER.get_user_by_id(1)
for group in user.get_groups():
    print(group.nameSingular)
```

You can find more examples in the sections below, or browse the [tests](https://github.com/CWKevo/pyflarum/tree/main/tests) directory of the source code for full examples of various tasks. These will be regularly updated, [should this stay maintained](#➡-whats-next), to ensure that old stuff works and new features behave correctly too.

## 📡 Parameters
By default, pyFlarum works by just knowing the forum's URL. But there are more options to choose from. Let's go through the basic ones:

### 🔐 Authentication
In order to perform user related actions, you must be logged in. This is easier done than said (pun unintended):

```python
USER = FlarumUser(forum_url="https://discuss.flarum.org", username="yourusername", password="#TopSecret123")
```

...just like that! However, I **strongly** recommend you to store your user's credentials in a `.env` file and load it by using a library such as [python-dotenv](https://pypi.org/project/python-dotenv):

*.env:*
```
username="foo"
password="hahayouexpectedbarbutno"
```

*script.py:*
```python
import os

from dotenv import load_dotenv
load_dotenv()

from pyflarum import FlarumUser
USER = FlarumUser(
    forum_url="https://discuss.flarum.org",
    username=os.environ["username"],
    password=os.environ["password"]
)
```

> Don't forget to exclude `.env` in your `.gitignore`, if you're using Git (in other words, don't be like me once)!

### 📚 Cached sessions:

By default, pyFlarum uses the standard `Session` object from Python's [requests](https://pypi.org/project/requests). However, it is possible to pass your own `Session` object.

A practical use case would be to use [requests_cache's](https://pypi.org/projects/requests_cache) `CachedSession` object instead:

```python
from requests_cache import CachedSession

from pyflarum import FlarumUser
USER = FlarumUser(
    forum_url="https://discuss.flarum.org",
    session_object=CachedSession()
)
```

The cache really makes a difference and can speed requests by up to 10x! But I decided to make it optional, as it is not ideal for frequent API calls (e. g. watching for notifications/mentions to respond to user's commands - yes, that's possible with [the commands and watch extensions](https://github.com/CWKevo/pyflarum/blob/main/tests/watch_for_commands.py))

## 🧩 Extensions

Similarly to [Flarum](https://discuss.flarum.org/t/extensions), pyFlarum also works around the concept of [extensions](https://cwkevo.github.io/pyflarum/docs/extensions/index.html).

These can be imported and included in your `FlarumUser` object as a list of extension classes:

```python
from pyflarum import FlarumUser
from pyflarum.extensions.flarum.core import Flarum_Likes

USER = FlarumUser(
    forum_url="https://discuss.flarum.org"
    extensions=[
      Flarum_Likes.LikesExtension
    ]
)

# ...
```

### 🐲 Dealing with type hints

I really tried to make this work, but I couldn't. In case you haven't head about them, read [this](https://docs.python.org/3/library/typing.html). Basically, they help you read your code before it's run.

The thing is, extensions work on principe of [monkey-patching](https://stackoverflow.com/questions/5626193/what-is-monkey-patching). When you create a `FlarumUser` object with extensions, the mixins (classes of properties and functions) of that extensions are copied to the main `FlarumUser` class (or others). And there is no way for your editor to handle this (or at least, I haven't found a way around this - if you do, that would be amazing).

The only option for now is to type hint the mixins directly, to make your editor recognize also the functions and properties from the extension:

Example:

```python
from pyflarum import FlarumUser
from pyflarum.extensions.flarum.core import Flarum_Approval

USER = FlarumUser(
    forum_url="https://discuss.flarum.org"
    extensions=[
      Flarum_Approval.ApprovalExtension
    ]
)

discussion = USER.get_discussion_by_id(1)
discussion.isApproved # <- no syntax highlighting
```

...but specifying that the `discussion` should contain also the properties from the `Flarum_Approval.ApprovalDiscussionFromNotificationMixin` works:

```python
discussion = USER.get_discussion_by_id(1) # type: Flarum_Approval.ApprovalDiscussionFromNotificationMixin
discussion.isApproved # <- syntax highlighting works
```

> **Note:** The `Flarum_Approval` extension contains only one mixin for discussions: `Flarum_Approval.ApprovalDiscussionFromNotificationMixin`. Since this is a parent of `Discussion` because of the [inheritance](#⬆-class-inheritance), you can type-hint just that for it to work (no `Union` from [typing](https://docs.python.org/3/library/typing.html) is required). You can check the [extensions documentation](https://cwkevo.github.io/pyflarum/docs/extensions) for list of available mixins and extensions, or the [source code](https://github.com/CWKevo/pyflarum/tree/main/pyflarum/extensions).

## ⬆ Class Inheritance

pyFlarum's inhertitance needed to be wrapped around Flarum's API, so that these two can work together. To understand this system, we need to first understand how Flarum's API works:

Normally, there is an API route for multiple (bulk) object's data. You can further specify the ID to obtain the specific object's data. Let's say we want to fetch all discussions from the front page. We could do that by visiting `/api/discussions` of your favourite Flarum forum. Here, we see a bunch of JSON data of discussions. We can pick one, and then visit `/api/discussions/:discussion_id` to fetch specific discussion's JSON. By comparing the data from the bulk route (`/api/discussions`) and specific route (`/api/discussions/:discussion_id`), we can see that the specific route contains more detailed JSON information of the discussion. Specifically, this means that discussion from bulk contains just data for the first post, whereas the specific route contains all posts (for example).

Usually, Flarum inherits the more detailed data's properties from the previous less detailed ones. This means that discussion from bulk might contain ID, type and a few attributes, such as the title of the discussion. So, the specific discussion contains all the data that discussion from bulk contains (ID, type, title...) + all the posts (which too only get referenced when there are many of them).

Luckily, I have put my best efforts to make pyFlarum handle this for you. That's why there are multiple objects for each of Flarum's thingies. Here's an example inheritance structure for posts:

```
        (contains)                (is parent for)
Posts       >>       PostFromBulk       ->       Post
```

Or (more complicated) notifications:

```
                (contains)                  (contains)                        (inherits from)
Notifications       >>       Notification       >>       PostFromNotification       <-        PostFromDiscussion
                                                                  |
                                                                  \_       PostFromBulk       ->       Post
                                                            (is parent for)             (is parent for)
```

### 📜 Example:

Fetch all discussions from the front page:

```python
for discussion in USER.all_discussions():
    print(type(discussion)) # <class 'DiscussionFromBulk'>
```

Note how the type is `DiscussionFromBulk` instead of `Discussion`? That's because `DiscussionFromBulk` doesn't contain full data like `Discussion` does.

The data gets limited for Flarum's purposes. For example, you don't need all posts in order to render the discussions at the front page - so Flarum omits the posts from the data. You need to make additional API call to fetch the full data (with posts):

```python
# Wrong:
for discussion in USER.all_discussions():
    for posts in discussion.get_posts():
        print(post.url)
```

```python
# Correct:
for discussion in USER.all_discussions():
    full_discussion = discussion.get_full_data() # makes an additional API call to fetch `/api/discussions/:discussion_id`
    for posts in full_discussion.get_posts():
        print(post.url)
```

### 👀 Included data

That was the easy part of the inheritance system. It gets more complicated with the `included` things.

Each API call might contain an `included` section with more detailed data for referenced objects.

Let's examine a wild JSON spotted in the real world:

```json
{
  "data": [
    {
      "type": "discussions",
      "id": "1",
      "attributes": {
        "title": "An example title"
      },
      "relationships": {
        "firstPost": {
          "data": {
            "type": "posts",
            "id": "1"
          }
        }
      }
    }
  ],
  "included": [
    {
      "type": "posts",
      "id": "1",
      "attributes": {
        "content": "Bla bla bla"
      }
    }
  ]
}
```

This is a simplified syntax of how might a JSON for `/api/discussions` look like. We can see a discussion with ID `1`, that has a special `pyflarum.flarum.core.discussions.DiscussionFromBulk.relationships` array (or dictionary, if you're a Pythonista). This array contains a reference for `firstPost` (unsurprisingly, that's the first post of the discussion). The full data is in the `pyflarum.flarum.core.discussions.Discussions.included` section of the JSON, where we indeed can see a post object with the corresponding ID of `1`.

Again, I put together what I could to make this work for you instead of you working for it. Whenever pyFlarum makes an API call to a top-level route such as `/api/discussions`, obtaining a discussion from that will include the parent `pyflarum.flarum.core.discussions.Discussions.included` in that discussion as well. So now, whenever you would like to obtain a post from that discussion, the reference for that post is found in the `relationships` array and then it gets recursively matched to the resulting `pyflarum.flarum.core.posts.PostFromDiscussion` in the `pyflarum.flarum.core.discussions.Discussions.included` section. See [parent included](https://cwkevo.github.io/pyflarum/docs/#parent-included) below.

From Flarum's side, this was done to eliminate frequent API calls and to save on the JSON's size. Including the full data would possibly make the JSON contain duplicates, if for example, all posts were made by the same user. This way, the user is included only once in the `pyflarum.flarum.core.discussions.Discussions.included` section, and we saved some bytes to transfer. People using paid mobile networks will be grateful to save some cents.

You might be asking, why keep tossing the parent `included` into every object? Well, from pyFlarum's side this was done to save on the amount of requests and to speed the package up. Of course, instead of looking things in `included`, you could make a direct API call to retrieve the full data of the object you want. But this would slow things down drastically, when you're operating with large amounts of data at the same time (e. g. fetching all discussions and posts - you'd need to make separate API call for every post in order to obtain the data - this way, everything's already in `included`).

This is very complicated, and I can't explain things, so it might be worthy checking the source code, if you care to learn more about how pyFlarum handles this.

### 📚 Parent included

It is a JSON data of the parent's included JSON data.

> I put together what I could to make this work for you instead of you working for it. Whenever pyFlarum makes an API call to a top-level route such as `/api/discussions`, obtaining a discussion from that will include the parent `pyflarum.flarum.core.discussions.Discussions.included` in that discussion as well. So now, whenever you would like to obtain a post from that discussion, the reference for that post is found in the `relationships` array and then it gets recursively matched to the resulting `pyflarum.flarum.core.posts.PostFromDiscussion` in the `pyflarum.flarum.core.discussions.Discussions.included` section.

#### Long explanation for nerds (I am not good at explaining):
This is because of the way [Flarum's includes](https://cwkevo.github.io/pyflarum/docs/#included-data) work.
When you run a function such as `pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author()`, the data for the author is not directly in the `pyflarum.flarum.core.discussions.DiscussionFromBulk`'s JSON.
This means that pyFlarum would have to make a new API call everytime you run `pyflarum.flarum.core.discussions.DiscussionFromBulk.get_author()`, and you'd see 429 sooner than usual.
Instead, the data is already in the parent's (`pyflarum.flarum.core.discussions.Discussions.included`) data. And since that gets passed to this object too, pyFlarum doesn't need to
make any more API calls - instead, it just picks the right author from that data.

You can think of this as a cache in a nutshell, if it's unclear for you. And if things are still confusing you, you just don't need to worry about this
because pyFlarum handles everything for you in the background. Unless you are forging this object's JSON data by yourself,
and you don't pass the parent's included - this would mean that all functions that rely on that will break. I have never spotted any weird stuff by normal
usage of pyFlarum during testing, but there's perhaps a very tiny chance that this system can possibly bug out.

Sub-modules
-----------
* pyflarum.custom_types
* pyflarum.datetime_conversions
* pyflarum.error_handler
* pyflarum.extensions
* pyflarum.flarum
* pyflarum.session

Classes
-------

`Discussion(user: FlarumUser, _fetched_data: dict)`
:   A Flarum discussion, obtained directly from the API by ID.
    
    This is the top-level discussion object that contains all the properties of a discussion, and
    inherits properties from all previous discussion-like objects.
    
    Learn more about inheritance [here](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)
    
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
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data)

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

    `get_author(self, mode: Any | Literal["first_number"] = 'first_number') ‑> pyflarum.flarum.core.users.UserFromBulk`
    :   Obtains the discussion's author, AKA. the author
        of the post with number 1 in a discussion.
        
        `mode` allows you to specify the mode that is used to determine whether or not the post is the first post
        of the discussion.
        
        - `'first_number'` - checks if the number of the post is 1 - if yes, it fetches that post's author.
        - `Any` - if anything other than `'first_number'` is passed (e. g. `'first_user``, but this can be anything), then this
        returns the author of the first post in the JSON.
        I am not sure how reliable is this, and whether or not the posts are actually ordered correctly in the API, so it's
        probably a good idea to also check if the number of the post is 1 - but then again, what if the first post gets removed?

    `get_first_post(self) ‑> NoReturn`
    :   The `Discussion` object does not have the first post's JSON data in it's own JSON. Because of Python's subclass inheritance, this
        function was included in `Discussion`, but it does not work!
        
        ### Alternative:
        
        ```python
        discussion = user.get_discussion_by_id(1)
        first_post = discussion.get_posts()[0]
        ```

    `get_full_data(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Makes an additional API call to fetch the full data of the discussion, e. g.
        the top-level discussion class (`Discussion`).
        
        Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

    `get_last_posted_user(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   Obtains the user that posted the latest post in the discussion.
        
        It returns `pyflarum.flarum.core.users.UserFromNotification` because it's JSON
        data matches the data of user from notification. If no user is found, `None` is returned.
        
        This works by fetching it from the `_parent_included` property.

    `get_posts(self) ‑> list`
    :   Returns a list of `pyflarum.flarum.core.posts.PostFromBulk` objects.
        
        It might seem strange why this doesn't return `pyflarum.flarum.core.posts.PostFromDiscussion` instead,
        but these posts are in fact identical to `pyflarum.flarum.core.posts.PostFromBulk`, that's why they are returned.
        
        `pyflarum.flarum.core.posts.PostFromDiscussion` comes from `pyflarum.flarum.core.discussions.DiscussionFromBulk` instead.

    `hide(self, force: bool = False)`
    :   Hides the discussion from the sight of other unprivileged users
        that are not worthy to view such thread.

    `restore(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

    `unhide(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

`DiscussionFromBulk(user: FlarumUser, _fetched_data: dict)`
:   A discussion from `Discussions`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.discussions.DiscussionFromNotification
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Askvortsov_ReplyTemplates.ReplyTemplatesDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Blomstra_Realtime.RealtimeDiscussionMixin
    * pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Tags.TagsDiscussionMixin
    * pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Byobu.ByobuDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Merge.MergeDiscussionMixin
    * pyflarum.extensions.flarum.FoF_PreventNecrobumping.PreventNecrobumpingDiscussionMixin
    * pyflarum.extensions.flarum.FoF_Split.SplitDiscussionMixin
    * pyflarum.flarum.core.discussions.Discussion

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

    `hide(self, force: bool = False)`
    :   Hides the discussion from the sight of other unprivileged users
        that are not worthy to view such thread.

    `restore(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

    `unhide(self, force: bool = False)`
    :   Restores the discussion (unhides it), bringing it back to life.

`DiscussionFromNotification(user: FlarumUser, _fetched_data: dict)`
:   A discussion from `Notification`. Contains the least
    data from all of the discussion classes (see [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance)).
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Approval.ApprovalDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Lock.LockDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromBulkMixin
    * pyflarum.extensions.flarum.Flarum_Sticky.StickyDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Subscriptions.SubscriptionsDiscussionFromNotificationMixin
    * pyflarum.extensions.flarum.FoF_BestAnswer.BestAnswerDiscussionNotificationMixin
    * pyflarum.flarum.core.discussions.DiscussionFromBulk

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

    `slug: Optional[str]`
    :   Returns the discussion's slug
        (consists of ID and dash separated words from discussion's title,
        e. g. `123-some-title`).

    `title: Optional[str]`
    :   Returns the discussion's title.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `delete(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Deletes a discussion forever - this action is irreversible!
        Returns `True` on success, `FlarumError` otherwise.

    `get_full_data(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Makes an additional API call to fetch the full data of the discussion, e. g.
        the top-level discussion class (`Discussion`).
        
        Learn more about [inheritance](https://cwkevo.github.io/pyflarum/docs/#class-inheritance).

    `hide(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Hides the discussion.
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.

    `restore(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Restores the discussion (unhides).
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.
        
        `Discussion.unhide()` does the same thing.

    `unhide(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Restores the discussion (unhides).
        Raises `FlarumError` if it failed, otherwise the new discussion is returned.
        
        `Discussion.unhide()` does the same thing.

`Discussions(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple discussions fetched from `/api/discussions`.

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

`Filter(order_by: Optional[Literal['commentCount', '-commentCount', 'createdAt', '-createdAt']] = None, query: Optional[str] = None, ids: Optional[Iterable[ForwardRef('str | int')]] = None, limit: int = 20, page: Optional[int] = None, include: Optional[list] = None, additional_data: Optional[dict] = None)`
:   Represents a Flarum API filter as a `dict`.
    
    It allows you to filter discussions without having to manually specify URL parameters.
    
    - `order_by` - gets passed into `?sort=` parameter. Common values are `commentCount`, `createdAt` and their reverse/negated values (prefixed with `-`)
    - `query` - the search query, passed into `?filter[q]=`. This can be a string. Flarum search bar uses this. Gambits such as `author:username` are supported.
    - `ids` - fetches entries with specific ids, passed into `?filter[id]=`. This is a list, that is then converted into comma separated string.
    - `limit` - limit of entires to fetch. Flarum (by default) allows a max. of 50 entries to be fetched at once. Passed into `?page[limit]=`
    - `page` - fetch a specific page of entires. This is actually an offset - which is determined by multiplying `page` with `limit` (see above).
    - `include` - include specific entries. See [included data](https://cwkevo.github.io/pyflarum/docs/#included-data). You will likely never use this.
    - `additional_data` - this is a `dict` (`parameter: value`) of additional search parameters that you might want to use. This can be used to overwrite previous filters.

    ### Instance variables

    `to_dict: dict`
    :   Converts the filter to a `dict`, so that
        it can be sent to the API (`requests` module, see ["Passing parameters in URLs"](https://docs.python-requests.org/en/master/user/quickstart/#passing-parameters-in-urls)).
        
        An extension might add additional filter data after the filter was initialized
        (for example: `absolutely_all` needs to update page number to continuously yield results).

`FlarumError(message: Optional[str] = None, status: Optional[int] = None, code: Optional[str] = None, details: Optional[str] = None)`
:   Generic class for all Flarum related errors.

    ### Ancestors (in MRO)

    * builtins.Exception
    * builtins.BaseException

`FlarumUser(extensions: Optional[list] = None, **kwargs)`
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

    * pyflarum.session.FlarumSession
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.absolutely_all.AbsolutelyAllFlarumUserMixin
    * pyflarum.extensions.admin.AdminFlarumUserMixin
    * pyflarum.extensions.advanced_search.AdvancedSearchFlarumUserMixin
    * pyflarum.extensions.commands.CommandsFlarumUserMixin
    * pyflarum.extensions.flarum.FoF_UserBio.UserBioFlarumUserMixin
    * pyflarum.extensions.watch.WatchFlarumUserMixin

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

`Notification(user: FlarumUser, _fetched_data: dict)`
:   Notification.
    
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

    `content: Optional[dict]`
    :   The `dict` of the notification's content.

    `contentType: Optional[str]`
    :   The content type of the notification.
        
        Examples: `newPost`, `postLiked`, etc...

    `createdAt: Optional[datetime.datetime]`
    :   The `datetime` of when was this notification triggered/created at.

    `data: list[dict] | dict`
    :   A raw `dict` of the object's data.

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

    `isRead: bool`
    :   Whether or not the notification was read by you.

    `new_post_number: Optional[int]`
    :   The new number of the potential post that triggered
        the notification.

    `relationships: dict`
    :   Raw `dict` of the object's relationships with
        other objects.
        
        This contains references to objects in the included data.
        Read more about [included data](https://cwkevo.github.io/pyflarum/docs/#included-data).

    `reply_number: Optional[int]`
    :   The number of the reply post that possibly triggered
        the notification.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `from_user(self) ‑> Optional[pyflarum.flarum.core.users.UserFromNotification]`
    :   From which user does the notification originate from?
        
        Returns `pyflarum.flarum.core.users.UserFromNotification`.

    `get_subject(self) ‑> Optional[DiscussionFromNotification | PostFromNotification]`
    :   Returns the subject of the notification, either one of these:
        - `pyflarum.flarum.core.discussions.DiscussionFromNotification`
        - `pyflarum.flarum.core.posts.PostFromNotification`

    `mark_as_read(self) ‑> True`
    :   Marks the notification as read.
        
        Returns `True` when successful.

`Notifications(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple notifications fetched from the API.

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

    ### Methods

    `mark_all_as_read(self) ‑> True`
    :   Marks all notifications as read. Returns `True` when successful.

`Post(user: FlarumUser, _fetched_data: dict)`
:   A Flarum post.
    
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

`PostFromBulk(user: FlarumUser, _fetched_data: dict)`
:   A post from `Posts`.
    
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

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromBulkMixin

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

    `canHide: bool`
    :   Whether or not you are able to hide this post.

    `content: NotImplemented`
    :   This property is only available for `pyflarum.flarum.core.posts.PostFromNotification`, but
        was included here due to class inheritance.
        
        Using this will just raise `NotImplementedError`, so please do not use this.

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

`PostFromDiscussion(user: FlarumUser, _fetched_data: dict)`
:   A post from `Discussion`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromDiscussionMixin
    * pyflarum.flarum.core.posts.PostFromNotification

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

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

    `id: Optional[int]`
    :   The `int` ID of the object. This should always be unique for the object's type.

    `included: list`
    :   Returns raw list of JSON included data.
        
        Learn more about included data [here](https://cwkevo.github.io/pyflarum/docs/#included-data).
        
        Note: Not all "individual" objects have this property, usually the low-level ones (such as `PostFromX`, `DiscussionFromX`, etc...).

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

    ### Methods

    `delete(self) ‑> True`
    :   Removes the post forever.
        
        Returns `True` if the deletion was successful.

    `edit(self, new_post: pyflarum.flarum.core.posts.PreparedPost) ‑> pyflarum.flarum.core.posts.Post`
    :   Edits the post.
        
        `new_post` has to be a `PreparedPost` object. Returns the `Post` after edit.

    `hide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Hides the post. Raises `FlarumError` if it failed, otherwise the hidden `Post` is returned.

    `is_comment(self) ‑> bool`
    :   Whether or not the post is comment.

    `restore(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

    `unhide(self) ‑> pyflarum.flarum.core.posts.Post`
    :   Restores the post (unhides). Raises `FlarumError` if it failed, otherwise the restored `Post` is returned.

`PostFromNotification(user: FlarumUser, _fetched_data: dict)`
:   A post from `Notification`.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object, required to make additional API calls.
    - `_fetched_data` - the JSON data that was fetched from the API.
    
    I strongly discourage from forging objects this way, unless you are creating an extension.

    ### Ancestors (in MRO)

    * pyflarum.flarum.core.posts.PostFromDiscussion
    * pyflarum.flarum.core.BaseFlarumIndividualObject
    * pyflarum.flarum.core.BaseFlarumObject
    * builtins.dict

    ### Descendants

    * pyflarum.extensions.flarum.Flarum_Approval.ApprovalPostFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Flags.FlagsPostFromNotificationMixin
    * pyflarum.extensions.flarum.Flarum_Likes.LikesPostFromNotificationMixin
    * pyflarum.flarum.core.posts.Post
    * pyflarum.flarum.core.posts.PostFromBulk

    ### Instance variables

    `attributes: dict`
    :   Raw `dict` of the object's attributes.

    `canDelete: bool`
    :   Whether or not you are able to delete this post.

    `canEdit: bool`
    :   Whether or not you are able to edit this post.

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

`Posts(user: FlarumUser, _fetched_data: dict)`
:   A data of multiple posts fetched from `/api/posts`.

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

`PreparedDiscussion(user: FlarumUser, title: Optional[str] = None, content: Optional[str] = None)`
:   A prepared discussion that can be sent to the API.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object that will create the discussion
    (see `PreparedDiscussion.post()`).
    - `title` - the discussion's title.
    - `content` - discussion's content. You can use the traditional Flarum's markdown syntax.

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
    :   Converts the discussion to a `dict`, so that
        it can be sent to the API.
        
        An extension might add additional data during runtime. This is the
        most basic template that Flarum requires when creating a discussion.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `create(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Posts/creates the discussion. Raises `FlarumError` if it failed, otherwise the new `Discussion` is returned.
        This is the same as `PreparedDiscussion.create()`.

    `post(self) ‑> pyflarum.flarum.core.discussions.Discussion`
    :   Posts/creates the discussion. Raises `FlarumError` if it failed, otherwise the new `Discussion` is returned.
        This is the same as `PreparedDiscussion.create()`.

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

`PreparedPost(user: FlarumUser, discussion: Optional[ForwardRef('AnyDiscussion')] = None, content: Optional[str] = None)`
:   A prepared post that can be sent to the API.
    
    ### Parameters:
    - `user` - the `pyflarum.session.FlarumUser` object that will create the post
    (see `PreparedPost.post()`).
    - `discussion` - any discussion that the post belongs to.
    - `content` - the post's content. You can use the traditional Flarum's markdown syntax.

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
    :   Converts the post to a `dict`, so that
        it can be sent to the API.
        
        An extension might add additional data during runtime. This is the
        most basic template that Flarum requires when creating a post.

    `type: Optional[str]`
    :   The type of the object.
        
        This should always be the plural form of Flarum's name of the object, e. g. `discussions`, `posts`, `users`, etc...

    ### Methods

    `create(self)`
    :   Posts/creates the post. Raises `FlarumError` on error, otherwise it returns the created `Post`.

    `post(self)`
    :   Posts/creates the post. Raises `FlarumError` on error, otherwise it returns the created `Post`.

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