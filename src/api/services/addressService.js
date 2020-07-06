
import endpoints from '../endpoints'

export default class AddressService {
  constructor(axios) {
    this.axios = axios
  }

  async getCustomerAddresses() {
    return await this.axios.$get(endpoints.address.getAddresses)
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }

  async saveAddress(address) {
    return await this.axios.$post(endpoints.address.saveAddress, address)
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  }

  async deleteAddress(addressId) {
    return await this.axios.$delete(endpoints.address.deleteAddress, {
      data: {
          addressId
        }
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
