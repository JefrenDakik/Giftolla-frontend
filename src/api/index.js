import AuthService from './services/authService'
import ProductService from './services/productService'
import CartService from './services/cartService'
import StaticService from './services/staticService'
import AddressService from './services/addressService'
import WishlistService from './services/wishlistService'
import OrderService from './services/orderService'

export default class Api {
  constructor(axios) {
    this.axios = axios
    this.authService = new AuthService(this.axios)
    this.productService = new ProductService(this.axios)
    this.cartService = new CartService(this.axios)
    this.staticService = new StaticService(this.axios)
    this.addressService = new AddressService(this.axios)
    this.wishlistService = new WishlistService(this.axios)
    this.orderService = new OrderService(this.axios)
  }
}
