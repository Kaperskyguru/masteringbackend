export default async function ({ store, from, isServer }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      await store.dispatch('post/getPosts')
      await store.dispatch('stream/getCompletedStreams')
      await store.dispatch('stream/getUpcomingStreams')
      if (isServer) {
        await store.dispatch('job/getDiveJobs')
      }
    } catch (error) {}
  }
}
