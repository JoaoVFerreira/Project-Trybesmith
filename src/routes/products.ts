import { Router } from 'express';

import ProductsController from '../controller/products';

import productsValidation from '../middleware/productValidation';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAllProducts);
router.post('/', productsValidation, productsController.newProuduct);

export default router;