import mongoose from 'mongoose';

const gameStateSchema = new mongoose.Schema({
    email : {Type : String, require : true},
    player_name : {Type : String, default : ""},
    startTime : {Type : Number},
    finishTime : {Type : Object}, 
    score : {Type : Number},
    board_size : {Type : Object},
    current_phase : {Type : String},
    crossed_finish_line : {Type : Boolean},
    win_state : {Type : Object}
});

const GameState = mongoose.model('GameState', gameStateSchema);

export default GameState;