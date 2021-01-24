#!/bin/bash
pkill -f tmux
pkill -f node
cd /root/app/BackEndPaSolucoes
git stash
git stash clear
git pull origin master

echo initializing dependencies
-c 'cd /root/app/BackEndPaSolucoes && npm install  \
    cd /root/app/FrontEndPaSolucoes && npm install '
echo building Front
-c 'cd /root/app/FrontEndPaSolucoes && npm run build '
echo Starting Services
-c 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started