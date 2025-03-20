import { useContext, useState, useEffect, useRef } from 'react';

import './Form.css';

import { GameContext } from '../App.jsx';

function Form() {
    const textRef = useRef(null);
    const [gameState, dispatch] = useContext(GameContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameTaken, setNameTaken] = useState(false);

    function handleSubmission(e, dispatch, name, email) {
        e.preventDefault();
        playerExists(name);
        if (!nameTaken) {
            dispatch({type : 'FORM_INPUT', player : {name : name, email : email}});
        }
        else {
            setName('');
            setEmail('');
        }
    }

    async function playerExists(playerName) {
        try {
            const response = await fetch("http://localhost:8080/api/players");
            const players = await response.json();
            players.some((p) => p.name === playerName, playerName) ? setNameTaken(true) : setNameTaken(false);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (nameTaken)
            textRef.current.focus();
    }, [nameTaken]);

    return (
        <form className='form' ref={textRef} id='player-form' onSubmit={(e) => handleSubmission(e, dispatch, name, email)}>
            Enter your name and email <br /> <br />
            {nameTaken ? <div id='name-taken-warning' style={{color:'red'}}>Name already taken!</div> : null}
            <input id='name-field' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/> <br /> <br />
            <input id='email-field' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/> <br /> <br />
            <button htmlFor='player-form'>Submit</button>
        </form>
    )
}

export default Form;