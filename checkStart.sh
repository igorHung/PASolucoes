while true
do
    sessionFront="FrontEnd"
    sessionBack="BackEnd"
    sessionBuilding="buildingFront"
    sessionInstalling="installDependencies"
    # Check if the session exists, discarding output
    # We can check $? for the exit status (zero for success, non-zero for failure)
    tmux has-session -t $sessionBuilding 2>/dev/null
    if [ $? != 0 ]; then
        tmux has-session -t $sessionInstalling 2>/dev/null
        if [ $? != 0 ]; then
            tmux has-session -t $sessionFront 2>/dev/null
            if [ $? != 0 ]; then
            tmux new-session -d -s FrontEnd 'cd /root/app/FrontEndPaSolucoes && npm start '
            fi

            tmux has-session -t $sessionBack 2>/dev/null
            if [ $? != 0 ]; then
            tmux new-session -d -s BackEnd 'cd /root/app/BackEndPaSolucoes && npm start '
            fi
        fi
    fi

    
	sleep 65
done


