import img1 from "@/static/products/img1.jpeg"

export const state = () => ({
  products: [],
  productsList: [
    {
      id: 1,
      title: 'love book',
      description: 'this book allows you to save your treasured memories of your baby in this amazing bla bla bla',
      price: 12,
      img: img1,
      colors: [
        { id: 1, name: 'red', hexadecimal: '#FF0000', availability: true},
        { id: 2, name: 'blue', hexadecimal: '#0000FF', availability: false},
        { id: 3, name: 'yellow', hexadecimal: '#FFFF00', availability: true},
      ],
    },
    {
      id: 2,
      title: "Baby Book",
      description: "this book allows you to save your treasured memories of your baby in this amazing bla bla bla",
      price: 14,
      img: img1,
      colors: [
        { id: 1, name: 'red', hexadecimal: '#FF0000', availability: true},
        { id: 2, name: 'blue', hexadecimal: '#0000FF', availability: false},
        { id: 3, name: 'yellow', hexadecimal: '#FFFF00', availability: true},
      ],
    },
    {
      id: 3,
      title: "Baby Book",
      description: "this book allows you to save your treasured memories of your baby in this amazing bla bla bla",
      price: 14,
      img: img1,
      colors: [
        { id: 1, name: 'red', hexadecimal: '#FF0000', availability: true},
        { id: 2, name: 'blue', hexadecimal: '#0000FF', availability: false},
        { id: 3, name: 'yellow', hexadecimal: '#FFFF00', availability: true},
      ],
    },
    {
      id: 4,
      title: "Baby Book",
      description: "this book allows you to save your treasured memories of your baby in this amazing bla bla bla",
      price: 14,
      img: img1,
      colors: [
        { id: 1, name: 'red', hexadecimal: '#FF0000', availability: true},
        { id: 2, name: 'blue', hexadecimal: '#0000FF', availability: false},
        { id: 3, name: 'yellow', hexadecimal: '#FFFF00', availability: true},
      ],
    }
  ]
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
  getProducts(state) {
    return state.products
  }
}