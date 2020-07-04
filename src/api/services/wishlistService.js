
import endpoints from '../endpoints'

export default class WishlistService {
  constructor(axios) {
    this.axios = axios
  }

  async getWishlist() {
    return await this.axios.$get(endpoints.wishlist.getWishlist)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  async saveWishlistProduct(wishlistItem) {
    return await this.axios.$post(endpoints.wishlist.saveWishlistProduct, wishlistItem)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }

  async saveWishlist(wishlistItems) {
    return await this.axios.$post(endpoints.wishlist.saveWishlist, wishlistItems)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }

  async deleteWishlistProduct(productId) {
    return await this.axios.$delete(endpoints.wishlist.deleteWishlistProduct, {
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
