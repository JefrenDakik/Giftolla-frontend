
import endpoints from '../endpoints'

export default class AuthService {
  constructor(axios) {
    this.axios = axios
  }

  async signIn(email, password) {
    return await this.axios.$post(endpoints.customer.signIn, {email, password})
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  }

  async signUp(name, email, password, confirmPassword) {
    return await this.axios.$post(endpoints.customer.signUp, {
      name,
      email,
      password,
      confirmPassword,
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  }

  async loginWithFacebook(name, email, facebookId) {
    return await this.axios.$post(endpoints.customer.loginWithFacebook, {
      name,
      email,
      facebookId,
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
