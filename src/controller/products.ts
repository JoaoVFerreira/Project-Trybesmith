import { Response, Request, NextFunction } from 'express';
import IProducts from '../interface/products';
import ProductsService from '../service/products';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  getAllProducts = async (_req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    try {
      const products: IProducts[] = await this.productsService.getAllProducts();
      return res.status(200).json(products);
    } catch (e) {
      next(e);
    }
  };
}