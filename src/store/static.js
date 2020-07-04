import img1 from "@/static/products/img1.jpeg"

export const state = () => ({
  countries: [],
 
})

export const mutations = {
  setCountries(state, countries) {
    state.countries = countries
  }
}

export const actions = {
  async getCountries(vuexContext) {
    try {
      const countries = await this.$api.staticService.getCountries()

      if (countries) {
        vuexContext.commit('setCountries', countries)
      }

      return countries
    } catch(error) {
      console.log(error)
    }
  },
}

export const getters = {
  getCountryById: (state) => (id) => {
    const country = state.countries.find(country => country.id === id)
    return country
  },
  getCountries(state) {
    return state.countries
  }
}