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
- pyFlarum wraps a small amount of Flarum's database structure by using `sqlmodel`'s ORM.
  - This means that you can query the database, and pyFlarum will automatically convert the results to pyFlarum's objects.



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
username="spam"
password="eggs"
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



# 💾 Database support (since `v1.0.11-beta`)

pyFlarum has also support for the default Flarum database structure (upon installation). This makes it possible to implement pyFlarum in migration scripts, to
make transition to Flarum easy, fast and fully-automatic.

### 👀 Example:

```python
from sqlmodel import create_engine

from pyflarum.database import FlarumDatabase
from pyflarum.database import DB_User


ENGINE = create_engine('sqlite:///tests/database/database.db')  # see https://docs.sqlalchemy.org/en/latest/core/engines.html for details on the engine
DATABASE = FlarumDatabase(engine=ENGINE)



if __name__ == "__main__":
    with DATABASE:
        for user in DATABASE.generic_filter(DB_User, id=1).first():
            if user.discussions:
                print(user.username, ':', sep='')

                for discussion in user.discussions:
                    print('•', discussion.title)

            else:
                print(user.username, '(no discussions)')

```

**Disclaimer:** Database support is still new and in beta (as the rest of this library anyways).

Database has no support for extensions that are not included in Flarum by default. This is because it is very difficult to maintain the support
for all the different columns that extensions create - when pyFlarum defines/doesn't define a column that is not/is in the database, it breaks.

It is also technically not possible to monkey-patch database properties the same way it is possible to do in `FlarumUser`.

My vision about the database support is to provide an easy way to create migration scripts to Flarum. You can see my [other repository](https://github.com/CWKevo/pyflarum-migrations) for migrations that have already been created by me.

Contributions to both the migrations and this project are welcome!


# 🎁 Support me

I create free software to benefit people.
If this project helps you and you like it, consider supporting me by donating via cryptocurrency:

- Bitcoin: `bc1q6n7f4mllak9xts355wlyq2n3rce60w2r5aswxa`; `1LMS4u41beDGMb9AXmXzfH7ZkZSwGSkSyx`
- Ethereum: `0x12C598b3bC084710507c9d6d19C9434fD26864Cc`
- Litecoin: `LgHQK1NQrRQ56AKvVtSxMubqbjSWh7DTD2`
- Dash: `Xe7TYoRCYPdZyiQYDjgzCGxR5juPWV8PgZ`
- Zcash: `t1Pesobv3SShMHGfrZWe926nsnBo2pyqN3f`
- Dogecoin: `DALxrKSbcCXz619QqLj9qKXFnTp8u2cS12`
- Ripple: `rNQsgQvMbbBAd957XyDeNudA4jLH1ANERL`
- Monero: `48TfTddnpgnKBn13MdJNJwHfxDwwGngPgL3v6bNSTwGaXveeaUWzJcMUVrbWUyDSyPDwEJVoup2gmDuskkcFuNG99zatYFS`
- Bitcoin Cash: `qzx6pqzcltm7ely24wnhpzp65r8ltrqgeuevtrsj9n`
- Ethereum Classic: `0x383Dc3B83afBD66b4a5e64511525FbFeb2C023Db`

More cryptocurrencies are supported. If you are interested in donating with a different one, please [E-mail me](mailto:me@kevo.link).
No other forms of donation are currently supported.
