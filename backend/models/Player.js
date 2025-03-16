import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    player_name : {Type : String, required : true},
    email : {Type : String, default : ''}
});

const Player = mongoose.model('Player', playerSchema);

export default Player;