'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    beerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    models.Beer.belongsToMany(models.User, { through: Favorite, as: 'Beer', foreignKey: 'beerId'})
  };
  return Favorite;
};