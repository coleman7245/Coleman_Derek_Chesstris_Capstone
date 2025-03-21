import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        unique : true
    },
    email : {
        type : String, 
        default : ''
    }
});

const Player = mongoose.model('Player', playerSchema);

export default Player;