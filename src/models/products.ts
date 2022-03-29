import { Pool, RowDataPacket } from 'mysql2/promise';
import IProducts from '../interface/products';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<IProducts[]> {
    const [rows] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');
    return rows as IProducts[];
  }
}