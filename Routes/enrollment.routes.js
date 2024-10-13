import { Router } from 'express';
import enrollmentController from '../Controllers/enrollment.controller.js';

const router = Router();

router.post('/enrollments', enrollmentController.enrollUserInCourse);
router.get('/users/:userId/enrollments', enrollmentController.getUserEnrollments);
router.get('/courses/:courseId/enrollments', enrollmentController.getCourseEnrollments);
router.delete('/enrollmentByUserId/:userId', enrollmentController.removeEnrollmentByUserId);
router.delete('/enrollmentByCourseId/:courseId', enrollmentController.removeEnrollmentByCourseId);
router.get('/enrollments', enrollmentController.getAllEnrollments);
export default router;
