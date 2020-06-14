
import endpoints from '../endpoints'
import axios from 'axios'

export default class ProductService {
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

  async getProducts() {
    return await this.axios.$get('/product/products')
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
