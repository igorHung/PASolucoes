echo Starting BackEndService
cd $(dirname $0) && cd BackEndPaSolucoes && npm start  &
ls
cd - & 
ls
cd $(dirname $0) && cd FrontEndPaSolucoes && npm start &
ls
echo BackEndService started