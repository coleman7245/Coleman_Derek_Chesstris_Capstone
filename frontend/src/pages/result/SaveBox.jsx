import { useState } from 'react';

import './SaveBox.css';

import { Game_Phase } from '../../utilities.js';

function SaveBox({locationState}) {
    const [save, setSave] = useState(false);
    const gameState = locationState.state;

    console.log(locationState);

    async function handleSave(route) {
        try {
            const response = await fetch(route, 
                {
                    method : 'POST',
                    body : JSON.stringify({
                        player : {player_name : gameState.player_name},
                        score : {player_name : gameState.player_name, score : gameState.score},
                        time : {player_name : gameState.player_name, time : gameState.finishTime}
                    }),
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
            {save? null :<button id='save'  onClick={() => {gameState.current_phase === Game_Phase.WON ? handleSave('/win') : handleSave('/lose')}}>Save</button>}
        </div>
    )
}

export default SaveBox;