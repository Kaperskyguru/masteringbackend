export default function ({ redirect, route, store }) {
  const isProd = process.env.NODE_ENV === 'production'
  const isMaintenance = process.env.MAINTENANCE_MODE || false

  const { isCounterEnded } = store.state

  if (isMaintenance === true && isProd === true && isCounterEnded === false) {
    return redirect('/maintenance')
  }

  if (
    (isCounterEnded === true || isMaintenance === false || isProd === false) &&
    route.path === '/maintenance'
  ) {
    return redirect('/')
  }
}
