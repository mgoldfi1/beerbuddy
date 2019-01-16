'use strict';
module.exports = (sequelize, DataTypes) => {
  const BeerRatings = sequelize.define('BeerRatings', {
    beerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  BeerRatings.associate = function(models) {
    // associations can be defined here
    models.User.belongsToMany(models.Beer, { through: BeerRatings, as: 'user', foreignKey: 'userId'})
    models.Beer.belongsToMany(models.User, { through: BeerRatings, as: 'beer', foreignKey: 'beerId'})
  };
  return BeerRatings;
};