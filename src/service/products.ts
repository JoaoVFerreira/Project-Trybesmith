import ProductsModel from '../models/products';
import connection from '../models/connection';
import { IProducts, INewProduct } from '../interface/products';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<IProducts[]> {
    return this.model.getAllProducts();
  }

  public async newProduct(book: IProducts): Promise<INewProduct> {
    return this.model.newProduct(book);
  }
}