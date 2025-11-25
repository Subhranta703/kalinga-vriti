import express from 'express';
import { register, login, googleLogin,submitContactForm } from '../controllers/authController.js';

const router = express.Router();
router.post('/contact',submitContactForm)
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);

export default router;