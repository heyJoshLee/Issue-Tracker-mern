import express from 'express';
import { createUser, getUsers} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;