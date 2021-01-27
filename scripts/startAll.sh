echo Starting Services
tmux new-session -d -s backEndcall 'cd /root/app/scripts/startBack.sh'
tmux new-session -d -s frontEndCall'cd /root/app/scripts/startFront.sh'

echo Services started