export default async ({ app }) => {
  app.store.watch(state => state.auth.token, (newAccessToken) => {
    if (newAccessToken == null) {
      delete app.$axios.defaults.headers.common['Authorization']
    } else {
      app.$axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
    }
  }, {immediate: true})
}