export default function ({ redirect, route, store }) {
  const isProd = process.env.NODE_ENV === 'production'

  const isMaintenance = process.env.MAINTENANCE_MODE || false

  const { isCounterEnded } = store.state
  if (isProd) {
    if (isMaintenance && !isCounterEnded) {
      return redirect('/maintenance')
    }

    if ((isCounterEnded || !isMaintenance) && route.path === '/maintenance') {
      return redirect('/')
    }
  }
}
