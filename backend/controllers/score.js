import Score from '../models/Score.js';

async function getScores(req, res) {
    try {
        const scores = await Score.find();
        res.status(200).json(scores);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function deleteScore(req, res) {
    try {
        const score = await Score.deleteMany({player_name : req.params.name});
        res.status(200).json(score);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

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

export { deleteScore, getScores, postScore };