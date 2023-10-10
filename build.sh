#!/usr/bin/env bash
cleanDistDir() {
  rm -rf ./dist/*
}

compilePugTemplates() {
  pug ./views -o ./dist
}

copyPublicToDist() {
  cp -R ./public/* ./dist/
}

cleanDistDir
compilePugTemplates
copyPublicToDist
