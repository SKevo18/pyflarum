from typing import Union


from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()


from pyflarum import FlarumUser

from pyflarum.flarum.core.filters import Filter

from pyflarum.extensions.flarum.FoF_BestAnswer import BestAnswerExtension
from pyflarum.extensions.absolutely_all_discussions import AbsolutelyAllDiscussionsExtension


user = FlarumUser(forum_url="https://discuss.flarum.org", extensions=[BestAnswerExtension, AbsolutelyAllDiscussionsExtension]) # type: AbsolutelyAllDiscussionsExtension


for discussions in user.absolutely_all_discussions(Filter(order_by='createdAt')):
    for discussion in discussions:
        discussion: Union[BestAnswerExtension]
        print(f"Title: {discussion.title} ({discussion.slug})")
