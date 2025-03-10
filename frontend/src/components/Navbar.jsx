import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <Link to='/' style={{textDecoration: 'none'}}>
                Home
            </Link>
            <Link to='/game' style={{textDecoration: 'none'}}>
                Game
            </Link>
            <Link to='/rankings' style={{textDecoration: 'none'}}>
                Rankings
            </Link>
            <Link to='/rules' style={{textDecoration: 'none'}}>
                Rules
            </Link>
            <Link to='/about' style={{textDectoration: 'none'}}>
                About
            </Link>
        </div>
    )
}

export default Navbar;