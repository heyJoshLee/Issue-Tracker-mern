import express from 'express';
import { 
  createOrganization, 
  getOrganizations, 
  getOrganization, 
  deleteOrganization, 
  updateOrganization } from '../controllers/Organizations.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getOrganizations);
router.get('/:id', auth, getOrganization);
router.post('/', auth, createOrganization);
router.delete('/:id', auth, deleteOrganization);
router.patch('/:id', auth, updateOrganization);

export default router;