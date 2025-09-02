import { useState } from 'react';

import './Board.css';

import { chess_piece_images, tetris_block_types } from '../../utilities.js';
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

function createRandomTetrisPiece(tetrisBlockTypes, sources) {
    let randomIndex = Math.floor(Math.random() * tetrisBlockTypes.length);
    let type = tetrisBlockTypes[randomIndex];

    return <TetrisPiece sources={sources} type={type}  />;
}

function Board() {
    const [sources] = useState(getRandomChessPieces(chess_piece_images));

    return (
        <div className='board'>
            {createRandomTetrisPiece(tetris_block_types, sources)}
        </div>
    )
}

export default Board;