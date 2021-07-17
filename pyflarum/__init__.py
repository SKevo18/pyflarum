"""
    pyFlarum Python package - provides an easy access to Flarum's API.

    (c) Kevo 2021

    You are allowed to modify any parts of this program, as long as this
    notice stays on its place, without any modifications. It is that simple
    to support my hard work. Thank you for using this.

    - PyPi: https://pypi.org/project/pyFlarum/
    - Official Flarum website: https://flarum.org
"""


from .session import FlarumUser
from .error_handler import FlarumError

from .flarum.core.discussions import Discussion

from .flarum.core.filters import Filter


__description__ = "An unofficial Python package for manipulating with Flarum's API"
__author__      = "SKevo"
__copyright__   = "Copyright 2021, SKevo"
__credits__     = ["SKevo"]
__license__     = "GPLv3"
__version__     = "v1.0.1-beta"
__maintainer__  = "SKevo"
__email__       = "me@kevo.link"
__status__      = "4 - Beta"


if __name__ == '__main__':
    from typing import Union

    # Prevent VSCode from reporting unused imports:
    _: Union[FlarumUser, FlarumError, Discussion, Filter]
