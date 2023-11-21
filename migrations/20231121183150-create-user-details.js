'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Users',
          key: 'id'
        }
      },
      genderId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Genders',
          key: 'id'
        }
      },
      religionId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Religions',
          key: 'id'
        }
      },
      placeOfBirth: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      job: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserDetails');
  }
};