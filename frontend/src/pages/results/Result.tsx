import './WinPage.css';

import Navbar from '../../shared_components/Navbar.tsx';
import ContinueBox from '../result/ContinueBox.tsx';

function WinPage() {
    return (
        <div className='winpage'>
            <Navbar />
            <ContinueBox message='You win!'/>
        </div>
    )
}

export default WinPage;