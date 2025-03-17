import { createContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './GamePage.css';

import {initialGameState, Game_Phase} from './gamestate.js';

import Navbar from '../../shared_components/Navbar.jsx';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';
import Form from './Form.jsx';

const GameContext = createContext();

function handleGameState(gameState, action) {
    let newGameState = {...gameState};

    switch (action.type) {
        case 'FORM_INPUT':
            newGameState.player_name = action.payload;
            newGameState.startTime = Date.now();
            break;
        case 'UPDATE_TIME':
            newGameState.finishTime = getTime(newGameState.startTime);
            break;
        case 'CHANGE_SCORE':
            if (action.hasScored)
                newGameState.score += 1;
            gameState.crossed_finish_line = action.crossedFinishLine;
            break;
        default:
            break;
    }

    newGameState.current_phase = checkGamePhase(gameState);
    return newGameState;
}

function checkGamePhase(gameState) {
    if (gameState.score <= gameState.win_state.win_score && gameState.crossed_finish_line)
        return Game_Phase.WON;
    else if (gameState.crossed_finish_line)
        return Game_Phase.LOST;
    else
        return Game_Phase.PLAYING;
}

function getTime(startTime) {
    let currentTime = Date.now() - startTime;

    let seconds = currentTime / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;

    let gameTime = {
        seconds : (seconds >= 60) ? Math.floor(seconds - (Math.floor(minutes) * 60)) : Math.floor(seconds),
        minutes : (minutes >= 60) ? Math.floor(minutes - (Math.floor(hours) * 60)) : Math.floor(minutes),
        hours : Math.floor(hours)
    }

    return gameTime;
}

function GamePage() {
    const [gameState, dispatch] = useReducer(handleGameState, initialGameState);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Entered useEffect!');
        if (gameState.current_phase === Game_Phase.WON) {
            console.log('Win!');
            const timeout = setTimeout(() => navigate('/win'), 0);
            return () => clearInterval(timeout);
         }
        else if (gameState.current_phase === Game_Phase.LOST) {
            console.log('Lose!');
            const timeout = setTimeout(() => navigate('/lose'), 0);
            return () => clearInterval(timeout);
        }
        else {
            const timeElapsed = setInterval(() => {dispatch({type : 'UPDATE_TIME'});}, 1000);
            return () => clearInterval(timeElapsed);
        }
    }, [gameState.current_phase, navigate, dispatch]);

    return (
        <GameContext.Provider value={[gameState, dispatch]}>
            <Navbar />
            {gameState.player_name? 
            <div className='gamepage'>
                <Board />
                <GameInfo />
            </div> :
            <Form />
            }
        </GameContext.Provider>
    );
}

export { GamePage, GameContext };