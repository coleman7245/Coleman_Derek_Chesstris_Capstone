import mongoose from 'mongoose';

async function connectDB() {
    try {
        if (typeof process.env.MONGO_URI === 'string') {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('Connected to DB!');
        }
        else
            throw new Error('Error: URL not a string!');
    }
    catch(err) {
        console.log(err);
    }
}

export default connectDB;