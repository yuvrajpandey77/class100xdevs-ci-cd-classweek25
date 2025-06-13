#!/bin/bash

# Install Node.js and npm if not already installed
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

cd class100xdevs-ci-cd-classweek25
            git pull origin main
            npm install
            npm run build
            npm run start