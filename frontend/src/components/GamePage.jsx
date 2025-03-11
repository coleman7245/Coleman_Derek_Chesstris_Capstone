import '../styles/Game.css';

import Navbar from './Navbar.jsx';
import Board from './Board.jsx';

function GamePage() {
    return (
        <div>
            <Navbar />
            <div className='gamepage'>
                <Board width={20} height={20} />
            </div>
        </div>
    );
}

export default GamePage;