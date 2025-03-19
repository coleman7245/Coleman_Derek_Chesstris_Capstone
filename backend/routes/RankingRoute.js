import express from 'express';

import Player from '../models/Player.js';
import Score from '../models/Score.js';

const router = express.Router();

router.get('/rankings', async (req, res) => {
    try {
        const scores = Score.find({});
        res.status(200).json(scores);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

export default router;