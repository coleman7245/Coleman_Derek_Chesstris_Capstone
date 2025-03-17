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

export { initialGameState, Game_Phase }; 