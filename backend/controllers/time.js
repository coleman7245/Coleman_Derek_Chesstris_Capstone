import Time from '../models/Time.js';

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

export default postTime;