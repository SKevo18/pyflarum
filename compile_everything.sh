#!/bin/bash
cd "$(dirname "$0")"

compile_documentation.sh
compile_for_pypi.sh
