#!/bin/bash
cd "$(dirname "$0")"

pdoc --html pyflarum --output-dir ./docs
