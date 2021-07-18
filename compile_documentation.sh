#!/bin/bash
cd "$(dirname "$0")"

pdoc --force --html pyflarum --output-dir ./documentation --template-dir ./documentation/templates
cp -r ./documentation/pyflarum ./documentation/docs
rm -r ./documentation/pyflarum
