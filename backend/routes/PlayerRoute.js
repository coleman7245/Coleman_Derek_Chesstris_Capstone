import express from 'express';

import { getPlayer, getPlayers, postPlayer, patchPlayer, deletePlayer } from '../controllers/player.js';

const router = express.Router();

router.route('/')
    .get(getPlayers)
    .post(postPlayer)
    .put(patchPlayer);

router.route('/:name')
    .get(getPlayer)
    .delete(deletePlayer);

export default router;