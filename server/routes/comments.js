import express from 'express';
import { getComments, createComment, deleteComment } from '../controllers/comments.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/:objectType/:objectId', auth, getComments);
router.post('/:objectType/:objectId', auth, createComment);
router.delete('/:id', auth, deleteComment);
// router.patch('/:id', auth, updateComment);

export default router;