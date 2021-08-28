#!/bin/bash
cd "$(dirname "$0")"

pdoc pyflarum --output-dir documentation --template-dir documentation/templates
mkdir -p ./documentation/docs
cp -r ./documentation/pyflarum/* ./documentation/docs && rm -R ./documentation/pyflarum
sed -i --regexp-extended 's/"pyflarum\/(.+\.html",?)/"docs\/\1/' ./documentation/index.js
