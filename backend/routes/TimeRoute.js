import express from 'express';

import postTime from '../controllers/time.js';

const router = express.Router();

router.route('/').
    post(postTime);

export default router;