#!/bin/sh
npm test
git add .
git commit -m 'master'
git pull origin $1
git push origin $1