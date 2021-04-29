import express from 'express';
import { createProject, getProjects, getProject, deleteProject, updateProject} from '../controllers/projects.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', auth, createProject);
router.delete('/:id', auth, deleteProject);
router.patch('/:id', auth, updateProject);

export default router;