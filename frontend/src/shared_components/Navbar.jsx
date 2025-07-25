import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GameContext } from '../App.jsx';

import './Navbar.css';

function Navbar() {
    const [gameState, dispatch] = useContext(GameContext);

    return (
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}>
                Home
            </Link>
            <Link to='/game' style={{textDecoration: 'none'}}>
                Game
            </Link>
            <Link to='/rankings' style={{textDecoration: 'none'}}>
                Rankings
            </Link>
            <Link to='/edit' style={{textDecoration: 'none'}}>
                Edit
            </Link>
            <Link to='/rules' style={{textDecoration: 'none'}}>
                Rules
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
                About
            </Link>
            <span>
                Player: {gameState.player_name} logged in
            </span>
        </div>
    )
}

export default Navbar;