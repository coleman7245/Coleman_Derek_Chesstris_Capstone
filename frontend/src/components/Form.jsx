import { useContext, useState } from 'react';

import '../styles/Form.css';

import { GameContext } from './GamePage.jsx';

function handleSubmission(e, dispatch, input) {
    e.preventDefault();
    dispatch({type : 'FORM_INPUT', payload :input});
}

function Form() {
    const [gameState, dispatch] = useContext(GameContext);
    const [input, setInput] = useState('');

    return (
        <form className='form' id='player-form' onSubmit={(e) => handleSubmission(e, dispatch, input)}>
            Enter your name <br /> <br />
            <input type='text' placeholder='Name' onChange={(e) => setInput(e.target.value)} value={input}/> <br /> <br />
            <button htmlFor='player-form'>Submit</button>
        </form>
    )
}

export default Form;