
export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    try {
      const products = await context.app.$api.productService.getProducts()
      vuexContext.commit('product/setProducts', products)

    } catch(error) {
      console.log(error)
    }
  },
}