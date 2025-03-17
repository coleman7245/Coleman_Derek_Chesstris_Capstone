import './WinPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import ContinueBox from '../../shared_components/ContinueBox.jsx';

function WinPage() {
    return (
        <div className='winpage'>
            <Navbar />
            <ContinueBox message='You win!'/>
        </div>
    )
}

export default WinPage;