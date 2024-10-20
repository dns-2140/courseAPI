'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Booking = sequelize.define(
  'Booking',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', // Adjust based on your User model name
        key: 'id',
      },
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Schedule', // Adjust based on your Schedule model name
        key: 'id',
      },
    },
    bookingDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('confirmed', 'cancelled'),
      defaultValue: 'confirmed',
    },
  },
  {
    timestamps: true,
  }
);

Booking.associate = (models) => {
  Booking.belongsTo(models.User, { foreignKey: 'userId' });
  Booking.belongsTo(models.Schedule, { foreignKey: 'scheduleId' });
};

module.exports = Booking;
