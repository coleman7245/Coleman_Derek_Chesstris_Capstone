import { Request, Response } from 'express';

import Player from '../models/Player.ts';

async function deletePlayer(req : Request, res : Response) {
    try {
        const player = await Player.findOneAndDelete({name : req.params.name});
        res.status(200).json(player);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function getPlayer(req : Request, res : Response) {
    try {
        const player = await Player.find({name : req.params.name});
        res.status(200).json(player);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function getPlayers(res : Response) {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function postPlayer(req : Request, res : Response) {
    try {
        const player = await Player.create(req.body.player);
        res.status(201).json(player);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function patchPlayer(req : Request, res : Response) {
    try {
        const appendedPlayer = await Player.findOneAndUpdate({player_name : req.body.player.name}, req.body.player);
        res.status(200).json(appendedPlayer);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export { deletePlayer, getPlayer, getPlayers, postPlayer, patchPlayer };