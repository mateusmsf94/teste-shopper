import { Model, DataTypes } from 'sequelize';
import db from '.';
import Product from './productsModel';

export default class Pack extends Model {
  public id!: number;
  public pack_id!: number;
  public product_id!: number;
  public qty!: number;
}

Pack.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    pack_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: 'code',
      },
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: 'code',
      },
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'packs',
    timestamps: false,
  }
);