import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import connectDB from './db.js';

import RankingRoute from './routes/RankingRoute.js';
import ResultRoute from './routes/ResultRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/ranking', RankingRoute);
app.use('/win', ResultRoute);
app.use('/lose', ResultRoute);

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port ' + process.env.PORT);
    connectDB();
});