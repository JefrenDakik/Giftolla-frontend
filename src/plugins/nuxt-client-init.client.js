export default async (context, inject) => {
  const nuxtClientInit = async () => {
    await context.store.dispatch('auth/initAuth')
    await context.store.dispatch('wishlist/initWishlist')
    await context.store.dispatch('cart/initCart')
    await context.store.dispatch('static/getCountries')

    const isAuth = context.store.getters['auth/isAuthenticated']
    if (isAuth) {
      await context.store.dispatch('address/getAddresses')
    }
  }

  await nuxtClientInit()

  //inject the function to use it when the user login
  inject('nuxtClientInit', nuxtClientInit)
  
}