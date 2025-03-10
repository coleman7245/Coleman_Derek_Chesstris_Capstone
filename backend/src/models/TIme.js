import mongoose from 'mongoose';

const timeSchema = mongoose.Schema({
    hours : {type : Number, default : 0},
    minutes : {type : Number, default : 0},
    seconds : {type : Number, default : 0}
});

const Time = mongoose.model('Time', timeSchema);

export default Time;