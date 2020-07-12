export default async function({ $auth, store }) {
  $auth.onError((error, name, endpoint) => {
    console.error(name, error)
  })

  $auth.onRedirect((to, from) => {
    console.error(to)
    // you can optionally change `to` by returning a new value
  })

  $auth.$storage.watchState('loggedIn', newValue => {
  })

  if(process.client) {
    const isAuth = store.getters['authentication/isAuthenticated']
    // check if user is authenticated by facebook but not by my server
    if($auth.loggedIn && !isAuth) {
      console.log('login with facebook')
      const user = $auth.user
      await store.dispatch('authentication/loginWithFacebook', user)
    }
  }
}