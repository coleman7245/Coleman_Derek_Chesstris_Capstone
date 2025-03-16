import { createContext, useReducer, useEffect } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

import '../styles/Game.css';

import {initialGameState, Game_Phase} from '../../gamestate.js';

import Navbar from '../../components/Navbar.jsx';
import Board from '../../components/Board.jsx';
import GameInfo from '../../components/GameInfo.jsx';
import Form from '../../components/Form.jsx';

const GameContext = createContext();

function handleGameState(gameState, action) {
    let newGameState = {...gameState};

    switch (action.type) {
        case 'FORM_INPUT':
            newGameState.player_name = action.payload;
            newGameState.startTime = Date.now();
            return newGameState;
        case 'UPDATE_TIME':
            newGameState.finishTime = getTime(newGameState.startTime);
            return newGameState;
        case 'CHECK_GAME_PHASE':
            console.log(action.payload);
            if (action.payload)
                newGameState.score += 1;
            console.log(newGameState.score);
            newGameState.current_phase = checkGamePhase(gameState);
            return newGameState;
        default:
            return gameState;
    }
}

function checkGamePhase(gameState) {
    if (gameState.score >= gameState.win_state.win_score)
        return Game_Phase.WIN;
    else if (gameState.crossed_finish_line)
        return Game_Phase.LOSE
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
        const timeElapsed = setInterval(() => {
            dispatch({type : 'UPDATE_TIME'});
        }, 1000);
        return () => clearInterval(timeElapsed);
    }, []);

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