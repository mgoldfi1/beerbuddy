'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    year: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    logo: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    openToPublic: DataTypes.STRING

  }, {});
  Brewery.associate = function(models) {
    Brewery.hasMany(models.Beer, {as: 'beers'})
  };
  return Brewery;
};
