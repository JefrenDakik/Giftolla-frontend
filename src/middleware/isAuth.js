export default async function (context) {
  await context.store.dispatch('authentication/initAuth', context.req)
  //check if user is authenticated
  if(!context.store.getters['authentication/isAuthenticated']) {
    context.redirect('/login')
  }
}