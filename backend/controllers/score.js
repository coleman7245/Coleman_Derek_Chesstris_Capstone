import Score from '../models/Score.js';

async function postScore(req, res) {
    try {
        const score = await Score.create(req.body.score);
        res.status(201).json(score);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export default postScore;