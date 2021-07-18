Somewhere at the beginning of this year, I have started a concept to build a Python Flarum API client. The goal was to provide everyone an easy and extensible system to interact with Flarum's public API and perform user-related tasks.

Later, I began to work on rebasing FreeFlarum's code, so this idea was left in the dust. But after that was done, I revisited this project and started over now that I had learned more about Python.

Thus, I present to you my first (real) Python package - [pyFlarum](https://pypi.org/project/pyFlarum).

### Features:
- Complete support for creating, retrieving, updating and deleting data.
- (Almost) everything is object-oriented, with detailed docstrings and examples to help you code faster.
- Very extensible, thanks to custom extension & dependency system. The most common Flarum extensions are included out of the box, and more are still on the way. Read more about the extension system [here](https://comming.soon).
- The data is fetched and stored as JSON, but the keys can be retrieved by using class properties, which also handles type conversions.
  - This means that instead of using `discussion['data']['attributes']['title']`, it is as simple as `discussion.title`.
- Flarum's JSON API works in saving mode. What I mean is that when you fetch a discussion from notification, not all of the discussion's data is present in the JSON. On the other hand, obtaining the discussion directly by it's ID results in a much detailed JSON.
  - To save you headaches, pyFlarum obviously handles this too and all of the objects have different hierarchy and inheritance. Example: `DiscussionFromNotification` is parent for `DiscussionFromBulk` and that's parent for `Discussion`, where `Discussion` object is discussion obtained directly from API, and therefore logically contains all properties of the previous objects (and JSON). This is all nicely rendered thanks to your editor's linting and type hints, so you won't make a mistake by accessing unexisting properties from parent objects. More about pyFlarum's inheritance system and it's flaws can be found [here](https://comming.soon).

### Quickstart:

How easy is it to fetch a specific discussion and print it's title?

The answer - luckily, it's actually quite easy:

```python
from pyflarum import FlarumUser

# Here, we initialize our `FlarumUser` object. You can't do anything without this first:
USER = FlarumUser(forum_url="https://discuss.flarum.org")
# `forum_url` parameter mustn't end with a slash, or it chokes on API URLs!

# Now, let's get the discussion:
discussion = USER.get_discussion_by_id(49)
print(discussion.title)
```

That's just amazing 4 lines of code (without comments and newlines)!

### Examples:

I'll show you some more examples before we dive deep into the details. All of the following snippets assume that you already have your `USER` object initialized.

Get all discussions from the front page (`/api/discussions`) and print the title & URL:
```python
for discussion in USER.get_all_discussions():
    print(discussion.title, discussion.url)
```

Obtain some user:
```python
user = USER.get_user_by_id(1)
for group in user.get_groups():
    print(group.nameSingular)
```

## Parameters
By default, pyFlarum works by just knowing the forum's URL. But there are more options to choose from. Let's go through the basic ones:

### Authentication
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

### Cached sessions:

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
