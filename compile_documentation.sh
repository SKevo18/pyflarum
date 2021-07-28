#!/bin/bash
cd "$(dirname "$0")"

pdoc --force --html pyflarum --output-dir documentation --template-dir documentation/templates
mkdir -p ./documentation/docs
cp -r ./documentation/pyflarum/* ./documentation/docs && rm -R ./documentation/pyflarum
sed -i --regexp-extended 's/"docs\/(.+\.html",?)/"pyflarum\/\1/' ./documentation/index.js
