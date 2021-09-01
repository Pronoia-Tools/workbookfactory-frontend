export default function ({ app, redirect, route }) {
  // if user not authenticated
  // console.log('app.store', app.store.state.auth, { appp: app.$cookies })
  const cookies = app.$cookies
  const vuex = cookies.get('vuex')
  const { isLoggedIn } = vuex?.auth ?? {}

  // Get authorizations for matched meta in routes
  if (route.meta[0].publicRoute) {
    return null
  } else if (process.server && !isLoggedIn) {
    return redirect('/login')
  }
}
