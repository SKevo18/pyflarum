from pathlib import Path

from .session import FlarumUser
from .error_handler import FlarumError

from .flarum.core.discussions import Discussion

from .flarum.core.filters import Filter


__description__ = "An unofficial Python package for manipulating with Flarum's API"
__author__      = "SKevo"
__copyright__   = "Copyright 2021, SKevo"
__credits__     = ["SKevo"]
__license__     = "GPLv3"
__version__     = "v1.0.6-beta"
__maintainer__  = "SKevo"
__email__       = "me@kevo.link"
__status__      = "4 - Beta"

# Default readme:
__readme__ = "(c) SKevo"

# Overwrite docstring, so pdoc can render it nicely
try:
    with open(f"{Path(__file__).parent.parent.absolute()}{Path('/README.md')}", 'r', encoding="UTF-8") as readme:
        __readme__ = readme.read()

except FileNotFoundError:
    pass


__doc__ = __readme__


if __name__ == "__main__":
    from typing import Union

    _: Union[
        FlarumUser,
        FlarumError,
        Discussion,
        Filter
    ]
