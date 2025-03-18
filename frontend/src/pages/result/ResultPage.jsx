import './ResultPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import ContinueBox from './ContinueBox.jsx';
import SaveBox from './SaveBox.jsx';

function ResultPage({message}) {
    return (
        <>
            <Navbar />
            <div className='resultpage'>
                <ContinueBox message={message}/>
                <SaveBox />
            </div>
        </>
    )
}

export default ResultPage;