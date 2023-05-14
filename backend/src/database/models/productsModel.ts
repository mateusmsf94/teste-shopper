import { Model, DataTypes } from "sequelize";
import db from '.';

export default class Product extends Model {
  declare code: number;
  declare name: string;
  declare cost_price: number;
  declare sales_price: number;
}

Product.init(
  {
    code: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
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
    tableName: "products",
  }
);
