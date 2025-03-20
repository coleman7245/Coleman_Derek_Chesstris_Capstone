import express from 'express';

import { getPlayers, postPlayer } from '../controllers/player.js';

const router = express.Router();

router.route('/')
    .get(getPlayers)
    .post(postPlayer);

export default router;