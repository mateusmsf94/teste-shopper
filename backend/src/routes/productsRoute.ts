import { Router } from 'express';
import ProductController from '../controllers/productsController';

const productsRouter = (productController: ProductController) => {
  const router = Router();

  router.get('/', productController.getAllProducts);

  return router;
};

export default productsRouter;