import { Link } from 'react-router-dom';

import './HomePage.css';

import home_pic from '../assets/images/chess_homepage_image.jpg';

function HomePage() {
    return (
        <div className='homepage'>
            This is Chesstris <br />
            <img src={home_pic} /> <br />
            <Link to='/game'>
                <button>
                    NEW GAME
                </button>
            </Link>
            <Link to='/rankings'>
                <button>
                    Rankings
                </button>
            </Link>
            <Link to='/rules'>
                <button>
                    Rules
                </button>
            </Link>
            <Link to='/about'>
                <button>
                    About
                </button>
            </Link>
        </div>
    );
}

export default HomePage;