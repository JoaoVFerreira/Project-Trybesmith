import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interface/orders';
import { IProducts } from '../interface/products';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders;',
    );
    return rows as IOrder[];
  }

  async getById(id: string | number): Promise<IProducts[]> {
    const [rows] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products WHERE orderId = ?',
      [id],
    );
    return rows as IProducts[];
  }
}