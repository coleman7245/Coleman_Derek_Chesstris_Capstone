import '../styles/Board.css';

import black_bishop from '../assets/images/chess_black_bishop.png';
import ChessPiece from './ChessPiece.jsx';

function Board({width, height}) {
    // let squares = [];
    
    // for (let x = 0; x < width; x++) {
    //     for (let y = 0; y < height; y++) {
    //         const key = String(x * height + y);
    //         squares.push(<div className='square' key={key}></div>);
    //     }
    // }

    return (
        <div className='board'>
            <ChessPiece source={black_bishop} />
            {/* {squares} */}
        </div>
    )
}

export default Board