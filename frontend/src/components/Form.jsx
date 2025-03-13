import { useContext } from 'react';

import '../styles/Form.css';

import { GameContext } from './GamePage.jsx';

function Form() {
    const [gameState, dispatch] = useContext(GameContext);

    return (
        <form className='form' id='player-form' onSubmit={(e) => {
            e.preventDefault() 
            dispatch({type : 'FORM_INPUT', event : e})
            }}>
            <label htmlFor=''>Name </label>
            <input type='text' placeholder='Enter Name' />
            <button htmlFor='player-form'>Submit</button>
        </form>
    )
}

export default Form;