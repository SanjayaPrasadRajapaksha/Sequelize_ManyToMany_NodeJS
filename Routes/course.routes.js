import { Router } from 'express';
import courseController from '../Controllers/course.controller.js';

const router = Router();

router.post('/courses', courseController.createCourse);
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id', courseController.getCourseById);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

export default router;
