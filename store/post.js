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
  getPosts({ commit }) {
    fetch(`${baseURl}/get_posts`)
      .then((res) => res.json())
      .then((res) => {
        const { posts } = res
        if (posts) {
          commit('setPosts', posts)
        }
      })
      .catch((error) => console.log(error))
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
