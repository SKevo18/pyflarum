#!/bin/bash
cd "$(dirname "$0")"

pdoc --force --html pyflarum --output-dir ./documentation --template-dir ./documentation/templates
mv ./documentation/pyflarum ./documentation/docs
