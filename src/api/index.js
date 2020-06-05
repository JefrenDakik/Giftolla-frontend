import AuthService from './services/authService'

export default class Api {
  constructor(axios) {
    this.axios = axios
    this.authService = new AuthService(this.axios)
  }
}
