import { useState } from 'react';

import './SaveBox.css';

function SaveBox({locationState}) {
    const [isSaved, setIsSaved] = useState(false);
    const gameState = locationState.state;

    const data = {
        score : {player_name : gameState.player_name, score : gameState.score},
        time : {player_name : gameState.player_name, time : gameState.finishTime}
    };

    async function handleSave(route, data) {
        try {
            const score = await fetch(route + '/api/scores', 
                {
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body : JSON.stringify(data)
                }
            );

            const time = await fetch(route + '/api/times', 
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
            {isSaved ? null : <button id='save'  onClick={() => handleSave("http://localhost:8080", data)}>Save</button>}
        </div>
    )
}

export default SaveBox;