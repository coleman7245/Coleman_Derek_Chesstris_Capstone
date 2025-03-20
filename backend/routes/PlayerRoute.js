import express from 'express';

import { getPlayers, postPlayer, patchPlayer } from '../controllers/player.js';

const router = express.Router();

router.route('/')
    .get(getPlayers)
    .post(postPlayer)
    .put(patchPlayer);

export default router;