import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { GameContext } from '../../App.jsx';

import './ContinueBox.css';

function ContinueBox({message}) {
    const navigate = useNavigate();
    const [gameState, dispatch] = useContext(GameContext);

    function handleContinue(e) {
        if (e.target.innerText === 'Yes') {
            //NOTE: Save player data here!!!
            dispatch({type: 'RESET_GAME'});
            navigate('/game');
        }
        else if (e.target.innerText === 'No')
            navigate('/');
    }

    return (
        <div className='continue-box'>
            {message} <br /> <br />
            Player: {gameState.player_name} <br />
            Time: {gameState.finishTime.hours} : {gameState.finishTime.minutes} : {gameState.finishTime.seconds} <br />
            Score: {gameState.score} <br /> <br />
            Continue? <br />
            <button id='yes' onClick={(e) => handleContinue(e)}>Yes</button>
            <button id='no' onClick={(e) => handleContinue(e)}>No</button>
        </div>
    )
}

export default ContinueBox;