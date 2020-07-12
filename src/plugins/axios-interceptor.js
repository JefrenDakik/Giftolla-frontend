export default ({ $auth, $axios, store }) => {
  if (process.server) {
    return
  }
  
  $axios.interceptors.request.use(request => {
    // Get token from auth.js store
    const token = store.state.authentication.token

    // Update token axios header
    if (token) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete request.headers.common['Authorization']
    }
    return request
  })
}