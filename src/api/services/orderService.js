
import endpoints from '../endpoints'

export default class OrderService {
  constructor(axios) {
    this.axios = axios
  }

  async getOrders() {
    return [
      {
        orderId: 1,
        orderDate: new Date('2020-06-29T13:29:50.975Z'),
        status: 'Dispatched',
        shippingCost: 7,
        products: [
          {
            productId: 1,
            quantity: 2,
            price: 25,
          },
          {
            productId: 2,
            quantity: 3,
            price: 25,
          }
        ],
      },
      {
        orderId: 2,
        orderDate: new Date('2020-06-29T12:29:50.975Z'),
        status: 'Delivered',
        shippingCost: 7,
        products: [
          {
            productId: 3,
            quantity: 2,
            price: 25,
          },
          {
            productId: 4,
            quantity: 3,
            price: 25,
          }
        ]
      }
    ]
  }

}
