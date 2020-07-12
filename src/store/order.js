export const state = () => ({
  selectedAddress: null,
  selectedPaymentCard: null,
  shippingCost: 7,
  orders: [],
})

export const mutations = {
  SET_SELECTED_ADDRESS(state, address) {
    state.selectedAddress = address
  },
  CLEAR_ORDER(state) {
    state.orders = []
    state.selectedPaymentCard = null
    state.selectedAddress = null
  },
  SET_ORDERS(state, orders) {
    state.orders = orders
  }
}

export const actions = {
  async initOrder(vuexContext) {
    try {
      const isAuth = vuexContext.rootGetters['authentication/isAuthenticated']
      if(isAuth) {
        const orderItems = await this.$api.orderService.getOrders()

        const orders = await vuexContext.dispatch('resolveOrders', orderItems)
        vuexContext.commit('SET_ORDERS', orders)
      } 
    } catch (error) {
      console.log(error)
    }
  },
  async resolveOrders(vuexContext, orderItems) {
    const orders = []

    orderItems.forEach(async orderItem => {
      const order = await vuexContext.dispatch('resolveOrderItem', orderItem)
      orders.push(order)
    })

    return orders
  },
  async resolveOrderItem(vuexContext, orderItem) {
    const orderProducts = []
    
    orderItem.products.forEach(productItem => {
      const product = vuexContext.rootGetters['product/getProductAndPickedColorById'](productItem.productId)
      
      const orderProduct = {
        productId: productItem.productId,
        name: product.name,
        images: product.images,
        pickedColor: product.pickedColor,
        price: productItem.price,
        quantity: productItem.quantity,
      }
      orderProducts.push(orderProduct)
    })

    orderItem.products = orderProducts

    return orderItem
  },
  setSelectedAddress(vuexContext, address) {
    vuexContext.commit('SET_SELECTED_ADDRESS', address)
  },
  clearOrder(vuexContext) {
    vuexContext.commit('CLEAR_ORDER')
  }
}

export const getters = {
  getSelectedAddress(state) {
    return state.selectedAddress
  },
  getShippingCost(state) {
    return state.shippingCost
  },
  getOrders(state) {
    return state.orders
  }
}