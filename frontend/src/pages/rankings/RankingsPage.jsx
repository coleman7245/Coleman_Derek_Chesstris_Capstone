import { useState, useEffect } from 'react';

import './RankingsPage.css';

import Navbar from '../../shared_components/Navbar.jsx'
import RankingsList from './RankingsList.jsx';

function RankingsPage() {
    const [scores, setScores] = useState([]);

    async function getScores() {
        try {
            const response = await fetch(`http://localhost:8080/rankings`);
            console.log(response);
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
            <div className='rankingspage'>
                <RankingsList name='Scores' scores={scores}/>
            </div>
        </>
    );
}

export default RankingsPage;