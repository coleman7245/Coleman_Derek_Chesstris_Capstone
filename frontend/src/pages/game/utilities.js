const Game_Phase = {
    PLAYING : 'PLAYING',
    LOST: 'LOST',
    WON: 'WON'
} 

const initialGameState = {
    player_name : '', 
    startTime : 0,
    finishTime : {hours : 0, minutes: 0, seconds: 0}, 
    score : 0,
    board_size : {
        width: 360,
        height: 600
    },
    current_phase : Game_Phase.PLAYING,
    crossed_finish_line : false,
    win_state : {
        win_pos_y : 480,
        win_score : 18
    }
}

async function getCurrentGame(dispatch) {
    try {
        const response = await fetch('');
        const result = await response.json();
        dispatch({type : 'LOAD_GAME', game : result});
    }
    catch(err) {
        console.log(err);
    }
}

async function saveCurrentGame(dispatch) {
    try {
        const response = await fetch('');
        const result = await response.json();
        dispatch({type : 'SAVE_GAME', game : result});
    }
    catch(err) {
        console.log(err);
    }
}

async function overrideCurrentGame(dispatch) {
    try {
        const response = await fetch('');
        const result = await response.json();
        dispatch({type : 'OVERRIDE_GAME', game : result});
    }
    catch (err) {

    }
}

export { initialGameState, Game_Phase, getCurrentGame, saveCurrentGame, overrideCurrentGame }; 