import '../styles/Game.css';

import Navbar from './Navbar.jsx';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';

function GamePage() {
    return (
        <div>
            <Navbar />
            <div className='gamepage'>
                <Board width={20} height={20} />
                <GameInfo score={0} time={'0:0:0'} playerName={'Derek'}/>
            </div>
        </div>
    );
}

export default GamePage;