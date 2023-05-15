import { Router } from 'express';
import ProductController from '../controllers/productsController';

const packsRouter = (productController: ProductController) => {
  const router = Router();

  router.get('/', productController.getPackDetails);

  return router;
};

export default packsRouter;