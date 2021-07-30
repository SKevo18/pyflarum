#!/bin/bash
cd "$(dirname "$0")"

bash ./compile_documentation.sh
bash ./compile_for_pypi.sh
