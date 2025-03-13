import { useContext } from 'react';

import { GameContext } from './GamePage.jsx';

import '../styles/GameInfo.css';

function GameInfo() {
    const [gameState, dispatch] = useContext(GameContext);

    return (
        <div className='gameinfo'>
            Player: {gameState.player_name} <br />
            Time: {gameState.time.hours} : {gameState.time.minutes} : {gameState.time.seconds} <br />
            Score: {gameState.score}
        </div>
    )
}

export default GameInfo;