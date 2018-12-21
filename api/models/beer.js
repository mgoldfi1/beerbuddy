'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    ibu: DataTypes.FLOAT,
    desc: DataTypes.TEXT,
    label: DataTypes.STRING,
    style: DataTypes.STRING
  }, {});
  Beer.associate = (models) => {
    // associations can be defined here
    Beer.belongsTo(models.Brewery, {as: 'brewery',foreignKey: 'BreweryId'})
  };
  return Beer;
};