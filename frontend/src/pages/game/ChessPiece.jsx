import { useState, useRef, useEffect, useContext } from 'react';

import './ChessPiece.css';

import { GameContext } from '../../App.jsx';

import { Game_Phase } from '../../utilities.js';

function ChessPiece({source}) {
    const [gameState, dispatch] = useContext(GameContext);
    const [transform, setTransform] = useState({position: [150, -60], rotation : 0});
    const positionLimit = {minX: 0, minY: -60, maxX: gameState.board_size.width - 60, maxY: gameState.board_size.height - 120};
    const velocity = 30;
    const degree = 90;
    
    const chessPieceRef = useRef(null);

    function handleInput(event) {
        event.preventDefault();
        let newTransform = {...transform};
        let hasScored = false;
        let crossedFinishLine = false;

        switch (event.key) {
            case 'w':
                newTransform.position[1] -= (newTransform.position[1] - velocity < positionLimit.minY) ? 0 : velocity;
                hasScored = true;
                break;
            case 'a':
                newTransform.position[0] -= (newTransform.position[0] - velocity < positionLimit.minX) ? 0 : velocity;
                hasScored = true;
                break;
            case 's':
                newTransform.position[1] += (newTransform.position[1] + velocity > positionLimit.maxY) ? 0 : velocity;
                hasScored = true;
                break;
            case 'd':
                newTransform.position[0] += (newTransform.position[0] + velocity > positionLimit.maxX) ? 0 : velocity;
                hasScored = true;
                break;
            case 'r':
                newTransform.rotation += degree;
                break;
            default:
                hasScored = false;
                break;
        }

        crossedFinishLine = newTransform.position[1] >= gameState.win_state.win_pos_y ? true : false;
        dispatch({type : 'CHANGE_SCORE', hasScored : hasScored, crossedFinishLine : crossedFinishLine});
        setTransform(newTransform);
    }

    useEffect(() => {
        if (gameState.current_phase !== Game_Phase.PAUSED)
            chessPieceRef.current.focus();
    }, [gameState.current_phase]);

    return (
        <div ref={chessPieceRef} className='chesspiece' autoFocus 
            style={{left: `${transform.position[0]}px`, top: `${transform.position[1]}px`}}
            tabIndex='0' onKeyDown={(e) => handleInput(e)}>
                <img src={source} style={{transform: `rotate(${transform.rotation}deg)`}} />
        </div>
    );
}

export default ChessPiece;