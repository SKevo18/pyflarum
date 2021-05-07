from pyflarum.user.models.flarum.Discussions import FlarumDiscussion
from pyflarum import FlarumMyUser

user = FlarumMyUser("https://discuss.flarum.org", use_cache=False)


for discussions in user.get_all_discussions(parameters={"sort": "-createdAt"}):
    for discussion in discussions:
        print(discussion.id, discussion.title)
