#!/bin/bash
pkill -f tmux
pkill -f node
cd /root/app/BackEndPaSolucoes
git stash
git stash clear
git pull origin master
sleep 30

echo initializing dependencies
tmux new-session -d -s installDependenciesCall 'cd /root/app/scripts/installDependencies.sh'
sleep 10
tmux new-session -d -s buildingFrontCall 'cd /root/app/scripts/buildFront.sh'
sleep 10
echo Starting Services
tmux new-session -d -s backEndcall 'cd /root/app/scripts/startBack.sh'
tmux new-session -d -s frontEndCall'cd /root/app/scripts/startFront.sh'

echo Services started