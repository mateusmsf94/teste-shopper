import { Router } from "express";
import ProductService from "../services/productsService";
import Product from "../database/models/productsModel";
import ProductController from "../controllers/productsController";
import Pack from "../database/models/packModel";

const productService = new ProductService(Product, Pack);
const productController = new ProductController(productService);

const priceUpdaterRoute = Router();

priceUpdaterRoute.get('/', productController.getPackDetails);

export default priceUpdaterRoute