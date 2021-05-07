from pyflarum import FlarumMyUser

user = FlarumMyUser("https://discuss.flarum.org", use_cache=False)


for discussion in user.get_all_discussions(detailed=True, parameters={"sort": "-createdAt"}):
    print(discussion)
