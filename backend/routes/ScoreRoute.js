import express from 'express';

import { deleteScore, postScore } from '../controllers/score.js';

const router = express.Router();

router.route('/')
    .post(postScore);

router.route('/:name')
    .delete(deleteScore);

export default router;