import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    player_name : {type : String, require : true},
    score : {type : Number, require : true}
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;