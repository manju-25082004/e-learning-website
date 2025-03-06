import express from 'express';
import { getCourses, getCourseById, createCourse } from '../controllers/courseController.js';

const router = express.Router();

// Get all courses
router.get('/', getCourses);

// Get course by ID
router.get('/:id', getCourseById);

// Create a new course
router.post('/', createCourse);

export default router;