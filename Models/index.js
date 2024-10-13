import Sequelize from 'sequelize';
import dbConfig from '../Configs/db.config.js';
import UserModel from './user.model.js';
import CourseModel from './course.model.js';
import EnrollmentModel from './enrollment.model.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = dbConfig;

db.User = UserModel(db.sequelize);
db.Course = CourseModel(db.sequelize);
db.Enrollment = EnrollmentModel(db.sequelize);

db.User.belongsToMany(db.Course, {
    through: db.Enrollment,
    foreignKey: 'userId',
    otherKey: 'courseId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  db.Course.belongsToMany(db.User, {
    through: db.Enrollment,
    foreignKey: 'courseId',
    otherKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  export default db;