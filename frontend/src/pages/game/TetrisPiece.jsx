import { useState, useContext } from 'react';

import './ChessPiece.css';

import ChessPiece from './ChessPiece.jsx';

function TetrisPiece({sources}) {
    return (
        <div className='tetris-piece'>
            <ChessPiece source={sources[0]} />
            <ChessPiece source={sources[1]} />
        </div>
    )
}

export default TetrisPiece;