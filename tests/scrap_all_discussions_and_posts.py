from dotenv import load_dotenv
load_dotenv()

import os

from datetime import datetime
from pathlib import Path

from requests_cache.session import CachedSession

from pyflarum import FlarumUser
from pyflarum.flarum.core.filters import Filter

from pyflarum.extensions import absolutely_all

EXTENSIONS = [
    absolutely_all.AbsolutelyAllExtension
]


def scrap_all(file_name: 'str | bytes | Path'="scrapped.html"):
    USER = FlarumUser(forum_url=os.environ['forum_url'], extensions=EXTENSIONS, session_object=CachedSession()) # type: absolutely_all.AbsolutelyAllFlarumUserMixin

    with open(file_name, 'w', encoding='UTF-8') as scrap:
        header = f"""<html><head><title>All discussions from {USER.forum_url}</title></head><body><div style="margin: 2rem 0; text-align: center; color: blue;"><h1>All discussions from <a href="{USER.forum_url}">{USER.forum_url}</a> ({datetime.now().strftime(r'%H:%M:%S %d. %m. %Y')})</h1></div><div id="data">\n"""

        scrap.write(header)

        for discussions in USER.absolutely_all_discussions(Filter(order_by="createdAt")):
            try:
                for _discussion in discussions:
                        #time.sleep(5) # prevent 429
                        discussion = _discussion.get_full_data()

                        print(f"Writing data for {discussion.url}...")

                        data = f"""<div id="d-{discussion.id}" style="margin: 2rem; background-color: lavender; border: 3px double skyblue; padding: 1rem; border-radius: 2rem;"><h1><a href="{discussion.url}">Discussion #{discussion.id}</a></h1><div id="d-{discussion.id}-posts">\n"""
                        scrap.write(data)

                        for posts in USER.get_all_posts_from_discussion(discussion):
                            for post in posts:
                                if post.contentHtml:
                                    data = f"""<div id="d-{discussion.id}-{post.number}"><h3><a href="{post.url}">Post #{post.number} in discussion #{discussion.id}</a></h3><p><i>By: {post.get_author().username} @ {post.createdAt}</i></p><div>{post.contentHtml}</div><hr/><br/></div>\n"""
                                    scrap.write(data)

                        scrap.write("""</div></div>""")

            except KeyboardInterrupt:
                break

        footer = """</div><p style="text-align: center; font-size: 2rem;">The end.</p></body></html>\n"""

        scrap.write(footer)
        print("Done!")



if __name__ == "__main__":
    from tests import ROOT_PATH

    scrap_all(f"{ROOT_PATH}/tests/scrapped.html")
