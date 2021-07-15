'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'users', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelite: 'CASCADE'
      },
      adopter_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'adopters', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelite: 'CASCADE'
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      photo: {
        type: Sequelize.DataTypes.INTEGER,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
      },
      gender: {
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        type: Sequelize.DataTypes.STRING(2000),
      },
      adopted: {
        type: Sequelize.DataTypes.BOOLEAN,
      },
      adopted_at: {
        type: Sequelize.DataTypes.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      deleted_at: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pets');
  }
};
