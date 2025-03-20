import Time from '../models/Time.js';

async function deleteTime(req, res) {
    try {
        const time = await Time.deleteMany({player_name : req.params.name});
        res.status(200).json(time);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function postTime(req, res) {
    try {
        const time = await Time.create(req.body.time);
        res.status(201).json(time);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export { deleteTime, postTime };