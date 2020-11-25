'use strict'
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      title: DataTypes.TEXT,
      date: DataTypes.STRING,
      description: DataTypes.TEXT,
      website: DataTypes.TEXT,
      url: DataTypes.TEXT,
      company: DataTypes.TEXT,
    },
    {
      underscored: false,
      timestamps: true,
      freezeTableName: true,
      tableName: 'jobs',
    }
  )
  return Profile
}
