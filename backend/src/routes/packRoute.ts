import { Router } from 'express';
import ProductController from '../controllers/productsController';

const packsRouter = (productController: ProductController) => {
  const router = Router();

  router.get('/', productController.getPacksWithDetails);

  return router;
};

export default packsRouter;