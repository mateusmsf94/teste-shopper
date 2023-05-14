import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('packs', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      pack_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'products',
          key: 'code',
        },
      },
      product_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'products',
          key: 'code',
        },
      },
      qty: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('packs');
  },
};
