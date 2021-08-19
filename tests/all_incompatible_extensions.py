from dotenv import load_dotenv
load_dotenv()


from pyflarum import FlarumUser
from pyflarum.flarum.core.discussions import Discussion
from pyflarum.flarum.core.filters import Filter

from pyflarum.extensions import absolutely_all
from pyflarum.extensions.flarum import Flarum_Tags


EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension,
    Flarum_Tags.TagsExtension
]

user = FlarumUser(forum_url="https://discuss.flarum.org", extensions=EXTENSIONS) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


def incompatible_extensions():
    discussion: 'Flarum_Tags.TagsDiscussionMixin | Discussion'

    for discussions in user.absolutely_all_discussions(Filter(order_by='createdAt')):
        for discussion in discussions:
            tags = discussion.get_tags()

            for tag in tags:
                if tag.name == "Incompatible":
                    yield discussion


def write():
    with open('incompatible_extensions.txt', 'w') as incompatible_extensions_file:
        for discussion in incompatible_extensions():
            print(f"Incompatible: {discussion.title}")
            incompatible_extensions_file.write(f"{discussion.createdAt} | {discussion.url}\n")


if __name__ == "__main__":
    write()
