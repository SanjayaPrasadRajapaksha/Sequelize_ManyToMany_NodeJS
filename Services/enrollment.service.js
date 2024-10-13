import enrollmentRepository from '../Repositories/enrollment.repository.js';

const enrollmentService = {
  async enrollUserInCourse(userId, courseId) {
    return await enrollmentRepository.createEnrollment(userId, courseId);
  },

  async getUserEnrollments(userId) {
    return await enrollmentRepository.findEnrollmentByUserId(userId);
  },

  async getCourseEnrollments(courseId) {
    return await enrollmentRepository.findEnrollmentByCourseId(courseId);
  },

  async removeEnrollmentByUserId(userId) {
    return await enrollmentRepository.deleteEnrollmentByUserId(userId);
  },
  async removeEnrollmentByCourseId(courseId) {
    return await enrollmentRepository.deleteEnrollmentCourseId(courseId);
  },
  async getAllEnrollments() {
    return await enrollmentRepository.findAllEnrollments();
  }

};

export default enrollmentService;
