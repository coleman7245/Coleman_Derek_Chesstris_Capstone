import { useState, useEffect } from 'react';

import './RankingsPage.css';

import Navbar from '../../shared_components/Navbar.jsx'

function RankingsPage() {
    const [scores, setScores] = useState([]);

    async function getScores() {
        try {
            const response = await fetch('/rankings');
            const scores = await response.json();
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
                {scores.map((score, i) => {
                    <li className='score' key={i}>{score.score + ' : ' + score.player_name}</li>
                })}
            </ol>
        </>
    );
}

export default RankingsPage;