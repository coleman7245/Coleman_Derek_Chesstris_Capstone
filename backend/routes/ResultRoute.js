import express from 'express';

import postPlayerData from '../controllers/result.js';

const router = express.Router();

router.route('/').
    post(postPlayerData);

export default router;