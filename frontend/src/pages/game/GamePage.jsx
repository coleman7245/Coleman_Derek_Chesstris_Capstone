import { createContext, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './GamePage.css';

import {initialGameState, Game_Phase } from '../../utilities.js';

import Navbar from '../../shared_components/Navbar.jsx';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';
import Form from './Form.jsx';

const GameContext = createContext();

function handleGameState(gameState, action) {
    let newGameState = {...gameState};

    async function postPlayer(playerName) {
        const data = {player : {name : playerName}};

        try {
            const player = await fetch('http://localhost:8080/api/players', 
                {
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                    body : JSON.stringify(data)
                }
            );
        }
        catch(err) {
            console.log(err);
        }
    }

    switch (action.type) {
        case 'FORM_INPUT':
            postPlayer(action.payload);
            newGameState.player_name = action.payload;
            newGameState.startTime = Date.now();
            break;
        case 'UPDATE_TIME':
            newGameState.finishTime = getTime(newGameState.startTime);
            break;
        case 'CHANGE_SCORE':
            if (action.hasScored)
                newGameState.score += 1;
            newGameState.crossed_finish_line = action.crossedFinishLine;
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
    else if (gameState.player_name)
        return Game_Phase.PLAYING;
    else
        return Game_Phase.NOT_RUNNING;
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
        if (gameState.current_phase === Game_Phase.WON) {
            const timeout = setTimeout(() => navigate('/win', {state : gameState}), 0);
            return () => clearInterval(timeout);
         }
        else if (gameState.current_phase === Game_Phase.LOST) {
            const timeout = setTimeout(() => navigate('/lose', {state : gameState}), 0);
            return () => clearInterval(timeout);
        }
        else if (gameState.current_phase === Game_Phase.PLAYING) {
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
                <button id='pause-btn' onClick={() => dispatch({type : 'PAUSED'})} >Pause</button>
            </div> :
            <div className='formpage'>
                <Form />
            </div>
            }
        </GameContext.Provider>
    );
}

export { GamePage, GameContext };