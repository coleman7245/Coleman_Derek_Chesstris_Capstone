import express from 'express';

import { deleteScore, getScores, postScore } from '../controllers/score.js';

const router = express.Router();

router.route('/')
    .get(getScores)
    .post(postScore);

router.route('/:name')
    .delete(deleteScore);

export default router;