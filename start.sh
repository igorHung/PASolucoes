pkill -f "node"
git stash
git pull origin master
echo initializing dependencies
bash -c 'cd /root/app/BackEndPaSolucoes && npm install  \
    cd /root/app/FrontEndPaSolucoes && npm install '
echo building Front
bash -c 'cd /root/app/FrontEndPaSolucoes && npm run build '
echo Starting Services
bash -c 'cd /root/app/BackEndPaSolucoes && npm start  \
    cd /root/app/FrontEndPaSolucoes && npm start '

echo Services started