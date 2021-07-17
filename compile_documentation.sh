#!/bin/bash
cd "$(dirname "$0")"

pdoc --html pyflarum --output-dir ./docs --template-dir ./docs_templates
mv ./docs/doc-search.html ./docs/pyflarum
mv ./docs/index.js ./docs/pyflarum
