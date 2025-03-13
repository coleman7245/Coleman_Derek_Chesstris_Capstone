import mongoose from 'mongoose';

const timeSchema = mongoose.Schema({
    player_id : {type : String, required : true},
    hours : {type : Number, default : 0},
    minutes : {type : Number, default : 0},
    seconds : {type : Number, default : 0}
});

const Time = mongoose.model('Time', timeSchema);

export default Time;