import { Router } from 'express';

import ProductsController from '../controller/products';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAllProducts);

export default router;