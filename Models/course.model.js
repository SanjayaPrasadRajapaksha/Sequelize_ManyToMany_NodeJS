import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('Course', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

  