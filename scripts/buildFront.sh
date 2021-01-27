echo building Front
tmux new-session -d -s buildingFront 'cd /root/app/FrontEndPaSolucoes && npm run build '
sleep 45