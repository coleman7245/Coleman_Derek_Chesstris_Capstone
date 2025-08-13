import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema({
    player_name : {type : String, required : true},
    time : {type : {
        hours : {type : Number, default : 0},
        minutes : {type : Number, default : 0},
        seconds : {type : Number, default : 0}
    }, default : {}}
});

const Time = mongoose.model('Time', timeSchema);

export default Time;
