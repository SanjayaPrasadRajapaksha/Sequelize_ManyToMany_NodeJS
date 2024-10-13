import enrollmentService from '../Services/enrollment.service.js';

const enrollmentController = {
  async enrollUserInCourse(req, res) {
    try {
      const { userId, courseId } = req.body;
      const enrollment = await enrollmentService.enrollUserInCourse(userId, courseId);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getUserEnrollments(req, res) {
    try {
      const { userId } = req.params;
      const enrollments = await enrollmentService.getUserEnrollments(userId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getCourseEnrollments(req, res) {
    try {
      const { courseId } = req.params;
      const enrollments = await enrollmentService.getCourseEnrollments(courseId);
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async removeEnrollmentByUserId(req, res) {
    try {
      const { userId } = req.params;
      await enrollmentService.removeEnrollmentByUserId(userId);
      res.json({ message: 'Enrollment removed successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async removeEnrollmentByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      await enrollmentService.removeEnrollmentByCourseId(courseId);
      res.json({ message: 'Enrollment removed successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getAllEnrollments(req, res) {
    const courses = await enrollmentService.getAllEnrollments();
    res.json(courses);
  },
};

export default enrollmentController;
