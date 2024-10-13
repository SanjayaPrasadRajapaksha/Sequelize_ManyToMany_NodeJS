import db from '../Models/index.js';

const courseRepository = {
  async createCourse(courseData) {
    return await db.Course.create(courseData);
  },

  async findCourseById(courseId) {
    return await db.Course.findOne({ where: { id: courseId } });
  },

  async findAllCourses() {
    return await db.Course.findAll();
  },

  async updateCourse(courseId, courseData) {
    return await db.Course.update(courseData, { where: { id: courseId } });
  },

  async deleteCourse(courseId) {
    return await db.Course.destroy({ where: { id: courseId } });
  }
};

export default courseRepository;
