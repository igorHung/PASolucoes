#!/bin/bash
bash pkill -f tmux
bash pkill -f node

echo Starting Services
tmux new-session -d -s FrontBack 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started