import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('products', {
      code: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cost_price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
      },
      sales_price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('products');
  },
};
