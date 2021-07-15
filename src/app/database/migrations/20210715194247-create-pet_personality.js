'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pets_personalities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'pets', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelite: 'CASCADE'
      },
      personality_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'personalities', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelite: 'CASCADE'
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
    return queryInterface.dropTable('pets_personalities');
  }
};
