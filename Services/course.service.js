import courseRepository from '../Repositories/course.repository.js';

const courseService = {
  async createCourse(courseData) {
    return await courseRepository.createCourse(courseData);
  },

  async getCourseById(courseId) {
    return await courseRepository.findCourseById(courseId);
  },

  async getAllCourses() {
    return await courseRepository.findAllCourses();
  },

  async updateCourse(courseId, courseData) {
    return await courseRepository.updateCourse(courseId, courseData);
  },

  async deleteCourse(courseId) {
    return await courseRepository.deleteCourse(courseId);
  }
};

export default courseService;
