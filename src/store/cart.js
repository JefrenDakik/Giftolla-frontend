import _ from 'lodash'

export const state = () => ({
  cart: [],
})

export const mutations = {
  addProductsToCart(state, products) {
    
    products.forEach(product => {
      const cartItem = _.find(state.cart, { 'productId': product.pickedColor.productId})
      if (cartItem) {
        cartItem.quantity++
      } else {
        const newCartItem = {
          productId: product.pickedColor.productId,
          name: product.name,
          images: product.images,
          pickedColor: product.pickedColor,
          price: product.pickedColor.salePrice == 0 ? product.price : product.pickedColor.salePrice,
          quantity: 1,
        }
        
        state.cart.push(newCartItem)
      }
    })
  },
  setCartItemQuantity(state, data) {
    const cartItem = _.find(state.cart, { 'productId': data.productId })
    cartItem.quantity = data.count
  },
  removeCartItem(state, productId) {
    const index = _.findIndex(state.cart, function(cartItem) {
      return cartItem.pickedColor.productId == productId
    })
    state.cart.splice(index, 1)
  }
}

export const actions = {
  async addProductsToCart(vuexContext, products) {
    vuexContext.commit('addProductsToCart', products)
    // console.log(vuexContext.rootGetters['auth/isAuthenticated'])
    // await this.$api.cartService.saveCart(vuexContext.getters.getCart)
  },
  async updateCartItemQuantity(vuexContext, {count, productId}) {
    vuexContext.commit('setCartItemQuantity', {count, productId})
  },
  async removeCartItem(vuexContext, productId) {
    vuexContext.commit('removeCartItem', productId)
  },
  async updateCart(vuexContext) {
    // console.log(vuexContext.getters)
  }
}

export const getters = {
  getCart(state) {
    return state.cart
  }
}