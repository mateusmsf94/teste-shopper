import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Product extends Model {
  public code!: number;
  public name!: string;
  public cost_price!: number;
  public sales_price!: number;
}

Product.init(
  {
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
  },
  {
    sequelize: db,
    tableName: 'products',
    timestamps: false,
  }
);