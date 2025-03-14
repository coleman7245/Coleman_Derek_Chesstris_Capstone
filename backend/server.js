import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import connectDB from './db.js';

import HomeRoute from './routes/HomeRoute.js';
import GameRoute from './routes/GameRoute.js';
import RankingRoute from './routes/RankingRoute.js';
import RulesRoute from './routes/RulesRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', HomeRoute);
app.use('/game', GameRoute);
app.use('/ranking', RankingRoute);
app.use('/about', RulesRoute);

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port ' + process.env.PORT);
    connectDB();
});