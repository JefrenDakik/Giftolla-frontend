import Api from '@/api'

export default ({ app }, inject) => {
  const api = new Api(app.$axios)
  inject('api', api)
}
