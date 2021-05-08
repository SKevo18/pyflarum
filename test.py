from pyflarum import FlarumMyUser

user = FlarumMyUser("https://discuss.flarum.org", use_cache=False)


for discussion in user.get_all_discussions_detailed(parameters={"sort": "-createdAt"}):
    for post in discussion.posts:
        if post.isComment:
            print(post.content)
