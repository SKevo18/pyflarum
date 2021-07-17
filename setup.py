import sys
sys.path.append('.')

import pyflarum
import setuptools


with open('README.md', 'r', encoding='utf-8') as fh:
    long_description = fh.read()


setuptools.setup(
    name = 'pyFlarum',
    packages = setuptools.find_packages(),

    long_description=long_description,
    long_description_content_type='text/markdown',

    version = pyflarum.__version__,
    license=pyflarum.__license__,
    description = pyflarum.__description__,
    keywords = ['Flarum', 'forum software', 'api', 'Flarum api', 'bot', 'userbot', 'database', 'flarum database', 'server', 'client'],

    author = pyflarum.__author__,
    author_email = pyflarum.__email__,

    url = 'https://github.com/CWKevo/pyflarum',

    install_requires=[
        'requests'
    ],

    classifiers=[
        f'Development Status :: {pyflarum.__status__}',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
    ],
)
