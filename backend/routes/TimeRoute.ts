import * as express from 'express';

import { deleteTime, postTime } from '../controllers/time.ts';

const router = express.Router();

router.route('/')
    .post(postTime);

router.route('/:name')
    .delete(deleteTime);

export default router;