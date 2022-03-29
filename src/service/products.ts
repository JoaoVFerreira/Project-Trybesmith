import ProductsModel from '../models/products';
import connection from '../models/connection';
import IProducts from '../interface/products';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<IProducts[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
}