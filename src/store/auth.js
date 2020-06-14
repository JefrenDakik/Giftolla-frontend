import Cookie from 'js-cookie'

export const state = () => ({
  name: null,
  token: null,
  email: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    Cookie.set('jwt', token)
    if (process.client) {
      localStorage.setItem("token", token)
    }
  },
  setEmail(state, email) {
    state.email = email
    if (process.client) {
      localStorage.setItem('email', email)
    }
  },
  setName(state, name) {
    state.name = name
    if (process.client) {
      localStorage.setItem('name', name)
    }
  },
  clearAuthData(state) {
    Cookie.remove("jwt")
    state.token = null
    state.email = null
    if(process.client) {
      localStorage.removeItem("token")
      localStorage.removeItem('email')
    }
    delete this.$axios.defaults.headers.common['Authorization']
  },
}

export const actions = {
  async signIn(vuexContext, authData) {
    try {
      const { email, password } = authData 
      const customerData = await this.$api.authService.signIn(email, password)

      if (customerData) {
        vuexContext.commit("setToken", customerData.token)
        vuexContext.commit('setEmail', customerData.customer.email)
        vuexContext.commit('setName', customerData.customer.name)
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
      }

      return customerData
    } catch (error) {
      console.log(error)
    }
  },
  //check if token alredy exists in local storage and in cookie on server
  initAuth(vuexContext, req) {
    let token, name, email
    if(req) {
      if(!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="))
      if(!jwtCookie) {
        return
      }
      token = jwtCookie.split("=")[1]

    } else {
      token = localStorage.getItem("token")
      name = localStorage.getItem("name")
      email = localStorage.getItem("email")
    }

    if(token) {
      vuexContext.commit('setToken', token)
      vuexContext.commit('setEmail', email)
      vuexContext.commit('setName', name)
    }
  },
  logout(vuexContext) {
    vuexContext.commit("clearAuthData")
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
