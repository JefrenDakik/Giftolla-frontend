import _ from 'lodash'

export const state = () => ({
  cart: [],
})

export const mutations = {
  REMOVE_CART_PRODUCT(state, productId) {
    const index = _.findIndex(state.cart, function(cartItem) {
      return cartItem.pickedColor.productId == productId
    })

    if (index != -1) {
      state.cart.splice(index, 1)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }
  },
  SET_CART_PRODUCT(state, cartProduct) {
    const index = _.findIndex(state.cart, function(item) {
      return item.pickedColor.productId == cartProduct.pickedColor.productId
    })

    // product is found so update it else push it
    if(index != -1) {
      state.cart[index] = cartProduct
    } else {
      state.cart.push(cartProduct)
    }

    localStorage.setItem("cart", JSON.stringify(state.cart))
  },
  SET_CART(state, cart) {
    state.cart = cart
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }
}

export const actions = {
  async initCart(vuexContext) {
    try {
      let cart = []

      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        const cartItems = await this.$api.cartService.getCart()

        cart = await vuexContext.dispatch('resolveCart', cartItems)
        vuexContext.commit('SET_CART', cart)
      } else {
        const item = localStorage.getItem("cart")
        if(item){
          vuexContext.commit('SET_CART', JSON.parse(item))
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async uploadCart(vuexContext) {
    try {
      const cartItems = []

      vuexContext.state.cart.forEach(cartProduct => {
        const cartItem = {
          productId: cartProduct.productId,
          quantity: cartProduct.quantity,
        }
        cartItems.push(cartItem)
      })

      await vuexContext.dispatch('saveCart', cartItems)
    } catch (error) {
      console.log(error)
    }
  },
  async saveCart(vuexContext, cartItems) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        await this.$api.cartService.saveToCart(cartItems)
      }
      const cart = await vuexContext.dispatch('resolveCart', cartItems)
      vuexContext.commit('SET_CART', cart)

    } catch (error) {
      console.log(error)
    }
  },
  async saveCartProduct(vuexContext, cartItem) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        await this.$api.cartService.saveToCart([cartItem])
      }
      const cartProduct = await vuexContext.dispatch('resolveCartItem', cartItem)
      vuexContext.commit('SET_CART_PRODUCT', cartProduct)
      
    } catch (error) {
      console.log(error)
    }
  },
  async removeCartProduct(vuexContext, productId) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        await this.$api.cartService.deleteCartProduct(productId)
      }
      vuexContext.commit('REMOVE_CART_PRODUCT', productId)
    } catch (error) {
      console.log(error)
    }
  },
  async resolveCart(vuexContext, cartItems) {
    const cart = []

    cartItems.forEach(async cartItem => {
      const cartProduct = await vuexContext.dispatch('resolveCartItem', cartItem)
      cart.push(cartProduct)
    })

    return cart
  },
  async resolveCartItem(vuexContext, cartItem) {
    const product = vuexContext.rootGetters['product/getProductAndPickedColorById'](cartItem.productId)

    const cartProduct = {
      productId: cartItem.productId,
      name: product.name,
      images: product.images,
      pickedColor: product.pickedColor,
      price: product.pickedColor.salePrice == 0 ? product.price : product.pickedColor.salePrice,
      quantity: cartItem.quantity,
    }

    return cartProduct
  }
}

export const getters = {
  getCart(state) {
    return state.cart
  }
}