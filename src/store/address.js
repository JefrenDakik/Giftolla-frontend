import img1 from "@/static/products/img1.jpeg"

export const state = () => ({
  addresses: [],
 
})

export const mutations = {
  setAddresses(state, addresses) {
    state.addresses = addresses
  },
  CLEAR_ADDRESSES(state) {
    state.addresses = []
  }
}

export const actions = {
  async saveAddress(vuexContext, address) {
    try {
      const data = await this.$api.addressService.saveAddress(address)

      if (data) {
        await vuexContext.dispatch('getAddresses')
      }

      return data
    } catch(error) {
      console.log(error)
    }
  },
  async removeAddress(vuexContext, addressId) {
    try {
      const isAuth = vuexContext.rootGetters['auth/isAuthenticated']
      if(isAuth) {
        const resp = await this.$api.addressService.deleteAddress(addressId)
        
        if(resp) {
          await vuexContext.dispatch('getAddresses')
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async getAddresses(vuexContext) {
    try {
      const addresses = await this.$api.addressService.getCustomerAddresses()

      if(addresses) {
        vuexContext.commit('setAddresses', addresses)
      }
    } catch (error) {
      console.log(error)
    }
  },
  async clearAddresses(vuexContext) {
    console.log('clear addresses')
    vuexContext.commit('CLEAR_ADDRESSES')
  }
}

export const getters = {
  getAddresses(state) {
    return state.addresses
  }
}