import Player from '../models/Player.js';
import Score from '../models/Score.js';
import Time from '../models/Time.js';

async function getAllPlayerData(req, res) {
    try {
        const scores = Score.find();
        res.status(200).json(scores);
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
}

export default getAllPlayerData;