import { useState, useEffect } from 'react';

import './RankingsPage.css';

import Navbar from '../../shared_components/Navbar.jsx'
import RankingsList from './RankingsList.jsx';

function RankingsPage() {
    const [scores, setScores] = useState([]);

    async function getScores() : Promise<any> {
        try {
            const response = await fetch(`http://localhost:8080/api/scores`);
            console.log(response);
            const scores : Promise<any> = await response.json();
            setScores(await scores);
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
            <div className='rankingspage'>
                <button id='score-rankings-btn'>Scores</button>
                <button id='player-rankings-btn'>Players</button>
                <button id='time-rankings-btn'>Times</button>
                <RankingsList name='Scores' scores={scores}/>
            </div>
        </>
    );
}

export default RankingsPage;