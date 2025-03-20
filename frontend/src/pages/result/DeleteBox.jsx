import { useState } from 'react';

import './DeleteBox.css';

function DeleteBox({locationState}) {
    const [isDeleted, setIsDeleted] = useState(false);
    const gameState = locationState.state;

    const data = {
        score : {player_name : gameState.player_name, score : gameState.score},
        time : {player_name : gameState.player_name, time : gameState.finishTime}
    };

    async function handleDelete(route, name) {
        try {
            const player = await fetch(route + `/players/${name}`,
                {
                    method : 'DELETE'
                }
            )

            const score = await fetch(route + `/scores/${name}`, 
                {
                    method : 'DELETE'
                }
            );

            const time = await fetch(route + `/times/${name}`, 
                {
                    method : 'DELETE'
                }
            );
            
            setIsDeleted(true);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className='delete-box'>
            {!isDeleted? 'Delete Data?' : 'Data Deleted!'}
            {isDeleted ? null : <button id='delete'  onClick={() => handleDelete("http://localhost:8080/api", gameState.player_name)}>Delete</button>}
        </div>
    )
}

export default DeleteBox;