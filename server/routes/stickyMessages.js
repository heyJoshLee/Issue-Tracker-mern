import express from 'express';
import {getstickyMessages, createStickyMessage, deleteStickyMessage, updateStickyMessage} from '../controllers/stickyMessages.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/:objectType/:objectId', auth, getstickyMessages);
router.post('/:objectType/:objectId', auth, createStickyMessage);

router.delete('/:id', auth, deleteStickyMessage);
router.patch('/:id', auth, updateStickyMessage);

export default router;