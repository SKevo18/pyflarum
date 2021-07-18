#!/bin/bash
cd "$(dirname "$0")"

pdoc --force --html pyflarum --output-dir documentation --template-dir documentation/templates
mkdir -p ./documentation/docs
cp -r ./documentation/pyflarum/* ./documentation/docs && rm -R ./documentation/pyflarum
