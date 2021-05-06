from pyflarum.user.models.flarum.Discussions import FlarumDiscussion
from pyflarum import FlarumMyUser

user = FlarumMyUser("https://discuss.flarum.org", use_cache=False)

discussion = FlarumDiscussion("owo", "yey")
print(discussion)

"""
for discussions in user.get_all_discussions(parameters={"sort": "-createdAt", "filter[q]": "author:askvortsov"}):
    for discussion in discussions:
        print(discussion.id, discussion.title)
"""
