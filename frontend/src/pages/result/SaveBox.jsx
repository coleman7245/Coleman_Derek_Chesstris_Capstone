import { useState } from 'react';

import './SaveBox.css';

function SaveBox({locationState}) {
    const [isSaved, setIsSaved] = useState(false);
    const gameState = locationState.state;

    const data = {
        player : {player_name : gameState.player_name},
        score : {player_name : gameState.player_name, score : gameState.score},
        time : {player_name : gameState.player_name, time : gameState.finishTime}
    };

    async function handleSave(route, data) {
        try {
            const response = await fetch(route, 
                {
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body : JSON.stringify(data)
                }
            );
            
            setIsSaved(true);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='save-box'>
            {!isSaved? 'Save Data?' : 'Data Saved!'}
            {isSaved ? null : <button id='save'  onClick={() => handleSave("http://localhost:8080" + location.pathname, data)}>Save</button>}
        </div>
    )
}

export default SaveBox;