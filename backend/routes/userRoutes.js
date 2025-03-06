import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

export default router;