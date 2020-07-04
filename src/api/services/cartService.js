
import endpoints from '../endpoints'

export default class CartService {
  constructor(axios) {
    this.axios = axios
  }

  async saveToCart(cartItems) {
    return await this.axios.$post(endpoints.cart.saveCart, cartItems)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }

  async getCart() {
    return await this.axios.$get(endpoints.cart.getCart)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }

  async deleteCartProduct(productId) {
    return await this.axios.$delete(endpoints.cart.deleteCartProduct, {
      data: {
          productId
        }
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
