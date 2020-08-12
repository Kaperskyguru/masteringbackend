export default function ({ redirect, route, store }) {
  const isMaintenance = process.env.NODE_ENV !== 'production'
  const { isCounterEnded } = store.state
  if (isMaintenance && isCounterEnded === false) {
    return redirect('/maintenance')
  }
  if (
    isMaintenance === false &&
    route.path === '/maintenance' &&
    isCounterEnded === true
  ) {
    return redirect('/')
  }
}
