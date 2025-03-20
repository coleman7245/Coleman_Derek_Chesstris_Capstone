import express from 'express';

import postScore from '../controllers/score.js';

const router = express.Router();

router.route('/').
    post(postScore);

export default router;