export const state = () => ({
  name: null,
  token: null,
  email: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    this.$cookies.set('jwt', token)
    if (process.client) {
      localStorage.setItem("token", token)
    }
  },
  setEmail(state, email) {
    state.email = email
    this.$cookies.set('email', email)
    if (process.client) {
      localStorage.setItem('email', email)
    }
  },
  setName(state, name) {
    state.name = name
    this.$cookies.set('name', name)
    if (process.client) {
      localStorage.setItem('name', name)
    }
  },
  clearAuthData(state) {
    this.$cookies.removeAll()
    state.token = null
    state.email = null
    state.name = null
    if(process.client) {
      localStorage.removeItem("token")
      localStorage.removeItem('email')
      localStorage.removeItem('name')
    }
  },
}

export const actions = {
  async signIn(vuexContext, authData) {
    try {
      const { email, password } = authData 
      const customerData = await this.$api.authService.signIn(email, password)

      if (customerData) {
        vuexContext.commit('clearAuthData')
        vuexContext.commit("setToken", customerData.token)
        vuexContext.commit('setEmail', customerData.customer.email)
        vuexContext.commit('setName', customerData.customer.name)

        await this.dispatch('wishlist/saveWishlist')
        await this.dispatch('cart/uploadCart')
        
        await this.dispatch('address/clearAddresses')
        this.$nuxtClientInit()
      }

      return customerData
    } catch (error) {
      vuexContext.commit('clearAuthData')
      console.log(error)
    }
  },
  async signUp(vuexContext, authData) {
    try {
      const { name, email, password, confirmPassword } = authData
      const customerData = await this.$api.authService.signUp(
        name,
        email,
        password,
        confirmPassword
      )
      
      if (customerData) {
        vuexContext.commit("setToken", customerData.token)
        vuexContext.commit('setEmail', customerData.customer.email)
        vuexContext.commit('setName', customerData.customer.name)

        await this.dispatch('address/clearAddresses')
        await this.dispatch('order/clearOrder')

        await this.dispatch('wishlist/saveWishlist')
        await this.dispatch('cart/uploadCart')
      }

      return customerData
    } catch (error) {
      console.log(error)
    }
  },
  async loginWithFacebook(vuexContext, user) {
    try {
      const { name, email, id } = user
      const customerData = await this.$api.authService.loginWithFacebook(name, email, id)
      
      if (customerData) {
        vuexContext.commit('clearAuthData')
        vuexContext.commit("setToken", customerData.token)
        vuexContext.commit('setEmail', customerData.customer.email)
        vuexContext.commit('setName', customerData.customer.name)

        await this.dispatch('wishlist/saveWishlist')
        await this.dispatch('cart/uploadCart')
        
        await this.dispatch('address/clearAddresses')
        await this.dispatch('order/clearOrder')
        this.$nuxtClientInit()
      }

      return customerData
      // login will be handled in auth plugin
    } catch (error) {
      console.log(error)
    }
  },
  //check if token alredy exists in local storage and in cookie on server
  async initAuth(vuexContext, req) {
    let token, name, email
    if(req) {
      if(!req.headers.cookie) {
        return
      }

      token = this.$cookies.get('jwt')
      if(!token) {
        return
      }

      email = this.$cookies.get('email')
      if(!email) {
        return
      }

      name = this.$cookies.get('name')
      if(!name) {
        return
      }

    } else {
      token = localStorage.getItem("token")
      name = localStorage.getItem("name")
      email = localStorage.getItem("email")
    }

    if(token) 
      vuexContext.commit('setToken', token)
    if(email)
      vuexContext.commit('setEmail', email)
    if(name)
      vuexContext.commit('setName', name)
  },
  async logout(vuexContext) {
    this.$auth.logout()

    vuexContext.commit("clearAuthData")
    await this.dispatch('address/clearAddresses')
    this.$router.push({ name: 'index' })
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.token != null
  },
  getUserName(state) {
    return state.name
  },
  getEmail(state) {
    return state.email
  }
}
