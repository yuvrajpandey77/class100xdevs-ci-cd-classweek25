#!/bin/bash

# Clone repository if it doesn't exist
if [ ! -d "class100xdevs-ci-cd-classweek25" ]; then
    git clone https://github.com/yuvrajpandey77/class100xdevs-ci-cd-classweek25.git
fi

cd class100xdevs-ci-cd-classweek25
git pull origin main
npm install
npm run build
npm run start