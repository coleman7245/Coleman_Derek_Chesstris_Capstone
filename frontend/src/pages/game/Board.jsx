import { useState } from 'react';

import './Board.css';

import { chess_piece_images } from '../../utilities.js';
import { TetrisPiece } from './TetrisPiece.jsx';

function getRandomChessPiece(chessPieceImages) {
    let objectLength = Object.keys(chessPieceImages).length;
    let randomIndex = Math.floor(Math.random() * objectLength);

    return chessPieceImages[Object.keys(chessPieceImages)[randomIndex]];
}

function getRandomChessPieces(chessPieceImages) {
    let source_images = [];

    for (let i = 0; i < 4; i++) {
        source_images.push(getRandomChessPiece(chessPieceImages));
    }

    return source_images;
}

function Board() {
    const [sources, setSources] = useState(getRandomChessPieces(chess_piece_images));

    return (
        <div className='board'>
            <TetrisPiece sources={sources} />
        </div>
    )
}

export default Board;