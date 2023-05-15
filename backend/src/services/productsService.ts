import { ModelStatic } from "sequelize";
import Pack from "../database/models/packModel";
import Product from "../database/models/productsModel";

export default class ProductService {
  private productModel: ModelStatic<Product>;
  private packModel: ModelStatic<Pack>;

  constructor(productModel: ModelStatic<Product>, packModel: ModelStatic<Pack>) {
    this.productModel = productModel;
    this.packModel = packModel;
  }

  public async getAll(): Promise<Product[] | null> {
    const products = await this.productModel.findAll();
    return products;
  }

  public async getPackDetails(): Promise<{ pack_id: number, product_id: number, qty: number }[] | null> {
    const packs = await this.packModel.findAll({
      attributes: ['pack_id', 'product_id', 'qty']
    });
    return packs;
  }
}