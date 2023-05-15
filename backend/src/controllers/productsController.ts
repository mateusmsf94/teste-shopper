import { Request, Response } from 'express';
import ProductService from '../services/productsService';

export default class ProductController {
  private _productService: ProductService;

  constructor(productService: ProductService) {
    this._productService = productService;
  }

  public getAllProducts = async (req: Request, res: Response): Promise<void | Response> => {
    const products = await this._productService.getAll();
    return res.status(200).json(products);
  }

  public getPackDetails = async (req: Request, res: Response): Promise<void | Response> => {
    const packDetails = await this._productService.getPackDetails();
    return res.status(200).json(packDetails);
  }
}