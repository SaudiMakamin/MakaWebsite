#!/usr/bin/env bash
set -Eeuo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."

npm ci --no-audit --no-fund --prefer-offline
npm run build
./node_modules/.bin/esbuild server/index.ts \
  --bundle \
  --platform=node \
  --format=esm \
  --outfile=dist/index.js \
  --packages=external
