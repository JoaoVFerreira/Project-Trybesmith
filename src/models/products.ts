import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IProducts, INewProduct } from '../interface/products';

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

  public async newProduct(product: IProducts): Promise<INewProduct> {
    const { name, amount } = product;

    const [rows] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    
    const { insertId } = rows;

    return {
      item: {
        id: insertId,
        name,
        amount,
      },
    };
  }
}