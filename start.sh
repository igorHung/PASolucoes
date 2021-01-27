#!/bin/bash
pkill -f tmux
pkill -f node

echo Starting Services
tmux new-session -d -s FrontEnd 'cd /root/app/FrontEndPaSolucoes && npm start '

tmux new-session -d -s BackEnd 'cd /root/app/BackEndPaSolucoes && npm start '

sleep 15
echo Services started