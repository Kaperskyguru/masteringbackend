// import DiveJobs from '~/Services/Scrappers/dice-scrapper'
// import { jobResolver } from '~/helpers/helpers'

self.onmessage = async (e) => {
  if (e.data === 'getPosts') {
    const response = await fetch(`${process.env.BASE_ENDPOINT_URL}/get_posts`)
    const data = await response.json()
    self.postMessage({ type: 'setPosts', payload: data })
  }
  // commit('setPostState', ENUM.ERROR)
  // const response = await fetch(`${process.env.BASE_ENDPOINT_URL}/get_posts`)
  // const data = await response.json()
  // if (data.posts) {
  //   commit('setPosts', data.posts)
  // } else {
  //   commit('setPostState', ENUM.ERROR)
  // }
}
