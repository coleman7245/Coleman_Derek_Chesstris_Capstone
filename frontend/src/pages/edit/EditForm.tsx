import { useContext, useState, useRef } from 'react';

import './EditForm.css';

import { GameContext } from '../../App.tsx';

function EditForm() {
    const textRef = useRef(null);
    const [gameState, dispatch] = useContext(GameContext);
    const [email, setEmail] = useState('');
    const [editDone, setEditDone] = useState(false);

    function handleSubmission(e : React.FormEvent<HTMLElement>, dispatch : Function, email : string) {
        e.preventDefault();
        dispatch({type : 'EDIT_INPUT', player : {name : gameState.player_name, email : email}});
        setEmail('');
        setEditDone(true);
    }

    return (
        <form className='form' ref={textRef} id='player-form' onSubmit={(e) => handleSubmission(e, dispatch, email)}>
            {editDone ? 'Edit Done!' : 'Enter your email'} <br /> <br />
            {editDone ? null : <>
                <input id='email-field' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/> <br /> <br />
                <button>Submit</button>
            </>}
        </form>
    )
}

export default EditForm;