import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    scores : {type : Array, default : []},
    times : {type : Date, default : new Date(0)}
},
{
    virtuals : {
        max_score : {
            get() {return Math.max(...scores);}
        }
    }
});

const Player = mongoose.model('Player', playerSchema);

export default Player;