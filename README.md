Currently under recode

# pyFlarum
An unofficial API for manipulating with [https://flarum.org](Flarum's) API.

### Installation

You can use PIP:

```
pip install pyflarum
```

### Quickstart:
I tried to make the code as user-friendly as possible.
The package heavily depends on [requests](https://requests.readthedocs.io/en/master/).

If you want to obtain a title of a discussion by its ID, the simplest it can get is:

```python
# Import FlarumMyUser
from pyflarum import FlarumMyUser

# Create a flarum_session variable
flarum_session = FlarumMyUser("https://forum.url", 'yourusername', 'yourpassword')
# You can leave out the username and password too, but then you'll obviously have a "read-only" access
# (that means that you won't be able to create a discussion or a post).
# flarum_session = FlarumMyUser("https://forum.url")

# Obtain a discussion by it's ID:
discussion = flarum_session.get_discussion_by_id(1)

# Print the discussion title:
print(discussion.title)
```

It's that simple: 4 lines of code.

You can, of course, do some crazy other stuff, such as printing IDs, titles, comments even comment counts.
This package was made to include everything that the Flarum API offers.

Currently, it is farily simple and there is no documentation.
I hope to work on this project if enough people notice it :P

I want to invest my time into something that people will care about.
I will probably make some small docs and add more code without much audience later anyways.
As I see it for now, this is enough.
