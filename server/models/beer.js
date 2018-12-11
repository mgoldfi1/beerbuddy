'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING
  }, {});
  Beer.associate = (models) => {
    // associations can be defined here
  };
  return Beer;
};