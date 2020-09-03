/* eslint-disable no-unused-vars */
// const baseURl = 'https://adonis-blog.000webhostapp.com/api'

import ENUM from '@/enums'
// const WebActions = new Worker('@/posts.worker.js', { type: 'module' })

export const state = () => ({
  postState: ENUM.INIT,
  posts: [],
})

export const getters = {
  getPost: (state) => (id, slug) => {
    return state.posts.find((post) => {
      if (post.id === id && post.slug === slug) {
        return post
      }
    })
  },

  getPostsByAuthor: (state) => (author) => {
    return state.posts.filter((post) => post.author.slug === author)
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
    state.postState = ENUM.LOADED
  },
  setPost(state, post) {
    state.post = post
  },

  setPostState(state, postState) {
    state.postState = postState
  },
}

export const actions = {
  async getPosts({ commit }) {
    commit('setPostState', ENUM.ERROR)
    const response = await fetch(`${process.env.BASE_ENDPOINT_URL}/get_posts`)
    const data = await response.json()
    if (data.posts) {
      commit('setPosts', data.posts)
    } else {
      commit('setPostState', ENUM.ERROR)
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) {
    console.log(process.env.BASE_ENDPOINT_URL)
    fetch(`${process.env.BASE_ENDPOINT_URL}/get_recent_posts/`)
      .then((res) => res.json())
      .then((res) => {
        const { posts } = res
        if (posts) {
          commit('setLatestPosts', posts)
        }
      })
      .catch()
  },
}

// WebActions.onmessage = (e) => {
//   state.commit(e.data.type, e.data.payload)
// }
