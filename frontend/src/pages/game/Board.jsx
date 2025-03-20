import { useState } from 'react';

import './Board.css';

import { chess_piece_images } from '../../utilities.js';
//import { TetrisPiece } from './TetrisPiece.jsx';
import ChessPiece from './ChessPiece.jsx';

function getRandomChessPiece(chessPieceImages) {
    let objectLength = Object.keys(chessPieceImages).length;
    let randomIndex = Math.floor(Math.random() * objectLength);

    return Object.keys(chessPieceImages)[randomIndex];
}

function Board() {
    const [source, getSource] = useState(chess_piece_images[getRandomChessPiece(chess_piece_images)]);

    return (
        <div className='board'>
            <ChessPiece source={source} />
        </div>
    )
}

export default Board;