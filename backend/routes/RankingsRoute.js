import express from 'express';

import getAllPlayerData from '../controllers/rankings.js';

const router = express.Router();

router.route('/').
    get(getAllPlayerData);

export default router;