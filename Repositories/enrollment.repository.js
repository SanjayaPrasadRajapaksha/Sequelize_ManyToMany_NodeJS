import db from '../Models/index.js';

const enrollmentRepository = {
  async createEnrollment(userId, courseId) {
    return await db.Enrollment.create({
      userId: userId,
      courseId: courseId
    });
  },
  async findAllEnrollments() {
    return await db.Enrollment.findAll();
  },
  async findEnrollmentByUserId(userId) {
    return await db.Enrollment.findAll({ where: { UserId: userId } });
  },

  async findEnrollmentByCourseId(courseId) {
    return await db.Enrollment.findAll({ where: { CourseId: courseId } });
  },

  async deleteEnrollmentByUserId(userId) {
    return await db.Enrollment.destroy({ where: { userId: userId } });
  },
  async deleteEnrollmentCourseId(courseId) {
    return await db.Enrollment.destroy({ where: { courseId: courseId } });
  }
};

export default enrollmentRepository;
