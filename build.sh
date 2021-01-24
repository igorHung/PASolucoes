#!/bin/bash
bash pkill -f tmux
bash pkill -f node
cd /root/app/BackEndPaSolucoes
bash git stash
bash git stash clear
bash git pull origin master

echo initializing dependencies
tmux new-session -d -s FrontBack 'cd /root/app/BackEndPaSolucoes && npm install  \
    cd /root/app/FrontEndPaSolucoes && npm install '
sleep 8
echo building Front
tmux new-session -d -s FrontBack 'cd /root/app/FrontEndPaSolucoes && npm run build '
sleep 20
echo Starting Services
tmux new-session -d -s FrontBack 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started