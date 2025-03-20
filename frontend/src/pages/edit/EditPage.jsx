import { useLocation } from 'react-router-dom';

import './EditPage.css';

import Navbar from '../../shared_components/Navbar.jsx';

function EditPage({message}) {
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

export default EditPage;