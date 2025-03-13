import { createContext, useReducer } from 'react';

import '../styles/Game.css';

import Navbar from './Navbar.jsx';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';
import Form from './Form.jsx';

const GameContext = createContext();

function handleGameState(gameState, action) {
    let newGameState = {...gameState};

    switch (action.type) {
        case 'FORM_INPUT':
            console.log(action.event.target.value);
            newGameState.player_name = action.event.target.value;
            return newGameState;
        default:
            return gameState;
    }
};

function GamePage() {
    const [gameState, dispatch] = useReducer(handleGameState, {player_name : '', time : {hours : 0, minutes: 0, seconds: 0}, score : 0});

    return (
        <GameContext.Provider value={[gameState, dispatch]}>
            <Navbar />
            {/* {gameState.player_name?  */}
            <div className='gamepage'>
                <Board width={20} height={20} />
                <GameInfo score={0} time={'0:0:0'} playerName={'Derek'}/>
            </div> :
            {/* <Form /> */}
            // }
        </GameContext.Provider>
    );
}

export { GamePage, GameContext };