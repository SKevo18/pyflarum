from normalize_path import normalize_path
normalize_path()

from dotenv import load_dotenv
load_dotenv()

import os
from datetime import datetime

from pyflarum import FlarumUser
from pyflarum.flarum.core.posts import PreparedPost


user = FlarumUser(forum_url=os.environ['forum_url'], username='test', password=os.environ['account_password'])


if __name__ == "__main__":
    # Edit first post of discussion with ID 16 to the current time.
    discussion = user.get_discussion_by_id(16)
    first_post = discussion.get_posts()[0]

    if first_post.contentType == 'comment':
        edited_content = f"""{first_post.content}\n###### BTW, The current time for me, the bot, is: {datetime.now().time().strftime(r"%H hours, %M minutes and %S seconds.")}."""
        edit = PreparedPost(user=user, discussion=discussion, content=edited_content)

        edited = first_post.edit(edit)
        print(f"Successfuly edited post {edited.id} - {edited.url}")

    else:
        print(f"First post of discussion ID {discussion.id} is not a comment (but {first_post.contentType}), editing that is not possible.")
