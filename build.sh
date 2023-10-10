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

routeNotDonePages() {
  mkdir ./dist/resume
  cp ./dist/not-done.html ./dist/resume/index.html
}

cleanDistDir
compilePugTemplates
copyPublicToDist
routeNotDonePages
