/* eslint-disable no-unused-vars */
const baseURl = 'https://adonis-blog.000webhostapp.com/api'

export const state = () => ({
  posts: [],
})

export const getters = {}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.post = post
  },
}

export const actions = {
  async getPosts({ commit }) {
    const response = await fetch(`${baseURl}/get_posts`)
    const data = await response.json()
    if (data.posts) {
      commit('setPosts', data.posts)
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) {
    fetch(`${baseURl}/get_recent_posts/`)
      .then((res) => res.json())
      .then((res) => {
        const { posts } = res
        if (posts) {
          commit('setLatestPosts', posts)
        }
      })
      .catch((error) => console.log(error))
  },
}
