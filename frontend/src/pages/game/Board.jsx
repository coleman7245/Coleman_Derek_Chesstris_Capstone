import './Board.css';

import black_bishop from '../assets/images/chess_black_bishop.png';
import ChessPiece from './ChessPiece.jsx';

function Board() {

    return (
        <div className='board'>
            <ChessPiece source={black_bishop} />
        </div>
    )
}

export default Board