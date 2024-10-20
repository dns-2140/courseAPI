'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Schedule = sequelize.define(
  'Schedule',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Course',
        key: 'id',
      },
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

Schedule.associate = (models) => {
  Schedule.belongsTo(models.Course, { foreignKey: 'courseId' });
};

module.exports = Schedule;
