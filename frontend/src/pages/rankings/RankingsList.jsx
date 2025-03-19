import './RankingsList.css';

function RankingsList({name, scores}) {
    return (
        <ol className='rankings-list' value={name}>
            {(scores) ? scores.map((score, i) => {
                return <><li key={i}>{`Score: ${score.player_name} - Player: ${score.score}`}</li><br /></>
                }) : null}
        </ol>
    )
}

export default RankingsList;