#!/bin/bash
cd "$(dirname "$0")"

pdoc --force --html pyflarum --output-dir ./docs --template-dir ./docs/templates
