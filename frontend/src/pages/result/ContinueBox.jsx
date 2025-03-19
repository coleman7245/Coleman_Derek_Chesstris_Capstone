import { useNavigate } from 'react-router-dom';

import './ContinueBox.css';

function ContinueBox({message, gameState}) {
    const navigate = useNavigate();

    function handleContinue(e) {
        if (e.target.innerText === 'Yes')
            navigate('/game');
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