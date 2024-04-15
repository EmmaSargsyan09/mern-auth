import express from 'express';
import {signup} from '../controllers/auth.controller.js';
import {sign} from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/sign", sign);

export default router;