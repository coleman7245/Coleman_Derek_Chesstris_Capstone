import { useState, useRef, useEffect, useContext } from 'react';

import './TetrisPiece.css';
import { createBlockConfig } from '../../tetris_block_moves.js';

import { GameContext } from '../../App.jsx';
import { Game_Phase } from '../../utilities.js';

function TetrisPiece({sources, type}) {
    const defaultConfig = createBlockConfig(type);
    const [gameState, dispatch] = useContext(GameContext);
    const tetrisRef = useRef(null);
    const [blockConfig, setBlockConfig] = useState(defaultConfig);
    const positionLimit = {minX: 0, minY: -60, maxX: gameState.board_size.width - 60, maxY: gameState.board_size.height - 120};
    const velocity = 30;

    function handleInput(event) {
        event.preventDefault();
        let newConfig = {...blockConfig};
        let hasScored = false;
        let crossedFinishLine = false;

        switch (event.key) {
            case 'w':
                newConfig.position[1] -= (newConfig.position[1] - velocity < positionLimit.minY) ? 0 : velocity;
                hasScored = true;
                break;
            case 'a':
                newConfig.position[0] -= (newConfig.position[0] - velocity < positionLimit.minX) ? 0 : velocity;
                hasScored = true;
                break;
            case 's':
                newConfig.position[1] += (newConfig.position[1] + velocity > positionLimit.maxY) ? 0 : velocity;
                hasScored = true;
                break;
            case 'd':
                newConfig.position[0] += (newConfig.position[0] + velocity > positionLimit.maxX) ? 0 : velocity;
                hasScored = true;
                break;
            case "r":
                newConfig.orientation =
                newConfig.orientation === 270 ? 0 : newConfig.orientation + 90;
                newConfig.group_positions = newConfig.rotate_function(
                    newConfig.orientation
                );
                break;
            default:
                hasScored = false;
                break;
        }

        crossedFinishLine = newConfig.position[1] >= gameState.win_state.win_pos_y ? true : false;
        dispatch({type : 'CHANGE_SCORE', hasScored : hasScored, crossedFinishLine : crossedFinishLine});
        setBlockConfig(newConfig);
    }

    useEffect(() => {
        if (gameState.current_phase !== Game_Phase.PAUSED)
            tetrisRef.current.focus();
    }, [gameState.current_phase]);

    return (
        <div className='tetris-piece' ref={tetrisRef} autoFocus
        style={{left: `${blockConfig.position[0]}px`, top: `${blockConfig.position[1]}px`}}
        tabIndex='0' onKeyDown={(e) => handleInput(e)}>
            <div className='chesspiece' id='main' style={{
                top: `${blockConfig.group_positions.main_block.top}px`, 
                left: `${blockConfig.group_positions.main_block.left}px`
                }}>
                    <img src={sources[0]} style={{
                top: `${blockConfig.group_positions.main_block.top}px`, 
                left: `${blockConfig.group_positions.main_block.left}px`
                }} /> 
            </div>
            <div className='chesspiece' id='first' style={{
                top: `${blockConfig.group_positions.first_block.top}px`,
                left: `${blockConfig.group_positions.first_block.left}px`,
                }}>
                    <img src={sources[1]} style={{
                top: `${blockConfig.group_positions.first_block.top}px`,
                left: `${blockConfig.group_positions.first_block.left}px`,
                }} />  
            </div>
            <div className='chesspiece' id='second' style={{
                top: `${blockConfig.group_positions.second_block.top}px`,
                left: `${blockConfig.group_positions.second_block.left}px`,
                }}>
                    <img src={sources[2]} style={{
                top: `${blockConfig.group_positions.second_block.top}px`,
                left: `${blockConfig.group_positions.second_block.left}px`,
                }} />  
            </div>
            <div className='chesspiece' id='third' style={{
                top: `${blockConfig.group_positions.third_block.top}px`,
                left: `${blockConfig.group_positions.third_block.left}px`,
                }}>
                    <img src={sources[3]} style={{
                top: `${blockConfig.group_positions.third_block.top}px`,
                left: `${blockConfig.group_positions.third_block.left}px`,
                }} />  
            </div>
        </div>
    )
}

export { TetrisPiece };