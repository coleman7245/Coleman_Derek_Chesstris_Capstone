const Game_Phase = {
    PLAYING : 1,
    LOST: 2,
    WON: 3
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
    crossed_finish_line : true,
    win_state : {
        win_score : 18
    }
}

export { initialGameState, Game_Phase }; 