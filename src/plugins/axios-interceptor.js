export default ({ $axios, store }) => {
  if (process.server) {
    return
  }

  $axios.interceptors.request.use(request => {
    // Get token from auth.js store
    const token = store.state.auth.token

    // Update token axios header
    if (token) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete request.headers.common['Authorization']
    }
    return request
  })
}