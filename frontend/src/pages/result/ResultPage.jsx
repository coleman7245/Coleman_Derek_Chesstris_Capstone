import { useLocation } from 'react-router-dom';

import './ResultPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import ContinueBox from './ContinueBox.jsx';
import SaveBox from './SaveBox.jsx';

function ResultPage({message}) {
    const locationState = useLocation();

    return (
        <>
            <Navbar />
            <div className='resultpage'>
                <ContinueBox message={message}/>
                <SaveBox locationState={locationState} />
            </div>
        </>
    )
}

export default ResultPage;