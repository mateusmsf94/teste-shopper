import { Model, DataTypes } from "sequelize";
import db from '.';
import Product from "./productsModel";

export default class Pack extends Model {
  declare id: number;
  declare pack_id: number;
  declare product_id: number;
  declare qty: number;
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
        key: "code",
      },
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Product,
        key: "code",
      },
    },
    qty: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "packs",
  }
);


