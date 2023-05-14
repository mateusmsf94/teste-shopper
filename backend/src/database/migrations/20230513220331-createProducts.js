'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      code: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cost_price: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
      },
      sales_price: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  },
};
