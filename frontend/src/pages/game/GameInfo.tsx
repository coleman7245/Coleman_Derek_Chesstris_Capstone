import { useContext } from 'react';

import { GameContext } from '../../App.tsx';

import './GameInfo.css';

function GameInfo() {
    const [gameState] = useContext(GameContext);

    return (
        <div className='gameinfo'>
            Player: {gameState.player_name} <br />
            Time: {gameState.finishTime.hours} : {gameState.finishTime.minutes} : {gameState.finishTime.seconds} <br />
            Score: {gameState.score}
        </div>
    )
}

export default GameInfo;