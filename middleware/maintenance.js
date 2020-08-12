export default function ({ redirect, route, store }) {
  const isDev = process.env.NODE_ENV === 'production'
  const isMaintenance = process.env.MAINTENANCE_MODE || false

  const { isCounterEnded } = store.state

  if (isMaintenance === true || isDev === true) {
    console.log(isMaintenance, isDev, isCounterEnded)
    if (isCounterEnded === false) return redirect('/maintenance')
  }

  if (
    (isCounterEnded === true || isMaintenance === false || isDev === false) &&
    route.path === '/maintenance'
  ) {
    return redirect('/')
  }
}
