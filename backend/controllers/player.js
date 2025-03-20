import Player from '../models/Player.js';

async function getPlayers(req, res) {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function postPlayer(req, res) {
    try {
        const player = await Player.create(req.body.player);
        res.status(201).json(player);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export { getPlayers, postPlayer };