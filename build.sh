#!/bin/bash
pkill -f tmux
pkill -f node
cd /root/app/BackEndPaSolucoes
git stash
git stash clear
git pull origin master
sleep 5

echo initializing dependencies
tmux new-session -d -s installDependencies 'cd /root/app/BackEndPaSolucoes && npm install  \
    cd /root/app/FrontEndPaSolucoes && npm install '
sleep 15

echo building Front
tmux new-session -d -s buildingFront 'cd /root/app/FrontEndPaSolucoes && npm run build '
sleep 20

echo Starting Services
pkill -f tmux
pkill -f node
tmux new-session -d -s FrontEnd 'cd /root/app/FrontEndPaSolucoes && npm start '

tmux new-session -d -s BackEnd 'cd /root/app/BackEndPaSolucoes && npm start '

echo Services started