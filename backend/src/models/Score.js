import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    player_id : {type : String, require : true},
});

const Score = mongoose.model('Score', scoreSchema);

export default Score;