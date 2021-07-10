from typing import Union


from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()


from pyflarum import FlarumUser

from pyflarum.flarum.core.filters import Filter

from pyflarum.extensions.absolutely_all_discussions import AbsolutelyAllExtension
from pyflarum.extensions.flarum.Flarum_Tags import TagsExtension


EXTENSIONS = [
    AbsolutelyAllExtension,
    TagsExtension
]

user = FlarumUser(forum_url="https://discuss.flarum.org", extensions=EXTENSIONS) # type: AbsolutelyAllExtension


def incompatible_extensions():
    discussion: Union[TagsExtension]

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
