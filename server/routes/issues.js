import express from 'express';
import { getIssues, createIssue, deleteIssue, updateIssue } from '../controllers/issues.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true });

router.get('/', auth, getIssues);
// router.get('/:id', getIssue);
router.post('/', auth, createIssue);
router.delete('/:id', auth, deleteIssue);
router.patch('/:id', auth, updateIssue);

export default router;