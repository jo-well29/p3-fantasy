'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      expertise: {
        type: Sequelize.STRING
      },
      userId: {
<<<<<<< HEAD
        type: Sequelize.INTEGER,
=======
        type: Sequelize.INTEGER
>>>>>>> 55e8496e974a100f44a8ae360d0da4a5d96ec956
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
    return queryInterface.dropTable('Coders');
  }
};