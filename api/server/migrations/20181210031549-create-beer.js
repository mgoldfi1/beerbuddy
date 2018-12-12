'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      abv: {
        type: Sequelize.FLOAT
      },
      ibu: {
        type: Sequelize.FLOAT
      },
      desc: {
        type: Sequelize.TEXT
      },
      label: {
        type: Sequelize.STRING
      },
      BreweryId: {
        type: Sequelize.INTEGER
      },
      style: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beers');
  }
};