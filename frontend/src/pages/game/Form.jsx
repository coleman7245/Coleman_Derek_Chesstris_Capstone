import { useContext, useState, useEffect, useRef } from 'react';

import './Form.css';

import { GameContext } from './GamePage.jsx';

function Form() {
    const textRef = useRef(null);
    const [gameState, dispatch] = useContext(GameContext);
    const [input, setInput] = useState('');
    const [nameTaken, setNameTaken] = useState(false);

    function handleSubmission(e, dispatch, input) {
        e.preventDefault();
        playerExists(input);
        if (nameTaken) {
            setNameTaken(false);
            dispatch({type : 'FORM_INPUT', payload :input});
        }
        else {
            setInput('');
        }
    }

    async function playerExists(playerName) {
        try {
            const response = await fetch("http://localhost:8080/api/players");
            const players = await response.json();
            players.some((p) => p.player_name === playerName, playerName) ? setNameTaken(true) : setNameTaken(false);
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
        <form className='form' id='player-form' onSubmit={(e) => handleSubmission(e, dispatch, input)}>
            Enter your name <br /> <br />
            {nameTaken ? <div id='name-taken-warning' style={{color:'red'}}>Name already taken!</div> : null}
            <input ref={textRef} id='name-field' type='text' placeholder='Name' onChange={(e) => setInput(e.target.value)} value={input}/> <br /> <br />
            <button htmlFor='player-form'>Submit</button>
        </form>
    )
}

export default Form;