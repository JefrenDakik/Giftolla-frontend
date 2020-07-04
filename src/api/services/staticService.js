
import endpoints from '../endpoints'

export default class StaticService {
  constructor(axios) {
    this.axios = axios
  }

  async getCountries() {
    return await this.axios.$get(endpoints.staticData.getCountries)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
