import './LosePage.css';

import Navbar from '../../shared_components/Navbar.jsx'
import ContinueBox from '../../shared_components/ContinueBox.jsx';

function LosePage() {
    return (
        <div className='losepage'>
            <Navbar />
            <ContinueBox message='You lose!' />
        </div>
    )
}

export default LosePage;