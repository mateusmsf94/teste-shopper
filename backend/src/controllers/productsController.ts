import { Request, Response } from 'express';
import ProductService from '../services/productsService';
import { Product, Pack } from '../interfaces';

export default class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products: Product[] | null = await this.productService.getAll();
      res.json(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  public getPackDetails = async (req: Request, res: Response): Promise<void> => {
    try {
      const packs: Pack[] | null = await this.productService.getPackDetails();
      res.json(packs);
    } catch (error) {
      console.error('Error retrieving pack details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  public getPacksWithDetails = async (req: Request, res: Response): Promise<void> => {
    try {
      const packsWithDetails = await this.productService.getPacksWithDetails();
      res.json(packsWithDetails);
    } catch (error) {
      console.error('Error retrieving packs with details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  public updateProductPrice = async (req: Request, res: Response): Promise<void> => {
    try {
      const { productCode, newPrice } = req.body;
      await this.productService.updateProductPrice(productCode, newPrice);
      res.json({ message: 'Product price updated successfully' });
    } catch (error) {
      console.error('Error updating product price:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
}
