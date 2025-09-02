import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import connectDB from './db.ts';

import PlayerRoute from './routes/PlayerRoute.ts';
import ScoreRoute from './routes/ScoreRoute.ts';
import TimeRoute from './routes/TimeRoute.ts';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/players', PlayerRoute);
app.use('/api/scores', ScoreRoute);
app.use('/api/times', TimeRoute);

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port ' + process.env.PORT);
    connectDB();
});