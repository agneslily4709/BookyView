import express from 'express';
import { createView, deleteView, getAllView, getView, updateView } from '../Controller/Controller.js';

const router = express.Router();

router.post('/',createView);
router.get('/',getAllView);
router.get('/:id',getView);
router.put('/:id',updateView);
router.delete('/:id',deleteView);


export default router;