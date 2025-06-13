#!/bin/bash

# Clone repository if it doesn't exist
if [ ! -d "class100xdevs-ci-cd-classweek25" ]; then
    git clone https://github.com/yuvrajpandey77/class100xdevs-ci-cd-classweek25.git
fi

cd class100xdevs-ci-cd-classweek25
git reset --hard
git clean -fd
git pull origin main
npm install
NEXT_TELEMETRY_DISABLED=1 npm run build --no-lint
npm run start