import { useState, useRef, useEffect, useContext } from 'react';

import '../styles/ChessPiece.css';

import { GameContext } from './GamePage.jsx';

function ChessPiece({source}) {
    const [gameState, dispatch] = useContext(GameContext);
    const [pos, setPos] = useState([150, -60]);
    const posLimit = {minX: 0, minY: -60, maxX: gameState.board_size.width - 60, maxY: gameState.board_size.height - 120};
    const vel = 30;
    
    const chessPieceRef = useRef(null);

    useEffect(() => {
        chessPieceRef.current.focus();
    }, []);

    function handleInput(event) {
        // event.preventDefault();
        let newPos = [...pos];

        switch (event.key) {
            case 'w':
                newPos[1] -= (newPos[1] - vel < posLimit.minY) ? 0 : vel;
                break;
            case 'a':
                newPos[0] -= (newPos[0] - vel < posLimit.minX) ? 0 : vel;
                break;
            case 's':
                newPos[1] += (newPos[1] + vel > posLimit.maxY) ? 0 : vel;
                break;
            case 'd':
                newPos[0] += (newPos[0] + vel > posLimit.maxX) ? 0 : vel;
                break;
            default:
                break;
        }

        setPos(newPos);
    }

    return (
        <div ref={chessPieceRef} className='chesspiece' autoFocus style={{'left': `${pos[0]}px`, 'top': `${pos[1]}px`}} tabIndex='0' onKeyDown={(e) => handleInput(e)}>
            <img src={source} />
        </div>
    );
}

export default ChessPiece;