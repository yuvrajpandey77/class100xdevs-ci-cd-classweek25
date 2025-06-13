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
# Kill any existing node process
pkill -f "node" || true
# Start the application in the background
nohup npm run start > app.log 2>&1 &
# Wait a few seconds to ensure the app starts
sleep 5
# Check if the app is running
if pgrep -f "node" > /dev/null; then
  echo "Application started successfully"
  exit 0
else
  echo "Application failed to start"
  exit 1
fi