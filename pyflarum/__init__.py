# -*- coding: utf-8 -*-

"""pyFlarum Python package - provides easy access to Flarum API & database.

    (c) Kevo 2021

    You are allowed to modify any parts of this program, as long as this
    notice stays on its place, without any modifications. It is that simple
    to support my hard work. Thank you for using this.

    https://pypi.org/project/pyFlarum/
"""


from .session import FlarumUser
from .error_handler import FlarumError

from .flarum.core.discussions import Discussion
from .flarum.core.filters import DiscussionFilter


__author__ = "Kevo"
__copyright__ = "Copyright 2021, Kevo"
__credits__ = ["Kevo"]
__license__ = "GPL"
__version__ = "1.0"
__maintainer__ = "Kevo"
__email__ = "me@kevo.link"
__status__ = "Testing"


if __name__ == '__main__':
    print(
        FlarumUser,
        FlarumError,
        
        Discussion,
        DiscussionFilter,
    )
