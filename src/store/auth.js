import Cookie from 'js-cookie'

export const state = () => ({
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
      } 

      return customerData
    } catch (error) {
      vuexContext.commit('clearAuthData')
      console.log(error)
    }
  },
  //check if token alredy exists in local storage and in cookie on server
  initAuth(vuexContext, req) {
    let token
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
    }

    if(token) {
      vuexContext.commit('setToken', token)
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
