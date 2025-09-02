import { useContext, useState, useEffect, useRef } from 'react';

import './Form.css';

import { GameContext } from '../App.tsx';

import { Player } from '../utilities.ts';

function Form() {
    const textRef = useRef<HTMLFormElement>(null);
    const [dispatch] = useContext(GameContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameTaken, setNameTaken] = useState(false);
    const [emailTaken, setEmailTaken] = useState(false);

    function handleSubmission(e : React.FormEvent<HTMLFormElement>, dispatch : Function, name : string, email : string) {
        e.preventDefault();
        playerExists(name, email);
        if (!nameTaken && !emailTaken) {
            dispatch({type : 'ADD_NEW_PLAYER', player : {name : name, email : email}});
        }
        else if (nameTaken && emailTaken) {
            dispatch({type : 'LOG_IN', player : {name : name, email : email}});
        }
        else {
            setName('');
            setEmail('');
        }
    }

    async function playerExists(playerName : string, playerEmail : string) {
        try {
            const response = await fetch("http://localhost:8080/api/players");
            const players = await response.json();
            players.some((p : Player) => p.name === playerName, playerName) ? setNameTaken(true) : setNameTaken(false);
            players.some((p : Player) => p.email === playerEmail, playerEmail) ? setEmailTaken(true) : setEmailTaken(false);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if ((nameTaken || emailTaken) && textRef !== null && textRef.current !== null)
            textRef.current.focus();
    }, [nameTaken, emailTaken]);

    return (
        <form className='form' ref={textRef} id='player-form' onSubmit={(e) => handleSubmission(e, dispatch, name, email)}>
            Enter your name and email <br /> <br />
            {!emailTaken && nameTaken ? <div id='name-taken-warning' style={{color:'red'}}>Name already taken!</div> : null}
            {emailTaken && !nameTaken ? <div id='email-taken-warning' style={{color:'red'}}>Email already taken!</div> : null}
            {emailTaken && nameTaken ? <div id='logging-in'>Logging In...</div> : null}
            <input id='name-field' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/> <br /> <br />
            <input id='email-field' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/> <br /> <br />
            <button onClick={(e) => {
                const button = e.target as HTMLButtonElement;
                button.blur();
                }}>
                Submit
            </button>
        </form>
    )
}

export default Form;