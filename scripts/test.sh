#!/usr/bin/env bash

# Fail on error
set -e

# Echo commands
set -x

# Set node options
export NODE_OPTIONS='--max-old-space-size=8192'

# Test
npx turbo run test -- --coverage

# Combine test coverage
rm -rf coverage
mkdir -p coverage/packages
mkdir -p coverage/combined

PACKAGES=(
  "agent"
  "app"
  "cdk"
  "cli"
  "core"
  "expo-polyfills"
  "fhir-router"
  "health-gorilla"
  "hl7"
  "mock"
  "react"
  "react-hooks"
  "server"
)

for package in ${PACKAGES[@]}; do
  cp "packages/$package/coverage/coverage-final.json" "coverage/packages/coverage-$package.json"
done

npx nyc merge coverage/packages coverage/combined/coverage.json
npx nyc report -t coverage/combined --report-dir coverage --reporter=lcov
