// import LogRocketPosts from '~/Services/LogRocketPosts'

export default async function ({ from, store }) {
  const isInitialPageLoad = !from
  if (isInitialPageLoad) {
    try {
      const query = {}
      query.count = 5
      query.page = 1
      await store.dispatch('post/getPosts', query)
      await store.dispatch('post/getWorldPosts')
    } catch (error) {}
  }
}
