pkill -f tmux
git stash
git stash clear
git pull origin master
tmux -c tmux
echo initializing dependencies
tmux -c 'cd /root/app/BackEndPaSolucoes && npm install  \
    cd /root/app/FrontEndPaSolucoes && npm install '
echo building Front
tmux -c 'cd /root/app/FrontEndPaSolucoes && npm run build '
echo Starting Services
tmux -c 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started