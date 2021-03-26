import setuptools


with open("README", "r", encoding="utf-8") as fh:
    long_description = fh.read()


setuptools.setup(
    name = 'pyFlarum',
    packages = ['pyflarum'],
    package_dir={'pyflarum': 'pyflarum/**/*'},

    long_description=long_description,
    long_description_content_type="text/markdown",

    version = 'v0.0.1-beta',
    license='GPLv3',
    description = "An unofficial Python package for manipulating with Flarum's API",
    keywords = ['Flarum', 'forum software', 'api', "Flarum api", "bot", "userbot"],

    author = 'Kevo',
    author_email = 'me@kevo.link',

    url = 'https://github.com/CWKevo/pyflarum',

    install_requires=[
        'requests',
        'requests_cache',
    ],

    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
    ],
)
