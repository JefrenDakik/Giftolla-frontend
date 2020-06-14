import Api from '@/api'
import axios from 'axios'

export default ({ app }, inject) => {
  const api = new Api(app.$axios)
  inject('api', api)
}
