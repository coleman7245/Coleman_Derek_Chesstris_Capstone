import { Request, Response } from 'express';

import Score from '../models/Score.ts';

async function getScores(res : Response) {
    try {
        const scores = await Score.find();
        res.status(200).json(scores);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function deleteScore(req : Request, res : Response) {
    try {
        const score = await Score.deleteMany({player_name : req.params.name});
        res.status(200).json(score);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function postScore(req : Request, res : Response) {
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