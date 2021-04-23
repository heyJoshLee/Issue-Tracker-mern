import express from 'express';
import { createUser, getUsers, getUser, updateUser} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.post('/', createUser);

export default router;