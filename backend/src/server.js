import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import connectDB from './db.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {

});

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port ' + process.env.PORT);
    connectDB();
});