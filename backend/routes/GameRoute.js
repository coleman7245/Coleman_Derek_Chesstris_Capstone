import express from 'express';

import Player from '../models/Player.js';
import Score from '../models/Score.js';
import Time from '../models/Time.js';

const router = express.Router();

router.post('/game', async (req, res) => {
    try {
        const player = await Player.create(req.body.player);
        const score = await Score.create(req.body.score);
        const time = await Time.creat(req.body.time);
        console.log(player);
        console.log(score);
        console.log(time);
        res.status(201).json(player);
        res.status(201).json(score);
        res.status(201).json(time);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

export default router;