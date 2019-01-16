'use strict';
module.exports = (sequelize, DataTypes) => {
  const BeerFavorites = sequelize.define('BeerFavorites', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  BeerFavorites.associate = function(models) {
    // associations can be defined here
  };
  return BeerFavorites;
};