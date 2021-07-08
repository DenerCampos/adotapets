'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
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
      street: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      number: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DataTypes.INTEGER,
      },
      district: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      zipcode: {
        type: Sequelize.DataTypes.STRING,
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
    return queryInterface.dropTable('addresses');
  }
};
