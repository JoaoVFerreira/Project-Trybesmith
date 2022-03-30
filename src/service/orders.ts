import IOrder from '../interface/orders';
import connection from '../models/connection';
import OrdersModel from '../models/orders';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.model.getAllOrders();

    const formatOrders = orders.map(async (order) => {
      const products = await this.model.getById(order.id);

      const idProducts = products.map((product) => product.id);

      return {
        ...order,
        products: idProducts,
      };
    });

    const handledOrders = await Promise.all(formatOrders);
    return handledOrders as IOrder[];
  }
}