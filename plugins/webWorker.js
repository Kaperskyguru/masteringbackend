import JobWorker from '~/jobs.worker'

export default (context, inject) => {
  inject('worker', {
    createWorker() {
      return new JobWorker()
    },
  })
}
