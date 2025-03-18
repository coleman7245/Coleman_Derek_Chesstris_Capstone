import { useState } from 'react';

import './SaveBox.css';

function SaveBox({gameState}) {
    const [save, setSave] = useState(false);

    async function handleSave(route) {
        try {
            const response = await fetch(route, 
                {
                    method : 'POST',
                    body : {
                        player : {player_name : gameState.player_name},
                        score : {player_name : gameState.player_name, score : gameState.score},
                        time : {player_name : gameState.player_name, time : gameState.finishTime}
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            const gameStateDoc = await response.json();
            console.log(gameStateDoc);
            setSave(true);
        }
        catch(err) {
            console.log(err);
            response.status(400).json(err);
        }
    }

    return (
        <div className='save-box'>
            {save? 'Data Saved!' : 'Save Data?'}
            {save? null :<button id='save'  onClick={() => handleSave()}>Save</button>}
        </div>
    )
}

export default SaveBox;