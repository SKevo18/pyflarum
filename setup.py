from pathlib import Path

import sys
sys.path.append('.')

import setuptools


__description__ = "An unofficial Python package for manipulating with Flarum's API"
__author__      = "SKevo"
__copyright__   = "Copyright (c) 2021, SKevo"
__credits__     = ["SKevo"]
__license__     = "GPLv3"
__version__     = "v1.0.10-beta"
__maintainer__  = "SKevo"
__email__       = "me@kevo.link"
__status__      = "4 - Beta"


# Overwrite docstring, so pdoc can render it:
try:
    with open(f"{Path(__file__).parent.absolute()}{Path('/README.md')}", 'r', encoding="UTF-8") as readme:
        __readme__ = readme.read()

except:
    __readme__ = "Failed to read README.md!\n\n(c) SKevo" # type: str


__doc__ = __readme__


setuptools.setup(
    name = 'pyFlarum',
    packages = setuptools.find_packages(exclude=('tests',)),

    long_description=__readme__,
    long_description_content_type='text/markdown',

    version = __version__,
    license = __license__,
    description = __description__,
    keywords = ['Flarum', 'forum software', 'api', 'Flarum api', 'bot', 'userbot', 'database', 'flarum database', 'server', 'client'],

    author = __author__,
    author_email = __email__,

    url = 'https://github.com/CWKevo/pyflarum',

    install_requires=[
        'requests'
    ],

    classifiers=[
        f'Development Status :: {__status__}',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
    ],
)
