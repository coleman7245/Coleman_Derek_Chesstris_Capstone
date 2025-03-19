import { useState, useEffect } from 'react';

import './RankingsPage.css';

import Navbar from '../../shared_components/Navbar.jsx'

function RankingsPage() {
    const [scores, setScores] = useState([]);

    async function getScores() {
        try {
            const response = await fetch(`http://localhost:8080/rankings`);
            const scores = await response.json();
            console.log(scores);
            setScores(scores);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getScores();
    }, []); 

    return (
        <>
            <Navbar />
            <ol className='rankingspage'>
                {(scores) ? scores.map((score, i) => {
                    <li className='score' key={i}>{score.score + ' : ' + score.player_name}</li>
                }) : null}
            </ol>
        </>
    );
}

export default RankingsPage;