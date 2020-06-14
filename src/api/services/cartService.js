
import endpoints from '../endpoints'
import axios from 'axios'

export default class CartService {
  constructor(axios) {
    this.axios = axios
  }

  // async uploadProduct(image) {
  //   return await this.axios.$post(endpoints.product.uploadProduct, image, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //   })
  // }

  async saveCart(cart) {
    // return await this.axios.$post('/cart/save')
    //   .then(data => {
    //     return data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
