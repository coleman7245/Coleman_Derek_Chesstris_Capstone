import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import './ResultPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import ContinueBox from './ContinueBox.jsx';
import SaveBox from './SaveBox.jsx';
import DeleteBox from './DeleteBox.jsx';

function ResultPage({message}) {
    const locationState = useLocation();

    return (
        <>
            <Navbar />
            <div className='resultpage'>
                <ContinueBox message={message} gameState={locationState.state} />
                <SaveBox locationState={locationState} />
                <DeleteBox locationState={locationState} />
            </div>
        </>
    )
}

export default ResultPage;