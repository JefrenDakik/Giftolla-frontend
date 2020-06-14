import AuthService from './services/authService'
import ProductService from './services/productService'
import CartService from './services/cartService'

export default class Api {
  constructor(axios) {
    this.axios = axios
    this.authService = new AuthService(this.axios)
    this.productService = new ProductService(this.axios)
    this.cartService = new CartService(this.axios)
  }
}
