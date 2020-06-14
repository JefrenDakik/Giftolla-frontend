import _ from 'lodash'

export const state = () => ({
  wishlist: [],
})

export const mutations = {
  addProductToWishlist(state, product) {
    const wishlistItem = _.find(state.wishlist, { 'productId': product.pickedColor.productId })

    if(!wishlistItem) {
      const newWishListItem = {
        productId: product.pickedColor.productId,
        name: product.name,
        images: product.images,
        pickedColor: product.pickedColor,
        price: product.pickedColor.salePrice == 0 ? product.price : product.pickedColor.salePrice,
        quantity: product.quantity,
        checked: false,
    }

    state.wishlist.push(newWishListItem)
    }
  },
  removeProductFromWishlist(state, productId) {
    const index = _.findIndex(state.wishlist, function(wishlistItem) {
      return wishlistItem.pickedColor.productId == productId
    })
    state.wishlist.splice(index, 1)
  },
  checkProduct(state, { productId, checked }) {
    const product = _.find(state.wishlist, { 'productId': productId})
    product.checked = checked
  }
}

export const actions = {
  async addProductToWishlist(vuexContext, product) {
    vuexContext.commit('addProductToWishlist', product)
  },
  async removeProductFromWishlist(vuexContext, productId) {
    vuexContext.commit('removeProductFromWishlist', productId)
  },
  async checkProduct(vuexContext, { productId, checked }) {
    vuexContext.commit('checkProduct', { productId, checked })
  }
}

export const getters = {
  getWishlist(state) {
    return state.wishlist
  },
  isProductInWishlist: (state) => (productId) => {
    const found = _.find(state.wishlist, { 'productId': productId})
    if(found) {
      return true
    } else {
      return false
    }
  }
}