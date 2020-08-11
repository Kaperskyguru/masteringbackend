export default function ({ from }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      // await store.dispatch('post/getPosts')
      // await store.dispatch('stream/getCompletedStreams')
      // await store.dispatch('stream/getUpcomingStreams')
      // if (isServer) {
      //   console.log('its here')
      //   await store.dispatch('job/getDiveJobs')
      // }
    } catch (error) {}
  }
}
