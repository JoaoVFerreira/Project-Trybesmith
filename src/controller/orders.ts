import { Response, Request, NextFunction } from 'express';
import OrdersService from '../service/orders';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  getAllOrders = async (_req: Request, res: Response, next: NextFunction)
  :Promise<Response | void> => {
    try {
      const orders = await this.ordersService.getAllOrders();
      return res.status(200).json(orders);
    } catch (e) {
      next(e);
    }
  };
}