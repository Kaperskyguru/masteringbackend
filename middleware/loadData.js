export default async function ({ store, from }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      await store.dispatch('post/getPosts')
      await store.dispatch('stream/getCompletedStreams')
      await store.dispatch('stream/getUpcomingStreams')
    } catch (error) {}
  }
}
