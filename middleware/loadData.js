export default async function ({ store, from }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      await store.dispatch('post/getPosts')
    } catch (error) {
      console.log(error)
    }
  }
}
