import './ResultPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import ContinueBox from '../../shared_components/ContinueBox.jsx';

function ResultPage() {
    return (
        <div className='resultpage'>
            <Navbar />
            <ContinueBox message='You win!'/>
        </div>
    )
}

export default ResultPage;