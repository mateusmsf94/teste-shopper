import { Pool, RowDataPacket } from 'mysql2/promise';
import { Product, Pack } from '../interfaces';

export default class ProductService {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async getAll(): Promise<Product[] | null> {
    const [products] = await this.pool.execute('SELECT * FROM products WHERE code <= 999');
    return products as Product[]; 
  }

  public async getPackDetails(): Promise<Pack[] | null> {
    const [packs] = await this.pool.execute('SELECT pack_id, product_id, qty FROM packs');
    return packs as Pack[]; 
  }

  public async getPacksWithDetails(): Promise<{ pack_id: number; product_names: string; total_price: number }[]> {
    try {
      const [packsWithDetails] = await this.pool.execute(`
        SELECT 
          p.pack_id, 
          GROUP_CONCAT(pr.name) AS product_names,
          SUM(pr.sales_price * p.qty) AS total_price
        FROM packs AS p
        JOIN products AS pr ON p.product_id = pr.code
        GROUP BY p.pack_id
      `);

      return packsWithDetails as { pack_id: number; product_names: string; total_price: number }[]; // Type assertion
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async updateProductPrice(code: number, newPrice: number): Promise<void> {
    try {
      await this.pool.execute('UPDATE products SET sales_price = ? WHERE code = ?', [newPrice, code]);
    } catch (error) {
      console.error('Error updating product price:', error);
      throw error;
    }
  }
  
}
