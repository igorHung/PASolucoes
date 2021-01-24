#!/bin/bash
pkill -f tmux
pkill -f node

echo Starting Services
tmux new-session -d -s FrontBack 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '
sleep 15
echo Services started