import express from 'express';
import {signup} from '../controllers/auth.controller.js';
import {sign,signout,google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/sign", sign);
router.get('/signout',signout)
router.post('/google',google)


export default router;