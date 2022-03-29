export interface IProducts {
  id?: number,
  name: string,
  amount: string,
  orderId?: number | null
}

export interface INewProduct {
  item: {
    id: number,
    name: string,
    amount: string
  }
}
