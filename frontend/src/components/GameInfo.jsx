import '../styles/GameInfo.css';

function GameInfo({score, time, playerName}) {
    return (
        <div className='gameinfo'>
            Player: {playerName} <br />
            Time: {time} <br />
            Score: {score}
        </div>
    )
}

export default GameInfo;