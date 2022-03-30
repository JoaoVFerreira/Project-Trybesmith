import { Router } from 'express';

import OrdersController from '../controller/orders';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllOrders);

export default router;