import express from 'express';
import {getstickyMessages, createStickyMessage} from '../controllers/stickyMessages.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/:objectType/:objectId', auth, getstickyMessages);
// router.get('/:id', getstickyMessage);
router.post('/:objectType/:objectId', auth, createStickyMessage);

// router.delete('/:id', auth, deletestickyMessage);
// router.patch('/:id', auth, updatestickyMessage);

export default router;