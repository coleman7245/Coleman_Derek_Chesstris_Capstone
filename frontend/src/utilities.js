const Game_Phase = {
    PLAYING : 'PLAYING',
    LOST: 'LOST',
    WON: 'WON',
    NOT_RUNNING : 'NOT_RUNNING',
    PAUSED : 'PAUSED'
} 

const initialGameState = {
    player_name : '', 
    startTime : new Date(),
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
    },
    isPaused : false,
    tetris_pieces : [],
    default_block_position: []
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
        console.log(err);
    }
}

const chess_piece_images = {
    'black_bishop': '/src/assets/images/chess_black_bishop.png',
    'black_king' : '/src/assets/images/chess_black_king.png',
    'black_knight': '/src/assets/images/chess_black_knight.png',
    'black_pawn' : '/src/assets/images/chess_black_pawn.png',
    'black_queen' : '/src/assets/images/chess_black_queen.png',
    'black_rook' : '/src/assets/images/chess_black_rook.png',
    'white_bishop' : '/src/assets/images/chess_white_bishop.png',
    'white_king' : '/src/assets/images/chess_white_king.png',
    'white_knight' : '/src/assets/images/chess_white_knight.png',
    'white_pawn' : '/src/assets/images/chess_white_pawn.png',
    'white_queen' : '/src/assets/images/chess_white_queen.png',
    'white_rook' : '/src/assets/images/chess_white_rook.png'
};

const tetris_block_types = [
    'tBlock',
    'squigglyBlock',
    'reverseSquigglyBlock',
    'lBlock',
    'reverseLBlock',
    'squareBlock',
    'lineBlock'
];

export { initialGameState, Game_Phase, getCurrentGame, saveCurrentGame, overrideCurrentGame, chess_piece_images, tetris_block_types }; 