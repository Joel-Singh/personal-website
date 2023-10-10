#!/usr/bin/env bash
rm -rf ./dist/*
pug ./views -o ./dist
cp -R ./public/* ./dist/
