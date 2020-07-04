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
  }
}

export const actions = {
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
  }
}