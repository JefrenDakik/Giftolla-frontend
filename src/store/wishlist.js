import _ from 'lodash'

export const state = () => ({
  wishlist: [],
})

export const mutations = {
  SET_WISHLIST_PRODUCT(state, wishlistProduct) {
    const index = _.findIndex(state.wishlist, function(item) {
      return item.pickedColor.productId == wishlistProduct.pickedColor.productId
    })

    // product is found so update it
    if(index != -1) {
      state.wishlist[index] = wishlistProduct
    } else {
      state.wishlist.push(wishlistProduct)
    }

    localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
  },
  REMOVE_WISHLIST_PRODUCT(state, productId) {
    const index = _.findIndex(state.wishlist, function(wishlistItem) {
      return wishlistItem.pickedColor.productId == productId
    })
    state.wishlist.splice(index, 1)

    localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
  },
  SET_WISHLIST(state, wishlist) {
    state.wishlist = wishlist
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
  },
}

export const actions = {
  async initWishlist(vuexContext, req) {
    try {
      let wishlist = []
        
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        const data = await this.$api.wishlistService.getWishlist()

        wishlist = await vuexContext.dispatch('resolveWishlist', data)
        vuexContext.commit('SET_WISHLIST', wishlist)
      } else {
        const item = localStorage.getItem("wishlist")
        if(item){
          vuexContext.commit('SET_WISHLIST', JSON.parse(item))
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  },
  async saveWishlist(vuexContext) {
    try {
      const wishlistItems = []

      vuexContext.state.wishlist.forEach(wishlistProduct => {
        const wishlistItem = {
          productId: wishlistProduct.productId,
          checked: wishlistProduct.checked,
          quantity: wishlistProduct.quantity,
        }

        wishlistItems.push(wishlistItem)
      })

      this.$api.wishlistService.saveWishlist(wishlistItems)
    } catch (error) {
      console.log(error)
    }
  },
  async saveWishlistProduct(vuexContext, wishlistItem) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        await this.$api.wishlistService.saveWishlistProduct(wishlistItem)
      }
      const wishlistProduct = await vuexContext.dispatch('resolveWishlistItem', wishlistItem)
      vuexContext.commit('SET_WISHLIST_PRODUCT', wishlistProduct)
      
    } catch (error) {
      console.log(error)
    }
  },
  async removeProductFromWishlist(vuexContext, productId) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        await this.$api.wishlistService.deleteWishlistProduct(productId)
      }
      vuexContext.commit('REMOVE_WISHLIST_PRODUCT', productId)
    } catch (error) {
      console.log(error)
    }
  },
  async resolveWishlist(vuexContext, data) {
    const wishlist = []

    data.forEach(async wishlistItem => {
      const wishlistProduct = await vuexContext.dispatch('resolveWishlistItem', wishlistItem)
      wishlist.push(wishlistProduct)
    })

    return wishlist
  },
  async resolveWishlistItem(vuexContext, wishlistItem) {
    const product = vuexContext.rootGetters['product/getProductAndPickedColorById'](wishlistItem.productId)

    const wishlistProduct = {
      productId: wishlistItem.productId,
      name: product.name,
      images: product.images,
      pickedColor: product.pickedColor,
      price: product.pickedColor.salePrice == 0 ? product.price : product.pickedColor.salePrice,
      quantity: wishlistItem.quantity,
      checked: wishlistItem.checked,
    }

    return wishlistProduct
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