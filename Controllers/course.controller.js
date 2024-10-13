import courseService from '../Services/course.service.js';

const courseController = {
  async createCourse(req, res) {
    const course = await courseService.createCourse(req.body);
    res.json(course);
  },

  async getCourseById(req, res) {
    const course = await courseService.getCourseById(req.params.id);
    res.json(course);
  },

  async getAllCourses(req, res) {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  },

  async updateCourse(req, res) {
    await courseService.updateCourse(req.params.id, req.body);
    res.json({ message: 'Course updated successfully' });
  },

  async deleteCourse(req, res) {
    await courseService.deleteCourse(req.params.id);
    res.json({ message: 'Course deleted successfully' });
  },
};

export default courseController;
