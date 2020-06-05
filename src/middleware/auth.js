export default function (context) {
  context.store.dispatch('auth/initAuth', context.req)
  //check if user is authenticated
  if(!context.store.getters['auth/isAuthenticated']) {
    context.redirect('/login')
  }
}