'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    ibu: DataTypes.FLOAT,
    desc: DataTypes.TEXT,
    label: DataTypes.STRING,
    breweryId: DataTypes.INTEGER,
  }, {});
  Beer.associate = (models) => {
    // associations can be defined here
    Beer.belongsTo(models.Brewery)
  };
  return Beer;
};