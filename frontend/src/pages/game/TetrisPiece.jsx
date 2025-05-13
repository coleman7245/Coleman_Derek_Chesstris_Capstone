import { useState, useRef, useEffect, useContext } from 'react';

import './TetrisPiece.css';
import { defaultTransform, lineBlockStartPositions, squareBlockStartPositions, reverseSquigglyBlockStartPositions, squigglyBlockStartPositions, 
    reverseLBlockStartPositions, lBlockStartPositions, tBlockStartPositions, calculateLineBlockRotation, calculateSquareBlockRotation, 
    calculateReverseSquigglyBlockRotation, calculateSquigglyBlockRotation, calculateReverseLBlockRotation, calculateLBlockRotation, 
    calculateTBlockRotation } from '../../tetris_block_moves.js';

import { GameContext } from '../../App.jsx';
import { Game_Phase } from '../../utilities.js';

function TetrisPiece({sources, type}) {
    const [gameState, dispatch] = useContext(GameContext);
    const tetrisRef = useRef(null);
    const [transform, setTransform] = useState(defaultTransform);
    const positionLimit = {minX: 0, minY: -60, maxX: gameState.board_size.width - 60, maxY: gameState.board_size.height - 120};
    const velocity = 30;

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
            case "r":
                newTransform.orientation =
                newTransform.orientation === 270 ? 0 : newTransform.orientation + 90;
                newTransform.group_positions = calculateLineBlockRotation(
                    newTransform.orientation
                );
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
            tetrisRef.current.focus();
    }, [gameState.current_phase]);

    return (
        <div className='tetris-piece' ref={tetrisRef} autoFocus
        style={{left: `${transform.position[0]}px`, top: `${transform.position[1]}px`}}
        tabIndex='0' onKeyDown={(e) => handleInput(e)}>
            <div className='chesspiece' id='main' style={{
                top: `${transform.group_positions.main_block.top}px`, 
                left: `${transform.group_positions.main_block.left}px`
                }}>
                    <img src={sources[0]} style={{
                top: `${transform.group_positions.main_block.top}px`, 
                left: `${transform.group_positions.main_block.left}px`
                }} /> 
            </div>
            <div className='chesspiece' id='first' style={{
                top: `${transform.group_positions.first_block.top}px`,
                left: `${transform.group_positions.first_block.left}px`,
                }}>
                    <img src={sources[1]} style={{
                top: `${transform.group_positions.first_block.top}px`,
                left: `${transform.group_positions.first_block.left}px`,
                }} />  
            </div>
            <div className='chesspiece' id='second' style={{
                top: `${transform.group_positions.second_block.top}px`,
                left: `${transform.group_positions.second_block.left}px`,
                }}>
                    <img src={sources[2]} style={{
                top: `${transform.group_positions.second_block.top}px`,
                left: `${transform.group_positions.second_block.left}px`,
                }} />  
            </div>
            <div className='chesspiece' id='third' style={{
                top: `${transform.group_positions.third_block.top}px`,
                left: `${transform.group_positions.third_block.left}px`,
                }}>
                    <img src={sources[3]} style={{
                top: `${transform.group_positions.third_block.top}px`,
                left: `${transform.group_positions.third_block.left}px`,
                }} />  
            </div>
        </div>
    )
}

export { TetrisPiece };