import { Router } from 'express';
import ProductController from '../controllers/productsController';

const productsRouter = (productController: ProductController) => {
  const router = Router();

  router.get('/', productController.getAllProducts);
  router.put('/updateProductPrice', productController.updateProductPrice);


  return router;
};

export default productsRouter;