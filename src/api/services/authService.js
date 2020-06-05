
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
}
