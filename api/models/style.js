'use strict';
module.exports = (sequelize, DataTypes) => {
  const Style = sequelize.define('Style', {
    name: DataTypes.STRING
  }, {});
  Style.associate = function(models) {
    // associations can be defined here
  };
  return Style;
};