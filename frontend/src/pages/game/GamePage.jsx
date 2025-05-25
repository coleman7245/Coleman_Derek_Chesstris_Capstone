import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './GamePage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';
import Form from '../../shared_components/Form.jsx';

import { Game_Phase } from '../../utilities.js';
import { GameContext } from '../../App.jsx';

function GamePage() {
    const [gameState, dispatch] = useContext(GameContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (gameState.current_phase === Game_Phase.WON) {
            const timeout = setTimeout(() => navigate('/win'), 0);
            return () => clearInterval(timeout);
         }
        else if (gameState.current_phase === Game_Phase.LOST) {
            const timeout = setTimeout(() => navigate('/lose'), 0);
            return () => clearInterval(timeout);
        }
        else if (gameState.current_phase === Game_Phase.PLAYING) {
            const timeElapsed = setInterval(() => {dispatch({type : 'UPDATE_TIME'});}, 1000);
            return () => clearInterval(timeElapsed);
        }
    }, [gameState.current_phase, navigate, dispatch]);

    console.log(gameState.player_name);

    return (
        <div>
            <Navbar />
            {gameState.player_name? 
            <div className='gamepage'>
                <Board />
                <GameInfo />
                <button id='pause-btn' onClick={() => dispatch({type : 'PAUSED'})} >Pause</button>
            </div> :
            <div className='formpage'>
                <Form />
            </div>
            }
        </div>
    );
}

export default GamePage;