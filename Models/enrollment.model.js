import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Enrollment', {

    // Custom foreign keys for the many-to-many relationship
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Referencing the User model
        key: 'id',
      },
      allowNull: false,
    },
    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Courses', // Referencing the Course model
        key: 'id',
      },
      allowNull: false,
    }
  });
};
