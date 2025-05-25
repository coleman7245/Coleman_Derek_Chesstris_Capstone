import { useState, useContext } from 'react';

import './SaveBox.css';

import { GameContext } from '../../App.jsx';

function SaveBox() {
    const [isSaved, setIsSaved] = useState(false);
    const [gameState, dispatch] = useContext(GameContext);

    const data = {
        score : {player_name : gameState.player_name, score : gameState.score},
        time : {player_name : gameState.player_name, time : gameState.finishTime}
    };

    async function handleSave(route, data) {
        try {
            const score = await fetch(route + '/scores', 
                {
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body : JSON.stringify(data)
                }
            );

            const time = await fetch(route + '/times', 
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
            {isSaved ? null : <button id='save'  onClick={() => handleSave("http://localhost:8080/api", data)}>Save</button>}
        </div>
    )
}

export default SaveBox;