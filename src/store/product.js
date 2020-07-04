import img1 from "@/static/products/img1.jpeg"
import { pick } from "lodash"

export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, products) {
    products.forEach(product => {
      product.images.forEach(image => {
        image.src = process.env.baseUrl + '/' + image.src
      })
    })

    state.products = products
  }
}

export const actions = {
  async getProducts() {
    try {
      const resp = await this.$api.productService.getProducts()
      
      return resp
    } catch(error) {
      console.log(error)
    }
  },
}

export const getters = {
  getProductById: (state) => (id) => {
    const product = state.products.find(product => product.id === id)
    return product
  },
  getProductAndPickedColorById: (state) => (productId) => {
    const product = _.find(state.products, product => {
      return _.some(product.colors, color => {
        return color.productId == productId
      } )
    })

    const pickedColor = _.find(product.colors, color => {
      return color.productId == productId
    })
    return {
      ...product,
      pickedColor
    }
  },
  getProducts(state) {
    return state.products
  }
}