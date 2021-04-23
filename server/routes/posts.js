import express from 'express';
import { createPost, getPosts, getPost, deletePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);

export default router;