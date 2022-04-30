from dotenv import load_dotenv
load_dotenv()

from pathlib import Path

from pyflarum.client import FlarumUser
from pyflarum.client.flarum.core.filters import Filter

from pyflarum.client.extensions import absolutely_all
from pyflarum.client.extensions.flarum import Flarum_Tags



USER = FlarumUser(forum_url="https://discuss.flarum.org", extensions=[absolutely_all.AbsolutelyAllExtension, Flarum_Tags.TagsExtension]) # type: absolutely_all.AbsolutelyAllFlarumUserMixin


# XXX: Can be done better by listing directly from the "Incompatible" tag
def incompatible_extensions():
    for discussions in USER.absolutely_all_discussions(Filter(order_by='createdAt')):
        for discussion in discussions:
            discussion: Flarum_Tags.TagsDiscussionMixin
            tags = discussion.get_tags()

            for tag in tags:
                if tag.name == "Incompatible":
                    yield discussion


def write_incompatible():
    with open(Path('tests/incompatible_extensions.txt'), 'w', encoding="utf-8") as incompatible_extensions_file:
        for discussion in incompatible_extensions():
            print(f"Incompatible: {discussion.title}")
            incompatible_extensions_file.write(f"{discussion.createdAt} | {discussion.url}\n")


if __name__ == "__main__":
    write_incompatible()
