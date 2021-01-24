pkill -f tmux
bash -c tmux
echo Starting Services
bash -c 'cd /root/app/BackEndPaSolucoes && npm start &\
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started