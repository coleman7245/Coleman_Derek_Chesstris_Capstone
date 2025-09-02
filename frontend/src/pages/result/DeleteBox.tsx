import { useState, useContext } from 'react';

import './DeleteBox.css';

import { GameContext } from '../../App.tsx';

function DeleteBox() {
    const [isDeleted, setIsDeleted] = useState(false);
    const [gameState] = useContext(GameContext);

    async function handleDelete(url : string, name : string) : Promise<void> {
        try {
            await fetch(url + `/players/${name}`,
                {
                    method : 'DELETE'
                }
            )

            await fetch(url + `/scores/${name}`, 
                {
                    method : 'DELETE'
                }
            );

            await fetch(url + `/times/${name}`, 
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