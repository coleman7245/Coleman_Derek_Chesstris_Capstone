import { useState, useRef, useEffect, useContext, createContext } from 'react';

import './TetrisPiece.css';

import { GameContext } from './GamePage.jsx';

import ChessPiece from './ChessPiece.jsx';

import { Game_Phase } from '../../utilities.js';

const GroupContext = createContext();

function TetrisPiece({sources}) {
    const [gameState, dispatch] = useContext(GameContext);
    const [groupState, setGroupState] = useState({main_position: [150, -60], secondary_position : [210, -60], secondary_flank : 'right'});
    const tetrisRef = useRef(null);

    useEffect(() => {
        if (gameState.current_phase !== Game_Phase.PAUSED)
            tetrisRef.current.focus();
    }, [gameState.current_phase]);

    return (
        <GroupContext.Provider value={[groupState, setGroupState]}>
            <div className='tetris-piece' ref={tetrisRef}>
                <ChessPiece id='main' source={sources[0]} />
                <ChessPiece id='secondary' source={sources[1]} />
            </div>
        </GroupContext.Provider>
    )
}

export { TetrisPiece, GroupContext };