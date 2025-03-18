import { useState } from 'react';

import './SaveBox.css';

function SaveBox() {
    const [save, setSave] = useState(false);

    function handleSave(event) {
        setSave(true);
    }

    return (
        <div className='save-box'>
            {save? 'Data Saved!' : 'Save Data?'}
            {save? null :<button id='save'  onClick={(e) => handleSave(e)}>Save</button>}
        </div>
    )
}

export default SaveBox;